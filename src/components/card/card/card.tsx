import * as React from 'react';
import styles from './card.module.scss';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, children, ...props}, ref) => {
  return (
    <div ref={ref} className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export {Card};
