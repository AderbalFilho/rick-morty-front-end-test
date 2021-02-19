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
  const { maxPage, handlePagination, paginationPage } = useContext(
    GlobalContext
  );
  const className = classNames('g-pagination', classes);
  const [classNamePrevious, setClassNamePrevious] = useState('');
  const [classNameNext, setClassNameNext] = useState('');
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const isFirstPage = paginationPage === 1;
    const isLastPage = paginationPage === maxPage;

    setClassNamePrevious(
      classNames(
        'pagination__icon',
        isFirstPage && 'pagination__icon pagination__icon--disabled'
      )
    );
    setClassNameNext(
      classNames(
        'pagination__icon',
        isLastPage && 'pagination__icon pagination__icon--disabled'
      )
    );
  }, [paginationPage, maxPage]);

  useEffect(
    () => {
      if (window.innerWidth < 768) {
        setPageNumbers([paginationPage]);
      } else {
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
      }
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
        className={classNamePrevious}
        onClick={() => handlePageChange(paginationPage - 1)}
      />
      {pageNumbers.map((pageNumber) => {
        const isActualPage = pageNumber === paginationPage;
        const classNamePageActive = classNames(
          'pagination__number',
          isActualPage && 'pagination__number--active'
        );

        return (
          <span
            key={pageNumber}
            className={classNamePageActive}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
      <FontAwesomeIcon
        icon={faChevronRight}
        className={classNameNext}
        onClick={() => handlePageChange(paginationPage + 1)}
      />
    </div>
  );
}

GPagination.propTypes = {
  classes: PropTypes.string,
};

export default GPagination;
