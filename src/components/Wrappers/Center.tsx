import React, { FC } from 'react';
import css from './Wrapper.module.css';

const Center: FC = ({ children }) => {
  return <div className={css.center}>{children}</div>;
};

export default Center;
