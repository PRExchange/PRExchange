import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.setBody = this.setBody.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setBody(e) {
    const idx = this.state.id;
    let body = e.target.value;
    this.setState({body});
  }

  setTitle(e) {
    const idx = this.state.id;
    let title = e.target.value;
    this.setState({title});
  }

  render() {
    return (
      <div>
        <label htmlFor="issueTitle">Title of the Issue</label>
        <textarea className="form-control" placeholder="Title" id="issueTitle" onChange={this.setTitle} />
        <label htmlFor="issueRequest">Description</label>
        <textarea className="form-control" placeholder="Describe the issue you want opened" id="issueRequest" rows="5" onChange={this.setBody}></textarea>
      </div>
    );
  }
};

export default InputForm;
