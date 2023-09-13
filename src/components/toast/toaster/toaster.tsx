import {ToastViewport} from '../toastViewport/toastViewport';
import {ToastTitle} from '../toastTitle/toastTitle';
import {ToastClose} from '../toastClose/toastClose';
import {ToastProvider} from '../toastProvider/toastProvider';
import {Toast} from '../toast/toast';
import {ToastDescription} from '../toastDescription/toastDescription';
import {useToast} from '../useToast/useToast';
import styles from './toaster.module.scss';

export function Toaster() {
  const {toasts} = useToast();

  return (
    <ToastProvider>
      {toasts.map(({id, title, description, action, ...props}) => {
        return (
          <Toast key={id} {...props}>
            <div className={styles.toast}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
