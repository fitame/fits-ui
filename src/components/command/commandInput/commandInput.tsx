import * as React from 'react';

import {Command as CommandPrimitive} from 'cmdk';
import {Search} from 'lucide-react';

import styles from './commandInput.module.scss';

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({className, ...props}, ref) => (
  <div className={styles.commandInput} data-cmdk-input-wrapper="">
    <Search className={styles.searchIcon} />
    <CommandPrimitive.Input
      ref={ref}
      className={`${styles.commandPrimitiveInput} ${className}`}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

export {CommandInput};
