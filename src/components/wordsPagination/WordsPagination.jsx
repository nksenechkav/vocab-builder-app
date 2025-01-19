// src/components/wordsPagination/WordsPagination.jsx

import { useEffect } from 'react';
import { Button } from '@mui/material';
import css from './WordsPagination.module.scss';

const WordsPagination = ({ fetchData, currentPage, pageSize, totalPages }) => {
  // Handling page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchData(page);  // Call fetchData to update the page in the parent component
    }
  };

  useEffect(() => {
    // You can add any other side effects if needed here.
  }, [currentPage, totalPages]);

  return (
    <div className={css['pagination-container']}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={css['pagination-button']}
      >
        Previous
      </Button>
      <span className={css['pagination-text']}>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={css['pagination-button']}
      >
        Next
      </Button>
    </div>
  );
};

export default WordsPagination;
