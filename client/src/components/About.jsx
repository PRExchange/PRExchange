import React from 'react';

const About = () => {
  const user = window.user;
  if (user) {
    return (
      <div className="container h-100 d-flex justify-content-center">
        <div className="my-auto">
          <h4 className="display-3">Welcome to PRExchange!</h4>
          <br></br>
          <p className="display-7">
            As a developer, it can be difficult to get the community involved with your projects
            PRExchange aims to address this. PRExchange is a forum where developers can link to
            their GitHub projects, and provide examples of issues they would like opened. Any other
            developer can then choose to open this issue in exchange for an issue being opened on one
            of his or her own GitHub projects. Or maybe for a beer, or coffee.
          </p>
          <br></br>
          <p className="display-7">
            Ultimately, this is a tool that developers can use both to pad their resumes and generate
            community involvement in their projects.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container h-100 d-flex justify-content-center">
        <div className="my-auto">
          <h4 className="display-3">Welcome to PRExchange!</h4>
          <br></br>
          <p className="display-7">
            As a developer, it can be difficult to get the community involved with your projects
            PRExchange aims to address this. PRExchange is a forum where developers can link to
            their GitHub projects, and provide examples of issues they would like opened. Any other
            developer can then choose to open this issue in exchange for an issue being opened on one
            of his or her own GitHub projects. Or maybe for a beer, or coffee.
          </p>
          <br></br>
          <p className="display-7">
            Ultimately, this is a tool that developers can use both to pad their resumes and generate
            community involvement in their projects. To get started, <a href='/login'>login with your
            GitHub account</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
