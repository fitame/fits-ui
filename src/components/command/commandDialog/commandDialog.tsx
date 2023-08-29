import {DialogProps} from '@radix-ui/react-dialog';
import {Command} from '../command/command';
import Dialog from '../../dialog';
import styles from './commandDialog.module.scss';

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({children, ...props}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <Dialog.Content className={styles.commandDialogContent}>
        <Command className={styles.commandStyle}>{children}</Command>
      </Dialog.Content>
    </Dialog>
  );
};

export {CommandDialog};
