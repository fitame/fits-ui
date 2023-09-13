import * as ToastPrimitives from '@radix-ui/react-toast';
import {forwardRef} from 'react';
import styles from './toastTitle.module.scss';

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({className, ...props}, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={`${className} ${styles.toastTitle}`}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

export {ToastTitle};
