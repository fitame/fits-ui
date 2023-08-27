import {Form} from './form/form';
import {FormControl} from './formControl/formControl';
import {FormDescription} from './formDescription/formDescription';
import {FormField} from './formField/formField';
import {FormItem} from './formItem/formItem';
import {FormLabel} from './formLabel/formLabel';
import {FormMessage} from './formMessage/formMessage';

const FormRoot = Form as typeof Form & {
  Control: typeof FormControl;
  Description: typeof FormDescription;
  Field: typeof FormField;
  Item: typeof FormItem;
  Label: typeof FormLabel;
  Message: typeof FormMessage;
};

FormRoot.Control = FormControl;
FormRoot.Description = FormDescription;
FormRoot.Field = FormField;
FormRoot.Item = FormItem;
FormRoot.Label = FormLabel;
FormRoot.Message = FormMessage;

export default FormRoot;
