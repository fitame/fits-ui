import * as React from 'react';
import styles from './dialogFooter.module.scss';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.dialogFooter} ${className}`} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

export {DialogFooter};
