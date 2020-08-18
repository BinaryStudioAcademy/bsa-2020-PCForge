interface IErrorMessage {
  emailErrorMessage: null | string;
  passwordErrorMessage: null | string;
  confirmedPasswordErrorMessage: null | string;
  nameErrorMessage: null | string;
}

export type SetErrorMessages = (message: IErrorMessage) => void;

export const emailValid = (
  email: string,
  errorMessages: IErrorMessage,
  setErrorMessages: SetErrorMessages
): boolean => {
  let emailMessage = null;
  const regex = /([A-Za-z0-9$_\-.+%])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  if (!(email.length > 5 && email.length < 30)) {
    emailMessage = 'Email length: 5-30';
  } else {
    if (!regex.test(email)) {
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
  const regex = /^[a-zA-Z0-9@\-%$_.+]{5,30}$/;
  if (password === '' && confirmedPassword) {
    confirmedMessage = 'Enter your new password to confirm';
  }
  if (password !== '') {
    if (!regex.test(password)) {
      passwordMessage = 'Wrong password format';
      console.log('wrong format');
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

export const nameValid = (name: string, errorMessages: IErrorMessage, setErrorMessages: SetErrorMessages): boolean => {
  let nameMessage = null;
  const regex = /^[a-zA-Z0-9._-]{3,30}$/;
  if (!regex.test(name)) {
    if (!name) {
      nameMessage = 'Please, tell us your name';
    } else {
      nameMessage = 'Wrong name format';
    }
  }
  setErrorMessages({ ...errorMessages, nameErrorMessage: nameMessage });
  return !nameMessage;
};
