import * as SelectPrimitive from '@radix-ui/react-select';
import {forwardRef} from 'react';
import styles from './selectContent.module.scss';

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, position = 'popper', ...props}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`${styles.selectPrimitiveContent} ${
        position === 'popper' && styles.popper
      } ${className}`}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={`
          ${styles.selectPrimitiveViewport}
          ${position === 'popper' && styles.popperViewport}
        `}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export {SelectContent};
