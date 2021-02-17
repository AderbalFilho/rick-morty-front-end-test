import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GInput.scss';

function GInput({ classes, ...rest }) {
  const className = classNames('g-input', classes);

  return <input className={className} {...rest} />;
}

GInput.propTypes = {
  classes: PropTypes.string,
};

export default GInput;
