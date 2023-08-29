import {forwardRef} from 'react';

import styles from './cardHeader.module.scss';

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div ref={ref} className={`${styles.cardHeader} ${className}`} {...props} />
));

CardHeader.displayName = 'CardHeader';

export {CardHeader};
