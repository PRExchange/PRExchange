import React from 'react';

// Issue is the sub-component displayed by the AllIssues component (displayed by CreateRequest)

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
