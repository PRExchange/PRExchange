const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const models = require('../../db/models');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
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
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBAKCURL
},
  (token, refreshToken, profile, done) => getOrCreateOAuthProfile('github', profile, done))
);


const getOrCreateOAuthProfile = (type, oauthProfile, done) => {
  return models.Auth.where({ type, oauth_id: oauthProfile.id }).fetch({
    withRelated: ['profile']
  })
    .then(oauthAccount => {

      if (oauthAccount) {
        throw oauthAccount;
      }

      return models.Profile.where({ github_id: oauthProfile.id }).fetch();
    })
    .then(profile => {

      let profileInfo = {
        github_id: oauthProfile.id,
        displayName: oauthProfile.displayName,
        username: oauthProfile.username,
        profileUrl: oauthProfile.profileUrl
      };

      if (profile) {
        return profile.save(profileInfo, { method: 'update' });
      }
      return models.Profile.forge(profileInfo).save();
    })
    .tap(profile => {
      return models.Auth.forge({
        type,
        profile_id: profile.get('id'),
        oauth_id: oauthProfile.id
      }).save();
    })
    .error(err => {
      done(err, null);
    })
    .catch(oauthAccount => {
      if (!oauthAccount) {
        throw oauthAccount;
      }
      return oauthAccount.related('profile');
    })
    .then(profile => {
      if (profile) {
        done(null, profile.serialize());
      }
    })
    .catch(() => {
      done(null, null, {'message': 'Signing up requires an email address'});
    });
};

module.exports = passport;
