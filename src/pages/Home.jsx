import React, { useState } from 'react';
import CsvUploader from '../components/CsvUploader';
import FileList from '../components/FileList';
import TableDisplay from '../components/TableDisplay';
import ChartDisplay from '../components/ChartDisplay';

const Home = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
  };

  const handleSelectFile = (file) => {
    setSelectedFile(file);
  };

  const handleDeleteFile = (fileToDelete) => {
    setFiles(files.filter(file => file !== fileToDelete));
    if (selectedFile === fileToDelete) {
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <h1>CSV Uploader</h1>
      <CsvUploader onFileUpload={handleFileUpload} />
      <FileList files={files} onSelectFile={handleSelectFile} onDeleteFile={handleDeleteFile} />
      {selectedFile && <TableDisplay data={selectedFile.data} />}
      {selectedFile && <ChartDisplay data={selectedFile.data} />}
    </div>
  );
};

export default Home;
