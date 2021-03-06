import React, { ChangeEvent } from 'react';
import Input from '@material-ui/core/Input';
import styles from './styles.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import ErrorIcon from '@material-ui/icons/Error';
import { debounce } from 'lodash-es';
import { getIcon } from 'common/helpers/icon.helper';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Close } from '@material-ui/icons';

export interface SelectOption {
  value: number;
  label: string;
}

interface Props {
  onInputChange: ({ value }: { value: string }) => void;
  onSelect: (value: number) => void;
  onSeeMoreClick?: ({ itemsCount, value }: { itemsCount: number; value: string }) => void;
  options: SelectOption[];
  placeholder: string;
  errorMessage?: string | boolean;
  debounceTime?: number;
  inputId: string;
  label: string;
  labelClassName?: string;
  hideSeeMore?: boolean;
  disabled?: boolean;
  withClose?: boolean;
  onCloseCallback?: () => void;
  showCloseAlways?: boolean;
}

interface State {
  inputValue: string;
  selectVisible: boolean;
}

class InputBasedSelect extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: '',
      selectVisible: false,
    };

    let original = props.onInputChange;
    if (props.debounceTime) {
      original = debounce(original, props.debounceTime);
    }

    this.onInputValueChange = function (value: string) {
      this.setState({
        inputValue: value,
      });
      original({ value });
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onOptionSelect = this.onOptionSelect.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  private timeoutId: number | null = null;

  private onBlur() {
    this.timeoutId = setTimeout(() => {
      this.setState({ selectVisible: false });
    });
  }

  private onFocus(event: React.FocusEvent<HTMLDivElement>) {
    event.preventDefault();
    this.setState({ selectVisible: true });
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private onOptionSelect(value: number, label: string) {
    this.setState({
      selectVisible: false,
      inputValue: label,
    });

    this.props.onSelect(value);
  }

  private onInputValueChange: (value: string) => void = null!;

  private onClear(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ selectVisible: false, inputValue: '' });
    if (!this.props.onCloseCallback) return;
    this.props.onCloseCallback();
  }

  public render(): JSX.Element {
    const { placeholder, inputId, label, labelClassName, errorMessage, options } = this.props;

    const { onSeeMoreClick } = this.props;
    return (
      <div
        className={`${styles.selectRoot} ${this.props.disabled ? styles.disabledInput : ''}`}
        tabIndex={0}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        aria-haspopup="true"
        aria-expanded={this.state.selectVisible}
      >
        <InputLabel className={labelClassName} htmlFor={inputId}>
          {label}
        </InputLabel>
        <Input
          disabled={this.props.disabled || false}
          className={`${styles.inputContainer} ${
            this.state.selectVisible ? styles.borderTopRound : styles.borderFullRound
          }`}
          placeholder={placeholder}
          id={inputId}
          autoComplete="off"
          classes={{ input: styles.input, root: styles.inputRoot }}
          onInput={(e: ChangeEvent<HTMLInputElement>) => this.onInputValueChange(e.target.value)}
          value={this.state.inputValue}
          disableUnderline={true}
          onFocus={(e) => e.preventDefault()}
          {...(this.props.withClose &&
            (this.state.inputValue !== '' || this.props.showCloseAlways) && {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear input"
                    onClick={this.onClear}
                    edge="end"
                    disableRipple={true}
                    onMouseDown={(e) => e.preventDefault()}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <Close color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            })}
        />
        {this.state.selectVisible && (
          <div className={styles.selectOptionsContainer}>
            {options.map((option, i) => (
              <div
                className={styles.selectOption}
                tabIndex={0}
                key={option.value}
                onClick={() => this.onOptionSelect(option.value, option.label)}
                onKeyUp={(e) => e.keyCode === 13 && this.onOptionSelect(option.value, option.label)}
              >
                {option.label}
              </div>
            ))}
            {!this.props.hideSeeMore && onSeeMoreClick && (
              <div
                className={styles.seeMore}
                onClick={() => onSeeMoreClick({ itemsCount: options.length, value: this.state.inputValue })}
                tabIndex={0}
                onKeyUp={(e) =>
                  e.keyCode === 13 && onSeeMoreClick({ itemsCount: options.length, value: this.state.inputValue })
                }
              >
                See More
              </div>
            )}
            {errorMessage && (
              <div className={styles.errorMessage}>
                <ErrorIcon />{' '}
                <span>{errorMessage !== true ? errorMessage : 'An error occurred. Please try later'}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default InputBasedSelect;
