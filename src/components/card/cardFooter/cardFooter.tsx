import {forwardRef} from 'react';

import styles from './cardFooter.module.scss';

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div ref={ref} className={`${styles.cardFooter} ${className}`} {...props} />
));

CardFooter.displayName = 'CardFooter';

export {CardFooter};
