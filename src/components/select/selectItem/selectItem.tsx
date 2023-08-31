import * as SelectPrimitive from '@radix-ui/react-select';
import {forwardRef} from 'react';
import {Check} from 'lucide-react';
import styles from './selectItem.module.scss';

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`${styles.selectPrimitiveItem} ${className}`}
    {...props}
  >
    <span className={styles.selectItemSpan}>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {SelectItem};
