import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';
import styles from './checkbox.module.scss';

const CheckboxComponent = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, ...props}, ref) => (
  <CheckboxPrimitive.Root className={styles.checkbox} ref={ref} {...props}>
    <CheckboxPrimitive.Indicator className={styles.indicator}>
      <Check className={styles.check} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxComponent.displayName = CheckboxPrimitive.Root.displayName;

const Checkbox = React.memo(CheckboxComponent);

export {Checkbox};
