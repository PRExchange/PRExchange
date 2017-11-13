import React from 'react';
import AllIssues from './AllIssues';
import IssueHeader from './IssueHeader';
import RequestForm from './RequestForm';

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      gitHubLink: '',
      allIssues: [],
    };

    this.addIssue = this.addIssue.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
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
      fetch('/api/createrequest', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          gitHubLink: this.state.gitHubLink,
          allIssues: this.state.allIssues,
          user: {
            id: window.user.id,
          }
        })
      })
      .then(res => {
        res.status(201).send('Successfully posted to database');
        res.redirect('/');
      })
      .catch(err => {
        console.error(err, 'ERROR IN POSTING REQUEST TO DATABASE');
        res.status(500).send(err);
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
