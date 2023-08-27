import {DialogProps} from '@radix-ui/react-dialog';

import {Command} from '../command/command';

import {Dialog, DialogContent} from '../../dialogGroup/dialogGroup';
import styles from './commandDialog.module.scss';

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({children, ...props}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className={styles.commandDialogContent}>
        <Command className={styles.commandStyle}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

export {CommandDialog};
