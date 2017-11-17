import React from 'react';
import Request from './Request';

// All requests is one of the first components a user will see when visiting the application
// It is a table that contains the repository link, title, and author, as well as a button to view
// all requested issues on a repository.

class AllRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }

  // When the component mounts, a GET request should be sent. This request will return a list of all repositories
  // which will then be displayed by the component.

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
