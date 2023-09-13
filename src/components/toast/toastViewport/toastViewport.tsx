import * as ToastPrimitives from '@radix-ui/react-toast';
import {forwardRef} from 'react';
import styles from './toastViewport.module.scss';

const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({className, ...props}, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={`${className} ${styles.toastViewport}`}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export {ToastViewport};
