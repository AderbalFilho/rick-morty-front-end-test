import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GModal.scss';

function GModal({ children, classes, ...rest }) {
  const className = classNames('g-modal', classes);

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

GModal.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default GModal;
