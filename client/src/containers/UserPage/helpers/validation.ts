import { PASSWORD, NAME, EMAIL } from 'common/constants';

export type SetErrorMessage = (message: string | null) => void;

export type SetErrorMessages = (message: IErrorMessage) => void;

export const emailValid = (
  email: string,
  errorMessages: IErrorMessage,
  setErrorMessages: SetErrorMessages
): boolean => {
  let emailMessage = null;
  if (!(email.length > 5 && email.length < 30)) {
    emailMessage = 'Email length: 5-30';
  } else {
    if (!EMAIL.test(email)) {
      emailMessage = 'Wrong email format';
    }
  }
  setErrorMessages({ ...errorMessages, emailErrorMessage: emailMessage });
  return !emailMessage;
};

export const passwordValid = (
  password: string,
  confirmedPassword: string,
  errorMessages: IErrorMessage,
  setErrorMessages: SetErrorMessages
): boolean => {
  let passwordMessage = null;
  let confirmedMessage = null;
  if (password === '' && confirmedPassword) {
    confirmedMessage = 'Enter your new password to confirm';
  }
  if (password !== '') {
    if (!PASSWORD.test(password)) {
      passwordMessage =
        'Password must be 5-30 characters long. It can include only A-Z, a-z, А-Я, а-я, 0-9, symbols: @,-,%,$,_,.,+';
    } else if (password !== confirmedPassword) {
      confirmedMessage = 'Passwords do not match';
      console.log('do not match');
    }
  }
  setErrorMessages({
    ...errorMessages,
    passwordErrorMessage: passwordMessage,
    confirmedPasswordErrorMessage: confirmedMessage,
  });
  return !(passwordMessage || confirmedMessage);
};

export const currentPasswordPresent = (
  currentPassword: string,
  setCurrentPasswordErrorMessage: SetErrorMessage
): boolean => {
  let currentPasswordMessage = null;
  if (currentPassword == '') {
    currentPasswordMessage = 'Current password is required';
  } else if (currentPassword.length < 5) {
    currentPasswordMessage = 'Your current password cannot have fewer than 5 characters';
  } else if (currentPassword.length > 30) {
    currentPasswordMessage = 'Your current password cannot have more than 30 characters';
  }
  setCurrentPasswordErrorMessage(currentPasswordMessage);
  return !currentPasswordMessage;
};

export const nameValid = (name: string, setErrorMessage: SetErrorMessage): boolean => {
  let nameMessage = null;
  if (!NAME.test(name)) {
    if (!name) {
      nameMessage = 'Please, tell us your name';
    } else {
      nameMessage = 'Wrong name format';
    }
  }
  setErrorMessages({ ...errorMessages, nameErrorMessage: nameMessage });
  return !nameMessage;
};
