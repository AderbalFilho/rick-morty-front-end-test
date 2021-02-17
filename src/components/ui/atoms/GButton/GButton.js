import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GButton.scss';

function GButton({ children, classes, ...rest }) {
  const className = classNames('g-button', classes);

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

GButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default GButton;
