import React from 'react';
import css from './Box.module.css';
import { BoxProps } from './types';

export const Box: React.FC<BoxProps> = ({ children, className, animated, ...rest }) => {
  const classNames = [css.wrapper, className];
  if( animated ) classNames.push(css.animated)
  return (
    <div className={classNames.join(' ')} {...rest}>
      {children}
    </div>
  );
};
