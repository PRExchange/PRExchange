const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const models = require('../../db/models');

passport.serializeUser((profile, done) => {
  return (null, profile.id);
});

passport.deserializeUser((id, done) => {
  return models.Profile.where({ id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      done(null, profile.serialize());
    })
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, null, { message: 'No user found' });
    });
});

passport.use('github', new GitHubStrategy({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBAKCURL
},
  (token, refreshToken, profile, done) => {
    process.nextTick(() => {
      return models.Auth.where({
        'github.id': profile.id,
        'github.login': profile.login,
        'github.name': profile.name,
        'github.username': profile.username,
        'github.email': profile.email
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        } else {
          const newUser = models.User();

          newUser.github.id = profile.id;
          newUser.github.token = token;
          newUser.github.name = profile.displayName;
          newUser.github.username = profile.username;

          newUser.save((err) => {
            if (err) {
              throw err;
            }

            return done(null, newUser);
          });
        }
      });
    });
}));

module.exports = passport;
