import * as React from 'react';
import {Command as CommandPrimitive} from 'cmdk';

import styles from './commandList.module.scss';

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({className, ...props}, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={`${styles.commandPrimitiveList} ${className}`}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export {CommandList};
