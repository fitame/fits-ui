import * as React from 'react';
import {InputProps} from './input.types';
import styles from './input.module.scss';

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
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
InputComponent.displayName = 'Input';

const Input = React.memo(InputComponent);

export {Input};
