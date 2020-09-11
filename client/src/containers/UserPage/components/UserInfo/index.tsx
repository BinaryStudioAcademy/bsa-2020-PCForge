import React, { useEffect, useState } from 'react';
import styles from 'containers/UserPage/components/UserInfo/styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import {
  currentPasswordPresent,
  emailValid,
  nameValid,
  passwordValid,
  SetErrorMessage,
} from 'containers/UserPage/helpers/validation';
import { TypeUserUpdate } from 'common/models/typeUser';
import avatarPlaceholder from 'assets/images/userImagePlaceholder.png';
import { IUserInfoProps } from 'containers/UserPage/interfaces';
import Alert, { AlertType } from '../../../../components/BasicComponents/Alert';

const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const { user, updateUser, isCurrentUser } = props;

  const initialErrorMessages = {
    emailErrorMessage: null,
    passwordErrorMessage: null,
    nameErrorMessage: null,
    confirmedPasswordErrorMessage: null,
    currentPasswordErrorMessage: null,
  };

  const initialAvatar = user.avatar;

  const [editableInput, setEditableInput] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState(initialErrorMessages.nameErrorMessage);
  const [emailErrorMessage, setEmailErrorMessage] = useState(initialErrorMessages.emailErrorMessage);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(initialErrorMessages.passwordErrorMessage);
  const [confirmedPasswordErrorMessage, setConfirmedPasswordErrorMessage] = useState(
    initialErrorMessages.confirmedPasswordErrorMessage
  );
  const [currentPasswordErrorMessage, setCurrentPasswordErrorMessage] = useState(
    initialErrorMessages.currentPasswordErrorMessage
  );

  const [validate, setValidate] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (editableInput) {
      inputRef.current?.focus();
    }
  }, [editableInput]);

  const handleSetEditable = () => {
    if (editableInput) {
      setValidate(true);
      const validEmail = emailValid(email, setEmailErrorMessage as SetErrorMessage);
      const validPassword = passwordValid(
        password,
        confirmedPassword,
        setPasswordErrorMessage as SetErrorMessage,
        setConfirmedPasswordErrorMessage as SetErrorMessage
      );
      const validName = nameValid(name, setNameErrorMessage as SetErrorMessage);
      if (
        validEmail &&
        validPassword &&
        validName &&
        (!password || currentPasswordPresent(currentPassword, setCurrentPasswordErrorMessage as SetErrorMessage))
      ) {
        const dataToUpdate = {
          id: user.id,
          name,
          email,
          avatar,
        } as TypeUserUpdate;

        if (password) {
          dataToUpdate.password = password;
          dataToUpdate.currentPassword = currentPassword;
        }

        const avatarData = (imageInputRef.current?.files && imageInputRef.current?.files[0]) || undefined;
        updateUser(dataToUpdate, avatarData);
        setEditableInput(false);
        setPassword('');
        setConfirmedPassword('');
        setCurrentPassword('');
        setShowPasswords(false);
      }
    } else {
      setEditableInput(true);
    }
  };
  const handleCancel = () => {
    setEditableInput(false);
    setValidate(false);
    setAvatar(initialAvatar);
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setConfirmedPassword('');
    setShowPasswords(false);

    setNameErrorMessage(initialErrorMessages.nameErrorMessage);
    setEmailErrorMessage(initialErrorMessages.emailErrorMessage);
    setPasswordErrorMessage(initialErrorMessages.passwordErrorMessage);
    setConfirmedPasswordErrorMessage(initialErrorMessages.confirmedPasswordErrorMessage);
    setCurrentPasswordErrorMessage(initialErrorMessages.currentPasswordErrorMessage);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    validate && nameValid(event.target.value, setNameErrorMessage as SetErrorMessage);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validate && emailValid(event.target.value, setEmailErrorMessage as SetErrorMessage);
  };
  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
    validate &&
      passwordValid(
        target.value,
        confirmedPassword,
        setPasswordErrorMessage as SetErrorMessage,
        setConfirmedPasswordErrorMessage as SetErrorMessage
      );
  };
  const handleConfirmedPasswordChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setConfirmedPassword(target.value);
    validate &&
      passwordValid(
        password,
        target.value,
        setPasswordErrorMessage as SetErrorMessage,
        setConfirmedPasswordErrorMessage as SetErrorMessage
      );
  };
  const handleCurrentPasswordChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setCurrentPassword(target.value);
    validate && currentPasswordPresent(target.value, setCurrentPasswordErrorMessage as SetErrorMessage);
  };

  const emailVerified = user.emailVerified;

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleDeleteAvatar = () => {
    setAvatar('');
  };

  const handlePasswordShow = () => {
    setShowPasswords(true);
  };

  const EmailVerificationAlert = (): JSX.Element | null => {
    if (!emailVerified) {
      return <Alert alertType={AlertType.info}>You should verify your Email.</Alert>;
    } else {
      return null;
    }
  };

  const passwordFields = (
    <>
      <div className={styles.passwordSeparationLine} />
      <div className={styles.passwordInputHolder + (passwordErrorMessage ? ` ${styles.holderError}` : '')}>
        <PasswordInput
          icon="VpnKey"
          inputHandler={handlePasswordChange}
          value={password}
          inputType={passwordErrorMessage ? InputType.error : undefined}
          helperText={passwordErrorMessage || ''}
        />
      </div>
      <div className={styles.passwordInputHolder + (confirmedPasswordErrorMessage ? ` ${styles.holderError}` : '')}>
        <PasswordInput
          icon="VpnKey"
          placeholder="Confirm password"
          inputHandler={handleConfirmedPasswordChange}
          value={confirmedPassword}
          inputType={confirmedPasswordErrorMessage ? InputType.error : undefined}
          helperText={confirmedPasswordErrorMessage || ''}
        />
      </div>
      <div className={styles.passwordInputHolder + (currentPasswordErrorMessage ? ` ${styles.holderError}` : '')}>
        <PasswordInput
          icon="VpnKey"
          inputHandler={handleCurrentPasswordChange}
          value={currentPassword}
          inputType={currentPasswordErrorMessage ? InputType.error : undefined}
          helperText={currentPasswordErrorMessage || ''}
          placeholder="Current password"
        />
      </div>
    </>
  );

  return (
    <div className={styles.userInfo}>
      <div className={styles.userImage}>
        {editableInput && (
          <div className={styles.imageLinksHolder}>
            <input
              id="userImageInput"
              name="image"
              type="file"
              accept="image/*"
              hidden
              onChange={handleChangeImage}
              ref={imageInputRef}
            />
            <Link className={styles.imageLink} icon="Image" onClick={() => imageInputRef.current?.click()}>
              Change Image
            </Link>
            <Link icon="DeleteForever" onClick={handleDeleteAvatar} />
          </div>
        )}

        <img src={avatar || avatarPlaceholder} alt="" />
      </div>
      <div className={styles.userData}>
        {isCurrentUser && <EmailVerificationAlert />}
        <Input
          disabled={!editableInput}
          className={editableInput ? styles.autoFocused : ''}
          placeholder="Name"
          icon="Face"
          value={name || ''}
          inputType={nameErrorMessage ? InputType.error : undefined}
          onChange={handleNameChange}
          inputRef={inputRef}
          helperText={nameErrorMessage || ''}
        />
        {isCurrentUser && (
          <Input
            disabled={!editableInput}
            className={editableInput ? styles.autoFocused : ''}
            icon="Email"
            placeholder="Email"
            value={email}
            inputType={emailErrorMessage ? InputType.error : undefined}
            onChange={handleEmailChange}
            helperText={emailErrorMessage || ''}
          />
        )}
        {!showPasswords && editableInput && <Link onClick={handlePasswordShow}>Change Password</Link>}

        {showPasswords && editableInput && passwordFields}

        {isCurrentUser && (
          <div className={styles.buttonsContainer}>
            <Button onClick={handleSetEditable} buttonType={ButtonType.primary}>
              {editableInput ? 'Save' : 'Edit'}
            </Button>
            {editableInput && (
              <Button onClick={handleCancel} buttonType={ButtonType.secondary}>
                Cancel
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
