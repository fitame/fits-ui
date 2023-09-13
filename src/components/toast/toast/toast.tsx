import * as ToastPrimitives from '@radix-ui/react-toast';
import {forwardRef} from 'react';
import styles from './toast.module.scss';

const toastVariants = {
  variants: {
    variant: {
      default: `${styles.base} ${styles.default}`,
      destructive: `${styles.base} ${styles.destructive}`,
    },
  },
  defaultVariants: {
    variant: `${styles.base} ${styles.default}`,
  },
};

const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & {
    variant?: keyof typeof toastVariants.variants.variant;
  }
>(({className, variant, ...props}, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={`${
        variant
          ? toastVariants.variants.variant[variant]
          : toastVariants.defaultVariants.variant
      } ${className}`}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export {Toast};
