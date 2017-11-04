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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeLastRequest = this.removeLastRequest.bind(this);
  }

  addRequest(e) {
    e.preventDefault();
    let requestCounter = this.state.requestCounter;
    let len = requestCounter.length;
    requestCounter.push(len);
    console.log(requestCounter);
    this.setState(requestCounter);
  }

  handleClick(e) {
    e.preventDefault();
    this.handleSubmit();
  }

  handleSubmit(e) {
    const forms = document.getElementsByClassName('form-group')[0].children;
    let requests = this.state.requests;
    for (let i = 0; i < forms.length; i++) {
      let cur = forms[i].childNodes;
      let curTitle = cur[1].value;
      let curBody = cur[3].value;
      requests.push({title: curTitle, body: curBody});
    }

    fetch('/api/createrequest', {
      method: 'post',
      data: {
        requests: this.state.requests
      }
    })
      .then(res => {

      })
    this.setState({requests});
  }

  removeLastRequest(e) {
    e.preventDefault();
    let requestCounter = this.state.requestCounter;
    let requests = this.state.requests;
    let len = requestCounter.length;
    if (len > -1) {
      requestCounter = requestCounter.slice(0, requestCounter.length - 1);
      requests = requests.slice(0, requests.length - 1);
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
                <InputForm key={idx} id={idx} handleChange={this.handleChange}/>
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
