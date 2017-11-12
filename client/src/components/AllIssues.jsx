import React from 'react';
import Issue from './Issue';

const AllIssues = props => {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.link}</h5>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Issue Title</th>
            <th scope="col">Issue Description</th>
            <th scope="col">Issue Status</th>
          </tr>
        </thead>
        <tbody>
          {props.allIssues.map((issue, idx) =>
            <Issue key={idx} issue={issue} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllIssues;
