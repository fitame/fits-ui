import * as React from 'react';
import styles from './dialogHeader.module.scss';

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.dialogHeader} ${className}`} {...props} />
);

DialogHeader.displayName = 'DialogHeader';

export {DialogHeader};
