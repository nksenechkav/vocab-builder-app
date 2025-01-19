// src/components/wordsPagination/WordsPagination.jsx

// src/components/wordsPagination/WordsPagination.jsx

import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import css from './WordsPagination.module.scss';

const WordsPagination = ({ fetchData, currentPage, pageSize, totalPages }) => {
  // Handling page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      fetchData(page);  // Call fetchData to update the page in the parent component
    }
  };

  // Render pagination buttons
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${css['pagination-button']} ${i === currentPage ? css['active-page'] : ''}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className={css['pagination-container']}>
      {/* First Page Button */}
      <button
        onClick={() => handlePageChange(1)}
        className={`${css['pagination-button']} ${currentPage === 1 ? css['active-arrow'] : ''}`}
      >
        <FaAngleDoubleLeft className={css['icon-arrow']} size={16} />
      </button>

      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${css['pagination-button']} ${currentPage === 1 ? css['disabled'] : ''}`}
      >
        <FaAngleLeft className={css['icon-arrow']} size={16} />
      </button>

      {/* Page Number Buttons */}
      {renderPageButtons()}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${css['pagination-button']} ${currentPage === totalPages ? css['disabled'] : ''}`}
      >
        <FaAngleRight className={css['icon-arrow']} size={16} />
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        className={`${css['pagination-button']} ${currentPage === totalPages ? css['active-arrow'] : ''}`}
      >
        <FaAngleDoubleRight className={css['icon-arrow']} size={16} />
      </button>
    </div>
  );
};

export default WordsPagination;



