import React, { Component } from 'react';
import styles from 'components/PasswordInput/styles.module.scss';
import Input, { IInputProps } from 'components/BasicComponents/Input';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface IPasswordInputProps extends IInputProps {
  inputHandler: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  blurHandler?: () => void;
  placeholder?: string;
  helperText?: string;
  wrapperClassName?: string;
  className?: string;
}

interface IPasswordInputState {
  preview: boolean;
}

class PasswordInput extends Component<IPasswordInputProps, IPasswordInputState> {
  constructor(props: IPasswordInputProps) {
    super(props);
    this.state = {
      preview: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(): void {
    this.setState((prevState) => {
      return {
        preview: !prevState.preview,
      };
    });
  }
  render(): JSX.Element {
    const Icon = this.state.preview ? VisibilityOffIcon : VisibilityOutlinedIcon;
    const { inputHandler, blurHandler, value, placeholder, helperText, icon, inputType, className } = this.props;
    return (
      <div className={className ? [className, styles.passwordBox].join(' ') : styles.passwordBox}>
        <Input
          name="Password"
          value={value}
          icon={icon}
          inputType={inputType}
          className={styles.passwordInput}
          onChange={inputHandler}
          onBlur={blurHandler}
          placeholder={placeholder ? placeholder : 'Password'}
          type={this.state.preview ? 'text' : 'password'}
          helperText={helperText}
        />
        <Icon onClick={this.clickHandler} className={styles.passwordPreviewIcon} />
      </div>
    );
  }
}

export default PasswordInput;
