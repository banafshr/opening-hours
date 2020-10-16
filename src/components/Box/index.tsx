import React from 'react';
import css from './Box.module.css';
import { BoxProps } from './types';

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  const classNames = [css.wrapper, className];
  return (
    <div className={classNames.join(' ')} {...rest}>
      {children}
    </div>
  );
};
