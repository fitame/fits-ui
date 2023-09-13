import * as ToastPrimitives from '@radix-ui/react-toast';
import {X} from 'lucide-react';
import {forwardRef} from 'react';
import styles from './toastClose.module.scss';

const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({className, ...props}, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={`${styles.toastPrimitivesClose} ${className}`}
    toast-close=""
    {...props}
  >
    <X className={styles.icon} />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

export {ToastClose};
