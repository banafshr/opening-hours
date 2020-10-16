import React from 'react';
import { TextProps } from './types';
import css from './Typography.module.css';

export const H1 = ({
  children,
  className = '',
  ...rest
}: TextProps): React.ReactElement => {
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
}: TextProps): React.ReactElement => {
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
  ...rest
}: TextProps): React.ReactElement => {
  const classNames = [css.NotificationText, className];
  return (
    <span className={classNames.join(' ')} {...rest}>
      {children}
    </span>
  );
};
