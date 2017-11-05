import React from 'react';
import Issue from './Issue';

const AllIssues = props => {
  // console.log(props, 'AllIssues props');
  return (
    <div>
      <h4>{props.repository}</h4>
      <table className="table table-sm">
        <tbody>
          {props.allIssues.map((issue, idx) =>
            <Issue key={idx} issue={issue} deleteIssue={props.deleteIssue} />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllIssues;
