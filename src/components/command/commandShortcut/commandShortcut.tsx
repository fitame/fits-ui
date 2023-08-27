import * as React from 'react';
import styles from './commandShortcut.module.scss';

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`${styles.commandShortcut} ${className}`} {...props} />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {CommandShortcut};
