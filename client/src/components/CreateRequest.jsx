import React from 'react';
import InputForm from './InputForm';

class CreateRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      requestCounter: [],
    }

    this.addRequest = this.addRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeLastRequest = this.removeLastRequest.bind(this);
  }

  addRequest(e) {
    e.preventDefault();
    let requestCounter = this.state.requestCounter;
    let len = requestCounter.length;
    requestCounter.push(len + 1);
    console.log(requestCounter);
    this.setState(requestCounter);
  }

  handleClick(e) {
    e.preventDefault();
    handleSubmit();
  }

  handleChange() {
    
  }

  handleSubmit() {
    console.log(this.state.requests);
  }

  removeLastRequest(e) {
    e.preventDefault();
    let requestCounter = this.state.requestCounter;
    let requests = this.state.requests;
    let len = requestCounter.length;
    if (len > 0) {
      requestCounter.pop();
      requests.pop();
      this.setState({requestCounter, requests});
    }
  }

  render() {
    if (this.state.requestCounter.length > 0) {
      return (
        <div>
          <form>

            <div className="btn-group">
              <button className="btn btn-primary" style={{'margin':'2px'}} onClick={this.handleClick}>Submit</button>
              <button className="btn btn-secondary" style={{'margin':'2px'}} onClick={this.addRequest}>Add</button>
              <button className="btn btn-danger" style={{'margin':'2px'}} onClick={this.removeLastRequest}>Remove Last</button>
            </div>
            
            <div className="form-group">  
              {this.state.requestCounter.map((req, idx) =>
                <InputForm key={idx} handleChange={this.handleChange}/>
              )}
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form>

            <div className="btn-group">
              <button className="btn btn-primary" style={{'margin':'2px'}} disabled>Submit</button>
              <button className="btn btn-secondary" style={{'margin':'2px'}} onClick={this.addRequest}>Add</button>
              <button className="btn btn-danger" style={{'margin':'2px'}} disabled>Remove Last</button>
            </div>
          </form>
        </div>
      );
    }
  }
};

export default CreateRequest;
