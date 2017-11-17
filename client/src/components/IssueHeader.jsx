import React from 'react';

// The header for the issue table displayed by AllIssues (shown by CreateRequest)

const IssueHeader = props => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Repository Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Repository Title"
          onChange={props.titleChange}
          required />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link to GitHub Repository</label>
        <input 
          type="text"
          className="form-control"
          id="link"
          placeholder="Link to GitHub Repository"
          onChange={props.linkChange} 
          required />
      </div>
    </form>
  );
}

export default IssueHeader;
