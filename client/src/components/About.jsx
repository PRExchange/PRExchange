import React from 'react';

const About = () => {
  const user = window.user;
  if (user) {
    return (
      <div class="container h-100 d-flex justify-content-center">
        <div class="my-auto">
          <h4 class="display-3">Welcome to PRExchange!</h4>
          <br></br>
          <h8 class="display-7">
            As a developer, it can be difficult to get the community involved with your projects
            PRExchange aims to address this. PRExchange is a forum where developers can link to
            their GitHub projects, and provide examples of issues they would like opened. Any other
            developer can then choose to open this issue in exchange for an issue being opened on one
            of his or her own GitHub projects. Or maybe for a beer, or coffee.
          </h8>
          <br></br>
          <h8 class="display-7">
            Ultimately, this is a tool that developers can use both to pad their resumes and generate
            community involvement in their projects.
          </h8>
        </div>
      </div>
    );
  } else {
    return (
      <div class="container h-100 d-flex justify-content-center">
        <div class="my-auto">
          <h4 class="display-3">Welcome to PRExchange!</h4>
          <br></br>
          <h8 class="display-7">
            As a developer, it can be difficult to get the community involved with your projects
            PRExchange aims to address this. PRExchange is a forum where developers can link to
            their GitHub projects, and provide examples of issues they would like opened. Any other
            developer can then choose to open this issue in exchange for an issue being opened on one
            of his or her own GitHub projects. Or maybe for a beer, or coffee.
          </h8>
          <br></br>
          <h8 class="display-7">
            Ultimately, this is a tool that developers can use both to pad their resumes and generate
            community involvement in their projects. To get started, <a href='/login'>login with your
            GitHub account</a>
          </h8>
        </div>
      </div>
    );
  }
}

export default About;
