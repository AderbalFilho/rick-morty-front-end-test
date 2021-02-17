import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './GTitle.scss';

function GTitle({
  color,
  children,
  classes,
  family,
  spacing,
  tag,
  weight,
  ...rest
}) {
  const HtmlTag = tag;
  const className = classNames(
    'g-title',
    `g-title--${color}`,
    `g-title--${family}`,
    `g-title--space-${spacing}`,
    `g-title--${weight}`,
    classes
  );

  return (
    <HtmlTag className={className} {...rest}>
      {children}
    </HtmlTag>
  );
}

GTitle.defaultProps = {
  color: 'white',
  family: 'nunito',
  spacing: 'normal',
  tag: 'h1',
  weight: 'normal',
};

GTitle.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['darkest-grey', 'light-grey', 'lime-green', 'white']),
  family: PropTypes.oneOf(['nunito', 'seravek']),
  spacing: PropTypes.oneOf(['normal', 'large']),
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  weight: PropTypes.oneOf(['normal', 'bold']),
};

export default GTitle;
