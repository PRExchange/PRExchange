import React from 'react';

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
    </tr>
  );
}

export default Request;
