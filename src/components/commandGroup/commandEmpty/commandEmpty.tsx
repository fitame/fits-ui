import * as React from 'react';
import {Command as CommandPrimitive} from 'cmdk';

import styles from './commandEmpty.module.scss';

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={styles.commandPrimitiveEmpty}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export {CommandEmpty};
