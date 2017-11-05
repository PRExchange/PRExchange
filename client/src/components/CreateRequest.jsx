import React from 'react';
import AllIssues from './AllIssues'; 

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitHubLink: '',
      allIssues: [],
      issueTitle: '',
      issueDescription: '',
    }

    this.confirmDone = this.confirmDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setLink = this.setLink.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  confirmDone(e) {
    e.preventDefault();
    if (this.state.allIssues.length > 0) {
      console.log('Clicked Done! Save data to DB here');
    } else {
      alert('Please fill out at least one issue reques before continuing');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.gitHubLink && this.state.issueTitle && this.state.issueDescription) {
      let allIssues = this.state.allIssues;
      let newIssue = {
        gitHubLink: this.state.gitHubLink,
        issueTitle: this.state.issueTitle,
        issueDescription: this.state.issueDescription
      }
      allIssues.push(newIssue);
      this.setState({allIssues});
      this.resetState();
    }
  }

  resetState() {
    let issueTitle = '';
    let issueDescription = '';
    this.setState({ issueTitle, issueDescription});
  }

  setDescription(e) {
    let issueDescription = e.target.value;
    this.setState({issueDescription});
  }

  setLink(e) {
    let gitHubLink = e.target.value;
    this.setState({gitHubLink});
  }

  setTitle(e) {
    let issueTitle = e.target.value;
    this.setState({issueTitle});
  }

  render() {
    return (
      <div>
        <AllIssues
          allIssues={this.state.allIssues}
          repository={this.state.gitHubLink} />
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="githubLink">Link to the GitHub Repository</label>
            <input
              type="text"
              className="form-control"
              id="githubLink"
              placeholder="GitHub Repository"
              onChange={this.setLink}
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="issueTitle">Issue Title</label>
            <input
              type="text"
              className="form-control"
              id="issueTitle"
              palceholder="Title"
              value={this.state.issueTitle}
              onChange={this.setTitle}
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="issueDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="issueDescription"
              palceholder="Describe the issue you want opened"
              value={this.state.issueDescription}
              onChange={this.setDescription}
              required/>
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Add Issue</button>
        </form>
        <br />
        <button className="btn btn-submit" onClick={this.confirmDone}>Submit Issue Request</button>
      </div>
    );
  }
};

export default CreateRequest;
