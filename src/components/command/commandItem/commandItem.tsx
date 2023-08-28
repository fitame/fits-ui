import * as React from 'react';
import {Command as CommandPrimitive} from 'cmdk';
import styles from './commandItem.module.scss';

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({className, ...props}, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={`${styles.commandPrimitiveItem} ${className}`}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

export {CommandItem};
