import * as React from 'react';
import styles from './formMessage.module.scss';
import {useFormField} from '../useFormField/useFormField';

const FormMessageComponent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, children, ...props}, ref) => {
  const {error, formMessageId} = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={`${styles.formMessage} ${styles.textDestructive}`}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessageComponent.displayName = 'FormMessage';

export const FormMessage = React.memo(FormMessageComponent);
