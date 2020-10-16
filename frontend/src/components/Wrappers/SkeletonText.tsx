import React from 'react';
import css from './Wrapper.module.css';

const SkeletonText = ({ length = 10, ...props }): React.ReactElement => {
  return (
    <span className={css.text} style={{ width: length + 'px' }} {...props}>
      <span className={css.container} />
    </span>
  );
};

export default SkeletonText;
