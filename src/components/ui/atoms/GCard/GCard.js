import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GCard.scss';

function GCard({ children, classes, variant, ...rest }) {
  const className = classNames('g-card', `g-card--${variant}`, classes);

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

GCard.defaultProps = {
  variant: 'normal',
};

GCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'loading', 'sheet', 'img-sheet']),
};

export default GCard;
