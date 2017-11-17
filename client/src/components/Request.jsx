import React from 'react';

// Each request is a member of the AllRequests table.

const Request = props => {
  const repo = props.req;
  const href = `viewrequest/${repo.id}`;
  return (
    <tr>
      <td>{repo.title}</td>
      <td>
        <a href={repo.github_link}>
          {repo.github_link}
        </a>    
      </td>
      <td>
        <a href={repo.profile.profileUrl}>
          {repo.profile.username}
        </a>
      </td>
      <td>
        <a href={href} className='btn btn-secondary' role='button'>All Issues</a>
      </td>
    </tr>
  );
}

export default Request;
