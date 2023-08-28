import {Input} from './input/input';
import {InputPinCode} from './inputPinCode/inputPinCode';

const InputRoot = Input as typeof Input & {
  PinCode: typeof InputPinCode;
};

InputRoot.PinCode = InputPinCode;

export default InputRoot;
