import styles from './badge.module.scss';
import {BadgeProps} from './badge.types';

const badgeVariants = {
  variants: {
    variant: {
      default: styles.default,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: styles.default,
  },
};

function Badge({className, variant, ...props}: BadgeProps) {
  return (
    <div
      className={`${styles.base} ${
        variant
          ? badgeVariants.variants.variant[variant]
          : badgeVariants.defaultVariants.variant
      } ${className} `}
      {...props}
    />
  );
}

export {Badge};
