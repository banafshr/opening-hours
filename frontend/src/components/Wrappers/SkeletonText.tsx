import React from 'react'
import css from './Wrapper.module.css'

const SkeletonText = ({ length = 10, ...props }): React.ReactElement => {
  const content = (' ').repeat(length)
  return (
    <span className={css.text} {...props}>
      {content}
    </span>
  )
}

export default SkeletonText
