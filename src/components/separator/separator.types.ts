import * as SeparatorPrimitive from '@radix-ui/react-separator';

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

export type SeparatorRefProps = React.ElementRef<
  typeof SeparatorPrimitive.Root
>;
