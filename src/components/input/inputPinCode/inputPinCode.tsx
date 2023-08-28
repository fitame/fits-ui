/* eslint-disable react/no-array-index-key */
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
  memo,
} from 'react';
import {Input} from '../input/input';
import styles from './inputPinCode.module.scss';
import {InputPinCodeProps, InputPinRefProps} from './inputPinCode.types';

const InputPinCodeComponent = forwardRef<InputPinRefProps, InputPinCodeProps>(
  ({name, onChange, size}, ref) => {
    const [inputArrValue, setInputArrValue] = useState<string[]>(
      new Array(size).fill(''),
    );
    const activeInput = useRef<(HTMLInputElement | null)[]>([]);

    const handleChangeEvent = useCallback(
      (changeValue: string[]) => {
        setInputArrValue(changeValue);
        if (onChange) {
          onChange({
            target: {
              value: changeValue.join(''),
              name: name || '',
            },
          });
        }
      },
      [name, onChange],
    );

    const changeInputFocus = useCallback(
      (index: number, idDeleting = false) => {
        if (index + 1 < size && activeInput?.current) {
          activeInput?.current[index + 1]?.focus();
        }

        if (idDeleting && activeInput?.current) {
          activeInput?.current[index - 1]?.focus();
        }
      },
      [size],
    );

    useImperativeHandle(
      ref,
      () => ({
        set value(setValue: string) {
          if (setValue !== inputArrValue.join('')) {
            handleChangeEvent([...setValue.split('')]);
          }
        },

        get value() {
          return inputArrValue?.join('') || '';
        },

        focus: () => {
          const inputEmpty = inputArrValue.findIndex(item => item === '');
          activeInput.current[inputEmpty]?.focus();
        },

        type: 'text',
        name,
      }),
      [handleChangeEvent, inputArrValue, name],
    );

    const onChangePin = (inputValue: string, index: number) => {
      if (inputValue === '') {
        inputArrValue[index] = inputValue;

        handleChangeEvent([...inputArrValue]);

        return '';
      }

      const newValue = [...inputValue.split('')];

      if (inputValue.length === size) {
        handleChangeEvent([...newValue]);

        return inputValue[index];
      }

      const formattedValue = inputValue.slice(-1);
      inputArrValue[index] = formattedValue;

      handleChangeEvent([...inputArrValue]);

      if (inputValue !== '' || index !== 0) {
        changeInputFocus(index, false);
      }

      return formattedValue;
    };

    return (
      <div className={styles.container}>
        {inputArrValue.map((item, index) => (
          <Input
            ref={el => {
              activeInput.current[index] = el;
              return activeInput.current[index];
            }}
            className={styles.input}
            size={1}
            value={item}
            placeholder="•"
            onInput={e => {
              e.currentTarget.value = onChangePin(e.currentTarget.value, index);
            }}
            onKeyUp={e => {
              if (e.key === 'Backspace' && index !== 0) {
                changeInputFocus(index, true);
              }
            }}
            key={index}
          />
        ))}
      </div>
    );
  },
);

export const InputPinCode = memo(InputPinCodeComponent);
