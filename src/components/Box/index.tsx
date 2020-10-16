import React from 'react';
import css from './Box.module.css';
import { BoxProps } from './types';

export const Box = ({ children, className, ...rest }: BoxProps) => {
  const classNames = [css.wrapper, className];
  return (
    <div className={classNames.join(' ')} {...rest}>
      {children}
    </div>
  );
};
