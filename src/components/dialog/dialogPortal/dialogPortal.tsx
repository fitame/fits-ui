import * as DialogPrimitive from '@radix-ui/react-dialog';

const DialogPortal = ({
  className,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={className} {...props} />
);

DialogPortal.displayName = DialogPrimitive.Portal.displayName;

export {DialogPortal};
