import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GInput.scss';

function GInput({ change, classes, onEnter, ...rest }) {
  const className = classNames('g-input', classes);

  function handleKey(e) {
    if (e.key === 'Enter') {
      onEnter();
    }
  }

  return (
    <input
      className={className}
      onChange={change}
      onKeyPress={handleKey}
      {...rest}
    />
  );
}

GInput.defaultProps = {
  change: () => {},
  onEnter: () => {},
};

GInput.propTypes = {
  change: PropTypes.func,
  classes: PropTypes.string,
  onEnter: PropTypes.func,
};

export default GInput;
