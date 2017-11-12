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
    e.preventDefault();
    if (this.state.title.length > 0 && this.state.gitHubLink.length > 0 && this.state.allIssues.length > 0) {
      console.log('FETCH GOES HERE');
      // fetch()
    } else {
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
      <div>
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
          className="btn btn-secondary"
          innertext="Submit Issue Request"
          onClick={this.handleClick} />
      </div>
    );
  }
};

export default CreateRequest;
