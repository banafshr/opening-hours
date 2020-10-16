import React, { ElementType } from 'react';
import { H1 } from 'components/Typography';
import css from './Header.module.css';

interface Props {
  Icon: ElementType;
  title: string;
}
const Header = ({ Icon: Component, title }: Props) => {
  return (
    <div>
      {Component ? (
        <div className={css.title}>
          <Component className={css.icon} />
          <H1>{title}</H1>
        </div>
      ) : (
        <H1>{title}</H1>
      )}
    </div>
  );
};

export default Header;
