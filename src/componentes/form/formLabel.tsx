import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import {Label} from '@/components/ui/label/label';
import styles from './form.module.scss';
import {useFormField} from './useFormField';

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({className, ...props}, ref) => {
  const {error, formItemId} = useFormField();

  return (
    <Label
      ref={ref}
      className={error && styles.textDestructive}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';
