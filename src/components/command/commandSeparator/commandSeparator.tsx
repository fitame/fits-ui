import * as React from 'react';

import {Command as CommandPrimitive} from 'cmdk';

import styles from './commandSeparator.module.scss';

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={`${styles.commandSeparator} ${className}`}
    {...props}
  />
));

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export {CommandSeparator};
