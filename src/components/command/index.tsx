import {Command} from './command/command';
import {CommandItem} from './commandItem/commandItem';
import {CommandDialog} from './commandDialog/commandDialog';
import {CommandEmpty} from './commandEmpty/commandEmpty';
import {CommandGroup} from './commandGroup/commandGroup';
import {CommandInput} from './commandInput/commandInput';
import {CommandList} from './commandList/commandList';
import {CommandSeparator} from './commandSeparator/commandSeparator';
import {CommandShortcut} from './commandShortcut/commandShortcut';

const CommandRoot = Command as typeof Command & {
  Item: typeof CommandItem;
  Empty: typeof CommandEmpty;
  Group: typeof CommandGroup;
  Dialog: typeof CommandDialog;
  Input: typeof CommandInput;
  List: typeof CommandList;
  Separator: typeof CommandSeparator;
  Shortcut: typeof CommandShortcut;
};

CommandRoot.Item = CommandItem;
CommandRoot.Empty = CommandEmpty;
CommandRoot.Group = CommandGroup;
CommandRoot.Dialog = CommandDialog;
CommandRoot.Input = CommandInput;
CommandRoot.List = CommandList;
CommandRoot.Separator = CommandSeparator;
CommandRoot.Shortcut = CommandShortcut;

export default CommandRoot;
