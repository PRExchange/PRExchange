import React from 'react';

const Issue = props => {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.issueTitle}</td>
      <td>{issue.issueDescription}</td>
      <td>{issue.issueStatus}</td>
    </tr>
  );
}

export default Issue;
