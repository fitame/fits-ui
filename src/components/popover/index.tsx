import {Popover} from './popover/popover';
import {PopoverTrigger} from './popoverTrigger/popoverTrigger';
import {PopoverContent} from './popoverContent/popoverContent';

const CommandRoot = Popover as typeof Popover & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
};

CommandRoot.Trigger = PopoverTrigger;
CommandRoot.Content = PopoverContent;

export default CommandRoot;
