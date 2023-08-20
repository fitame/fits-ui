import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {useFormField} from './useFormField';

const FormControlComponent = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControlComponent.displayName = 'FormControl';

export const FormControl = React.memo(FormControlComponent);
