import * as SelectPrimitive from '@radix-ui/react-select';
import {forwardRef} from 'react';
import styles from './selectLabel.module.scss';

const SelectLabel = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({className, ...props}, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={`${styles.selectPrimitiveLabel} ${className}`}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export {SelectLabel};
