import React, { Component } from 'react';
import styles from 'components/PasswordInput/styles.module.scss';
import Input, { IInputProps } from 'components/BasicComponents/Input';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface IPasswordInputProps extends IInputProps {
  inputHandler: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  helperText?: string;
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

    const { inputHandler, value, placeholder, helperText, icon, inputType, ...restProps } = this.props;

    return (
      <div className={styles.passwordBox} {...restProps}>
        <Input
          name="Password"
          value={value}
          icon={icon}
          inputType={inputType}
          className={styles.passwordInput}
          onChange={inputHandler}
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
