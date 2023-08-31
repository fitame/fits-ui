import {Select} from './select/select';
import {SelectContent} from './selectContent/selectContent';
import {SelectGroup} from './selectGroup/selectGroup';
import {SelectItem} from './selectItem/selectItem';
import {SelectTrigger} from './selectTrigger/selectTrigger';
import {SelectValue} from './selectValue/selectValue';
import {SelectLabel} from './selectLabel/selectLabel';

const SelectRoot = Select as typeof Select & {
  Content: typeof SelectContent;
  Group: typeof SelectGroup;
  Item: typeof SelectItem;
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Label: typeof SelectLabel;
};

SelectRoot.Content = SelectContent;
SelectRoot.Group = SelectGroup;
SelectRoot.Item = SelectItem;
SelectRoot.Trigger = SelectTrigger;
SelectRoot.Value = SelectValue;
SelectRoot.Label = SelectLabel;

export default SelectRoot;
