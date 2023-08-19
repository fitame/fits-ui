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
  const memoId = React.useMemo(() => ({id}), [id]);

  return (
    <FormItemContext.Provider value={memoId}>
      <div ref={ref} className={styles.formItem} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';
