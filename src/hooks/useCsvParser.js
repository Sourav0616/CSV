import Papa from 'papaparse';

const useCsvParser = () => {
  const parseCsv = (file, callback) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        callback({ name: file.name, data: results.data });
      },
    });
  };

  return { parseCsv };
};

export default useCsvParser;
