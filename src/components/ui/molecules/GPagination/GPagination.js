import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '@contexts/GlobalContext';

import './GPagination.scss';

function GPagination({ children, classes, ...rest }) {
  const className = classNames('g-pagination', classes);
  const { maxPage, handlePagination, paginationPage } = useContext(
    GlobalContext
  );
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(
    () => {
      const numbersArray = [];
      let minNumber = paginationPage - 2;
      let maxNumber = paginationPage + 2;

      if (minNumber < 1) {
        maxNumber += 1 - minNumber;
        minNumber = 1;
      }

      if (maxNumber > maxPage) {
        maxNumber = maxPage;
      }

      for (let i = minNumber; i <= maxNumber; i++) {
        numbersArray.push(i);
      }

      setPageNumbers(numbersArray);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paginationPage, maxPage]
  );

  function handlePageChange(page) {
    if (!(page < 1 || page > maxPage || page === paginationPage)) {
      handlePagination(page);
    }
  }

  return (
    <div className={className} {...rest}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`${
          paginationPage === 1
            ? 'pagination__icon-disabled'
            : 'pagination__icon'
        }`}
        onClick={() => handlePageChange(paginationPage - 1)}
      />
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`pagination__number${
            pageNumber === paginationPage ? ' pagination__number--active' : ''
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`${
          paginationPage === maxPage
            ? 'pagination__icon-disabled'
            : 'pagination__icon'
        }`}
        onClick={() => handlePageChange(paginationPage + 1)}
      />
    </div>
  );
}

GPagination.propTypes = {
  classes: PropTypes.string,
};

export default GPagination;
