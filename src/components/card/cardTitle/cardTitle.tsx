import {forwardRef} from 'react';
import styles from './cardTitle.module.scss';

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({className, children, ...props}, ref) => (
  <h3 ref={ref} className={`${styles.cardTitle} ${className}`} {...props}>
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

export {CardTitle};
