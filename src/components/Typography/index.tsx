import React from 'react';
import { H1Props } from './types';
import css from './Typography.module.css';

export const H1 = ({ children, className = '', ...rest }: H1Props) => {
  const classNames = [css.h1, className];
  return (
    <h1 className={classNames.join(' ')} {...rest}>
      {children}
    </h1>
  );
};

export const Text = ({
  children,
  className = '',
  bold,
  greyedOut,
  ...rest
}: H1Props) => {
  const classNames = [css.p, className];

  if (bold) {
    classNames.push(css.bold);
  }

  if (greyedOut) {
    classNames.push(css.greyedOut);
  }
  return (
    <p className={classNames.join(' ')} {...rest}>
      {children}
    </p>
  );
};

export const NotificationText = ({
  children,
  className = '',
  bold,
  ...rest
}: H1Props) => {
  const classNames = [css.NotificationText, className];
  return (
    <span className={classNames.join(' ')} {...rest}>
      {children}
    </span>
  );
};
