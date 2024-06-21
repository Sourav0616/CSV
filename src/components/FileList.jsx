import React from 'react';

const FileList = ({ files, onSelectFile, onDeleteFile }) => {
  return (
    <div className="file-list">
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <span onClick={() => onSelectFile(file)}>{file.name}</span>
            <button onClick={() => onDeleteFile(file)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
