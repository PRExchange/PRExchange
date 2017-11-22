import React from 'react';
import { Link } from 'react-router-dom'

// Each request is a member of the AllRequests table.

const Request = props => {
  const repo = props.req;
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
        <Link
          className='btn btn-secondary'
          role='button'
          onClick={props.updateSelected(repo.id)}
          to={`/viewrequest/${repo.id}`}
          >All Issues</Link>
      </td>
    </tr>
  );
}

export default Request;
