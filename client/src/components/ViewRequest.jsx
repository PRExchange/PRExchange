import React from 'react';

// When a user clicks the 'All Issues' button (in each Request in AllRequests)
// they will be shown this component.

class ViewRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    console.log('ViewRequest is mounting');
    console.log(window.id, 'Searching for this id');
  }

  render() {
    return (
      <div>
        ViewRequest component!
      </div>
    );
  }
};

export default ViewRequest;
