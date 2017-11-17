import React from 'react';
import AllIssues from './AllIssues';
import IssueHeader from './IssueHeader';
import RequestForm from './RequestForm';

// This is the form that a user interacts with when creating an issue request on their repository.

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      gitHubLink: '',
      id: 0,
      allIssues: [],
    };

    this.addIssue = this.addIssue.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  addIssue(issue) {
    let allIssues = this.state.allIssues;
    allIssues.push(issue);
    this.setState({allIssues});
  };

  handleTitleChange(e) {
    let title = this.state.title;
    title = e.target.value;
    this.setState({title});
  }

  handleClick(e) {
    if (this.state.title.length > 0 && this.state.gitHubLink.length > 0 && this.state.allIssues.length > 0) {
      const body = JSON.stringify({
        title: this.state.title,
        gitHubLink: this.state.gitHubLink,
        allIssues: this.state.allIssues,
        user: {
          id: window.user.id
        }
      })
      fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then(res => {
        this.handleRedirect(res);
      })
      .catch(err => {
        console.error(err, 'ERROR IN POSTING REQUEST TO DATABASE');
      })
    } else {
      e.preventDefault();
      alert('Repository Title, Link, and at least one Issue are all required');
    }
  };

  handleLinkChange(e) {
    let gitHubLink = this.state.gitHubLink;
    gitHubLink = e.target.value;
    this.setState({gitHubLink});
  };

  handleRedirect(res) {
    if (res.status === 201) {
      res.json()
      .then(data => {
        this.setState({id: data.id});
      })
      .then(() => {
        window.location.href = '/home';
      })
    }
  }

  render() {
    return (
      <div style={{'marginBottom':'50px'}}>
        <br />
        <AllIssues
          allIssues={this.state.allIssues}
          title={this.state.title}
          link={this.state.gitHubLink} />
        <br />
        <IssueHeader
          titleChange={this.handleTitleChange}
          linkChange={this.handleLinkChange} />
        <br />
        <RequestForm addIssue={this.addIssue} />
        <br />
        <button
          className="btn btn-success"
          onClick={this.handleClick}>Submit Issue Reques</button>
      </div>
    );
  }
};

export default CreateRequest;
