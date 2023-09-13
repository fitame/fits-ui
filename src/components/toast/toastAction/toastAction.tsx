import * as ToastPrimitives from '@radix-ui/react-toast';
import {forwardRef} from 'react';
import styles from './toastAction.module.scss';

const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({className, ...props}, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={`${styles.toastPrimitivesAction} ${className}`}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {ToastAction};
