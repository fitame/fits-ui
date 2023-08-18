import * as React from 'react';
import styles from './form.module.scss';

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{id}}>
      <div ref={ref} className={styles.formItem} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';
