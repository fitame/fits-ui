import * as ToastPrimitives from '@radix-ui/react-toast';

import {forwardRef} from 'react';
import styles from './toastDescription.module.scss';

const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({className, ...props}, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={`${className} ${styles.toastDescription}`}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {ToastDescription};
