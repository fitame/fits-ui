import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import styles from './label.module.scss';

const LabelComponent = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({className, ...props}, ref) => (
  <LabelPrimitive.Root ref={ref} className={styles.label} {...props} />
));

LabelComponent.displayName = LabelPrimitive.Root.displayName;

const Label = React.memo(LabelComponent);

export {Label};
