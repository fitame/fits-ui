import React from 'react';
import styles from './formDescription.module.scss';
import {useFormField} from '../useFormField/useFormField';

const FormDescriptionComponent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => {
  const {formDescriptionId} = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={styles.formDescription}
      {...props}
    />
  );
});
FormDescriptionComponent.displayName = 'FormDescription';

export const FormDescription = React.memo(FormDescriptionComponent);
