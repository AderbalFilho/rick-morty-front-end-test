import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GInput.scss';

function GInput({ change, classes, ...rest }) {
  const className = classNames('g-input', classes);

  return <input className={className} onChange={change} {...rest} />;
}

GInput.defaultProps = {
  change: () => {},
};

GInput.propTypes = {
  change: PropTypes.func,
  classes: PropTypes.string,
};

export default GInput;
