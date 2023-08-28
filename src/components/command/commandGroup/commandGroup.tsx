import * as React from 'react';
import {Command as CommandPrimitive} from 'cmdk';
import styles from './commandGroup.module.scss';

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={`${styles.commandPrimitiveGroup} ${className}`}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export {CommandGroup};
