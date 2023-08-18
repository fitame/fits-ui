import * as React from 'react';
import {InputProps} from './input.types';
import styles from './input.module.scss';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={`${styles.input}  ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export {Input};
