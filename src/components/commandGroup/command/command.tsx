import * as React from 'react';

import {Command as CommandPrimitive} from 'cmdk';

import styles from './command.module.scss';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({className, ...props}, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`${styles.commandPrimitive} ${className}`}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

export {Command};
