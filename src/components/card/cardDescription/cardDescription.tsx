import {forwardRef} from 'react';
import styles from './cardDescription.module.scss';

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, children, ...props}, ref) => (
  <p
    ref={ref}
    className={`${styles.cardDescription} ${className}`}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export {CardDescription};
