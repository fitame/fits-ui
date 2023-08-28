import {Dialog} from './dialog/dialog';
import {DialogContent} from './dialogContent/dialogContent';
import {DialogFooter} from './dialogFooter/dialogFooter';
import {DialogHeader} from './dialogHeader/dialogHeader';
import {DialogOverlay} from './dialogOverlay/dialogOverlay';
import {DialogPortal} from './dialogPortal/dialogPortal';
import {DialogTrigger} from './dialogTrigger/dialogTrigger';

const DialogRoot = Dialog as typeof Dialog & {
  Content: typeof DialogContent;
  Footer: typeof DialogFooter;
  Header: typeof DialogHeader;
  Overlay: typeof DialogOverlay;
  Portal: typeof DialogPortal;
  Trigger: typeof DialogTrigger;
};

DialogRoot.Content = DialogContent;
DialogRoot.Footer = DialogFooter;
DialogRoot.Header = DialogHeader;
DialogRoot.Overlay = DialogOverlay;
DialogRoot.Portal = DialogPortal;
DialogRoot.Trigger = DialogTrigger;

export default DialogRoot;
