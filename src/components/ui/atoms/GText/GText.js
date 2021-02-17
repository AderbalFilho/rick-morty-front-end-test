import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GText.scss';

function GText({ color, children, classes, family, ...rest }) {
  const className = classNames(
    'g-text',
    `g-text--${color}`,
    `g-text--${family}`,
    classes
  );

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
}

GText.defaultProps = {
  color: 'white',
  family: 'nunito',
};

GText.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['darkest-grey', 'light-grey', 'white']),
  family: PropTypes.oneOf(['nunito', 'seravek']),
};

export default GText;
