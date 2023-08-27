import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import {DialogOverlay} from '../dialogOverlay/dialogOverlay';
import {DialogPortal} from '../dialogPortal/dialogPortal';
import styles from './dialogContent.module.scss';

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`${styles.dialogPrimitiveContent} ${className}`}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={`${styles.dialogPrimitiveClose} ${className}`}
      >
        <X className={styles.dialogX} />
        <span className={styles.dialogClose}>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

export {DialogContent};
