import * as React from 'react';
import styles from './formItem.module.scss';

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItemComponent = React.forwardRef<
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

FormItemComponent.displayName = 'FormItem';

const FormItem = React.memo(FormItemComponent);

export {FormItem};
