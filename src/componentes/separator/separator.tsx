import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import Styles from './separator.module.scss';
import {SeparatorProps, SeparatorRefProps} from './separator.types';

const Separator = React.forwardRef<SeparatorRefProps, SeparatorProps>(
  (
    {className, orientation = 'horizontal', decorative = true, ...props},
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={`${Styles.separator} ${
        orientation === 'horizontal' ? Styles.horizontal : Styles.vertical
      } ${className}`}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export {Separator};
