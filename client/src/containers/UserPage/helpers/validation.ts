export type SetErrorMessage = (message: string | null) => void;

export const emailValid = (email: string, setErrorMessage: SetErrorMessage): boolean => {
  let emailMessage = null;
  const regex = /([A-Za-z0-9$_\-.+%])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  if (!(email.length > 5 && email.length < 30)) {
    emailMessage = 'Email length: 5-30';
  } else {
    if (!regex.test(email)) {
      emailMessage = 'Wrong email format';
    }
  }
  setErrorMessage(emailMessage);
  return !emailMessage;
};

export const passwordValid = (
  password: string,
  confirmedPassword: string,
  setPasswordErrorMessage: SetErrorMessage,
  setConfirmedPasswordErrorMessage: SetErrorMessage
): boolean => {
  let passwordMessage = null;
  let confirmedMessage = null;
  const regex = /^[a-zA-Z0-9@\-%$_.+]{4,30}$/;
  if (password === '' && confirmedPassword) {
    confirmedMessage = 'Enter your new password to confirm';
  }
  if (password !== '') {
    if (!regex.test(password)) {
      passwordMessage =
        'Password must be 5-30 characters long. It can include only A-Z, a-z, А-Я, а-я, 0-9, symbols: @,-,%,$,_,.,+';
    } else if (password !== confirmedPassword) {
      confirmedMessage = 'Passwords do not match';
    }
  }
  setPasswordErrorMessage(passwordMessage);
  setConfirmedPasswordErrorMessage(confirmedMessage);
  return !(passwordMessage || confirmedMessage);
};

export const nameValid = (name: string, setErrorMessage: SetErrorMessage): boolean => {
  let nameMessage = null;
  const regex = /^[\sa-zA-Zа-яА-Я0-9._-]{2,50}$/;
  if (!regex.test(name)) {
    if (!name) {
      nameMessage = 'Please, tell us your name';
    } else if (name.length < 3 || name.length > 50) {
      nameMessage = 'Name can be between 2 and 50 characters long';
    } else {
      nameMessage = 'Name can include only A-Z, a-z, А-Я, а-я, 0-9, symbols: _,-,.';
    }
  }
  setErrorMessage(nameMessage);
  return !nameMessage;
};
