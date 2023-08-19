import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import styles from './button.module.scss';

const buttonVariants = {
  variants: {
    variant: {
      default: styles.default,
      destructive: styles.destructive,
      outline: styles.outline,
      secondary: styles.secondary,
      ghost: styles.ghost,
      link: styles.link,
    },
    size: {
      default: styles.default_size,
      sm: styles.sm,
      lg: styles.lg,
      full: styles.full,
      icon: styles.icon,
    },
  },
  defaultVariants: {
    variant: styles.default,
    size: styles.default_size,
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants.variants.variant;
  size?: keyof typeof buttonVariants.variants.size;
}

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={`${styles.base} ${
          variant
            ? buttonVariants.variants.variant[variant]
            : buttonVariants.defaultVariants.variant
        } ${
          size
            ? buttonVariants.variants.size[size]
            : buttonVariants.defaultVariants.size
        } ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);
ButtonComponent.displayName = 'Button';

const Button = React.memo(ButtonComponent);

export {Button, buttonVariants};
