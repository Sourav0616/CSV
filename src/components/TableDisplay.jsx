import React, { useState } from 'react';
import SearchBar from './SearchBar';
import useSortableData from '../hooks/useSortableData';
import Pagination from './Pagination';


const TableDisplay = ({ data }) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = items.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="table-display">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {headers.length > 0 && (
        <table>
          <thead>
            <tr>
              {headers.map((key) => (
                <th key={key} onClick={() => requestSort(key)}>
                  {key}
                  {sortConfig && sortConfig.key === key && (
                    <span>{sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index}>
                {headers.map((key) => (
                  <td key={key}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        currentPage={currentPage}
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableDisplay;
