import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import styles from './styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import UserPreferences from '../UserPreferences';
import { getIcon } from 'common/helpers/icon.helper';
import {
  SetErrorMessage,
  passwordValid,
  nameValid,
  emailValid,
  currentPasswordPresent,
} from '../../helpers/validation';
import { TypeUser, TypeUserUpdate } from 'common/models/typeUser';
import { SetupType } from 'common/models/typeSetup';
import { UserActionTypes } from '../../logic/actionTypes';
import avatartPlaceholder from 'assets/images/userImagePlaceholder.png';
import { Game } from 'common/models/typeUserGame';

enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

interface IUserInfoProps {
  user: TypeUser;
  userGames: Game[];
  updateUser: (data: TypeUser, avatarData?: Blob) => UserActionTypes;
  setups: SetupType[];
  isCurrentUser: boolean;
  addUserGame: (id: number, gameId: number) => UserActionTypes;
  deleteUserGame: (id: number, gameId: number) => UserActionTypes;
  deleteUserSetup: (userId: number, setupId: number) => UserActionTypes;
  filteredGames: Game[];
  loadFilteredGames: (searchString: string) => UserActionTypes;
  setTab: (tab: UserPageTabs) => UserActionTypes;
  openTab: UserPageTabs;
}

const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const {
    user,
    userGames,
    updateUser,
    isCurrentUser,
    filteredGames,
    loadFilteredGames,
    addUserGame,
    deleteUserGame,
    deleteUserSetup,
    setups,
    openTab,
    setTab,
  } = props;

  const initialErrorMessages = {
    emailErrorMessage: null,
    passwordErrorMessage: null,
    nameErrorMessage: null,
    confirmedPasswordErrorMessage: null,
    currentPasswordErrorMessage: null,
  };

  const initialAvatar = user.avatar;

  // const [selectedTab, setSelectedTab] = useState(0);
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

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: UserPageTabs) => {
    setTab(newValue);
  };

  const handleSetEditable = (event: React.MouseEvent) => {
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

        console.log(dataToUpdate);

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
  const handleCancel = (event: React.MouseEvent) => {
    setEditableInput(false);
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
    nameValid(event.target.value, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    emailValid(event.target.value, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
    passwordValid(target.value, confirmedPassword, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handleConfirmedPasswordChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setConfirmedPassword(target.value);
    passwordValid(password, target.value, errorMessages, setErrorMessages as SetErrorMessages);
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

  const handleDeleteAvatar = (event: React.MouseEvent) => {
    setAvatar('');
  };

  const handlePasswordShow = (event: React.MouseEvent) => {
    setShowPasswords(true);
  };

  const passwordFields = (
    <>
      <div className={styles.passwordSeparationLine}></div>
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
    <div className={styles.userPageContainer}>
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
              <Link className={styles.deleteImageLink} icon="DeleteForever" onClick={handleDeleteAvatar} />
            </div>
          )}

          <img src={avatar || avatartPlaceholder} alt="" />
        </div>
        <div className={styles.userData}>
          <Input
            disabled={!editableInput}
            className={editableInput ? styles.autoFocused : ''}
            placeholder="Name"
            icon="Face"
            value={name || ''}
            inputType={errorMessages.nameErrorMessage ? InputType.error : undefined}
            onChange={handleNameChange}
            inputRef={inputRef}
            helperText={errorMessages.nameErrorMessage || ''}
          />
          <Input
            disabled={!editableInput}
            className={editableInput ? styles.autoFocused : ''}
            icon="Email"
            placeholder="Email"
            value={email}
            inputType={errorMessages.emailErrorMessage ? InputType.error : undefined}
            onChange={handleEmailChange}
            helperText={errorMessages.emailErrorMessage || ''}
          />
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

      <div className={styles.preferencesSection}>
        <AppBar position="static" className={styles.tabsBar}>
          <Tabs value={openTab} onChange={handleTabChange}>
            <Tab label="Games" />
            <Tab label="Setups" />
          </Tabs>
        </AppBar>
        {openTab === UserPageTabs.Games && (
          <UserPreferences
            isCurrentUser={isCurrentUser}
            games={userGames}
            addUserGame={addUserGame}
            deleteUserGame={deleteUserGame}
            filteredGames={filteredGames}
            loadFilteredGames={loadFilteredGames}
          />
        )}
        {openTab === UserPageTabs.Setups && (
          <UserPreferences
            isCurrentUser={isCurrentUser}
            setups={setups}
            deleteUserSetup={deleteUserSetup}
            setTab={setTab}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
