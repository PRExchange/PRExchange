import React from 'react';

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestNumber: 0,
      requestBody: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setNumber = this.setNumber.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    handleSubmit();
  }

  handleChange(e) {
    let requestBody = e.target.value;
    this.setState({requestBody});
  }

  handleSubmit() {
    console.log(this.state.requestBody);
  }

  componentWillMount() {
    // some function to set the correct requestNumber
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="issueRequest">Open an Issue</label>
            <textarea className="form-control" id="issueRequest" rows="5" onChange={this.handleChange}></textarea>
          </div>
          <button className="btn btn-submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
}
