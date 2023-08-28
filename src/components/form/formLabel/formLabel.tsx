import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import {Label} from '../../label/label';
import styles from './formLabel.module.scss';
import {useFormField} from '../useFormField/useFormField';

const FormLabelComponent = React.forwardRef<
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
FormLabelComponent.displayName = 'FormLabel';

export const FormLabel = React.memo(FormLabelComponent);
