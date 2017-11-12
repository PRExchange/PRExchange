import React from 'react';

const Issue = props => {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td>{issue.status}</td>
    </tr>
  );
}

export default Issue;
