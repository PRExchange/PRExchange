import React from 'react';
import Request from './Request';

class AllRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  componentWillMount() {
    fetch('/api/requests', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      res.json()
      .then(data => {
        this.setState({repositories: data})
      })
      .catch(err => {
        console.error(err, 'ERROR IN RETREIVING ALL REQUESTS FROM DATABASE');
        res.status(500).send(err);
      })
    })
  }

  render() {
    if (this.state.repositories.length) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Repository Title</th>
              <th>Repository Link</th>
              <th>Repository Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.repositories.map((req, idx) =>
              <Request key={idx} req={req} />
            )}
          </tbody>
        </table>
      );
    } else {
      return (
        <h2>Loading...</h2>
      )
    }
  }
};

export default AllRequests;
