import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    // this.setState({body});
    // this.props.passToParent(body)
  }

  render() {
    return (
      <div>
        <label htmlFor="issueTitle">Title of the Issue</label>
        <textarea className="form-control" placeholder="Title" id="issueTitle" />
        <label htmlFor="issueRequest">Description</label>
        <textarea className="form-control" placeholder="Describe the issue you want opened" id="issueRequest" rows="5" onChange={this.handleChange()}></textarea>
      </div>
    );
  }
};

export default InputForm;
