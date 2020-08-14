import React, { useState, ChangeEvent, FocusEvent } from 'react';
import Input from '@material-ui/core/Input';
import styles from './styles.module.scss';
import InputLabel from '@material-ui/core/InputLabel';

export interface SelectOption {
  value: number;
  label: string;
}
interface Props {
  onInputChange: (data: string) => void;
  onSelect: (value: number) => void;
  onSeeMoreClick: ({itemsCount}: {itemsCount: number}) => void;
  options: SelectOption[];
  placeholder: string;
  inputId: string;
  label: string;
  labelClassName?: string;
}


const InputBasedSelect = (props: Props) => {
  const {
    placeholder,
    inputId,
    label,
    labelClassName,
    options,
    onSelect,
    onInputChange,
    onSeeMoreClick
  } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectVisible, setSelectVisible] = useState(false);

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value || '');
    onInputChange(inputValue);
  };

  let timeOutId: number | null = null;
  const onBlur = () => {
    timeOutId = setTimeout(() => {
      setSelectVisible(false);
    });
  }
  const onFocus = (e: FocusEvent) => {
    setSelectVisible(true);
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
  }

  const enterKeyCode = 13;
  const SelectOption = (props: {option: SelectOption}) => {
    const { option: { value, label } } = props;
    const onOptionSelect = () => {
      onSelect(value);
      setInputValue(label);
      setSelectVisible(false);
    }

    return (
      <div
        className={styles.selectOption}
        tabIndex={0}
        onClick={onOptionSelect}
        onKeyUp={(e) => e.keyCode === enterKeyCode && onOptionSelect()}
      >
        {label}
      </div>
    )
  }

  return (
    <div
      className={styles.selectRoot}
      tabIndex={0}
      onBlur={onBlur}
      onFocus={onFocus}
      aria-haspopup="true"
      aria-expanded={selectVisible}
    >
      <InputLabel className={labelClassName} htmlFor={inputId}>
        {label}
      </InputLabel>
      <Input
        className={styles.inputContainer}
        placeholder={placeholder}
        id={inputId}
        classes={{input: styles.input}}
        onInput={onInputValueChange}
        value={inputValue}
      />
      {
        selectVisible && (
          <div className={styles.selectOptionsContainer}>
            {options.map((option, i) => <SelectOption option={option} key={option.value} />)}
            <div
              className={styles.seeMore}
              onClick={() => onSeeMoreClick({itemsCount: options.length})}
              tabIndex={0}
              onKeyUp={(e) => e.keyCode === enterKeyCode && onSeeMoreClick({itemsCount: options.length})}
            >See More</div>
          </div>
        )
      }
    </div>
  );
}

export default InputBasedSelect;