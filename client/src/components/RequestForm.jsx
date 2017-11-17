import React from 'react';

// RequestForm will handle issueDescriptions and titles.
// This makes it so that every time a user requests a new issue be opened on their repository,
// they do not have to re-enter the repository title and link

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issueTitle: '',
      issueDescription: ''
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleDescriptionChange(e) {
    let issueDescription = this.state.issueDescription;
    issueDescription = e.target.value;
    this.setState({issueDescription});
  }

  handleSubmit(e) {
    if (this.state.issueDescription.length > 0 && this.state.issueTitle.length > 0) {
      e.preventDefault();
      const issueDescription = '';
      const issueTitle = '';
      const issue = {
        title: this.state.issueTitle,
        description: this.state.issueDescription,
        status: 'open'
      }
      this.props.addIssue(issue);
      this.setState({issueDescription, issueTitle});
    } else {
      e.preventDefault();
      alert('Issue Title and Description fields are required');
    }
  }

  handleTitleChange(e) {
    let issueTitle = this.state.issueTitle;
    issueTitle = e.target.value;
    this.setState({issueTitle});
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="issueTitle">Issue Title</label>
          <input 
            type="text"
            className="form-control"
            id="issueTitle"
            value={this.state.issueTitle}
            placeholder="Issue Title"
            onChange={this.handleTitleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="issueDescription">Issue Description</label>
          <input 
            type="text"
            className="form-control"
            id="issueDescription"
            value={this.state.issueDescription}
            placeholder="Issue Description"
            onChange={this.handleDescriptionChange} />
        </div>
        <button className="btn btn-primary" onClick={this.handleSubmit}>Add Issue</button>
      </form>
    )
  }
};

export default RequestForm;
