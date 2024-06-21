import React, { useState } from 'react';
import useCsvParser from '../hooks/useCsvParser';


const CsvUploader = ({ onFileUpload }) => {
  const [csvFile, setCsvFile] = useState(null);
  const { parseCsv } = useCsvParser();

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (csvFile && csvFile.type === 'text/csv') {
      parseCsv(csvFile, onFileUpload);
    } else {
      alert('Please upload a valid CSV file.');
    }
  };

  return (
    <div className="csv-uploader">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default CsvUploader;
