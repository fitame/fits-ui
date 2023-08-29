import {forwardRef} from 'react';
import styles from './cardContent.module.scss';

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, children, ...props}, ref) => (
  <div ref={ref} className={`${styles.cardContent} ${className}`} {...props}>
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

export {CardContent};
