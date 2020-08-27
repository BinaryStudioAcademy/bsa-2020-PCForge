import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import UserPreferences from '../UserPreferences';
import { SetErrorMessage, passwordValid, nameValid, emailValid } from '../../helpers/validation';
import { TypeUser } from 'common/models/typeUser';
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
  filteredGames: Game[];
  loadFilteredGames: (searchString: string) => UserActionTypes;
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
    setups,
  } = props;

  const initialErrorMessages = {
    emailErrorMessage: null,
    passwordErrorMessage: null,
    nameErrorMessage: null,
    confirmedPasswordErrorMessage: null,
  };

  const initialAvatar = user.avatar;

  const [selectedTab, setSelectedTab] = useState(0);
  const [editableInput, setEditableInput] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState(initialErrorMessages.nameErrorMessage);
  const [emailErrorMessage, setEmailErrorMessage] = useState(initialErrorMessages.emailErrorMessage);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(initialErrorMessages.passwordErrorMessage);
  const [confirmedPasswordErrorMessage, setConfirmedPasswordErrorMessage] = useState(
    initialErrorMessages.confirmedPasswordErrorMessage
  );
  const [validate, setValidate] = useState(false);

  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (editableInput) {
      inputRef.current?.focus();
    }
  }, [editableInput]);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
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
      if (validEmail && validPassword && validName) {
        const dataToUpdate = {
          id: user.id,
          name,
          email,
          avatar,
        } as TypeUser;

        if (password) {
          dataToUpdate.password = password;
        }

        const avatarData = (imageInputRef.current?.files && imageInputRef.current?.files[0]) || undefined;

        updateUser(dataToUpdate, avatarData);

        setEditableInput(false);
        setPassword('');
        setConfirmedPassword('');
      }
    } else {
      setEditableInput(true);
    }
  };

  const handleCancel = (event: React.MouseEvent) => {
    setEditableInput(false);
    setValidate(false);
    setAvatar(initialAvatar);
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setConfirmedPassword('');

    setNameErrorMessage(initialErrorMessages.nameErrorMessage);
    setEmailErrorMessage(initialErrorMessages.emailErrorMessage);
    setPasswordErrorMessage(initialErrorMessages.passwordErrorMessage);
    setConfirmedPasswordErrorMessage(initialErrorMessages.confirmedPasswordErrorMessage);
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

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleDeleteAvatar = (event: React.MouseEvent) => {
    setAvatar('');
  };

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
            inputType={nameErrorMessage ? InputType.error : undefined}
            onChange={handleNameChange}
            inputRef={inputRef}
            helperText={nameErrorMessage || ''}
          />
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
          {editableInput && (
            <div className={styles.passwordInputHolder + (passwordErrorMessage ? ` ${styles.holderError}` : '')}>
              <PasswordInput
                icon="VpnKey"
                inputHandler={handlePasswordChange}
                value={password}
                inputType={passwordErrorMessage ? InputType.error : undefined}
                helperText={passwordErrorMessage || ''}
              />
            </div>
          )}
          {editableInput && (
            <div
              className={styles.passwordInputHolder + (confirmedPasswordErrorMessage ? ` ${styles.holderError}` : '')}
            >
              <PasswordInput
                icon="VpnKey"
                placeholder="Confirm password"
                inputHandler={handleConfirmedPasswordChange}
                value={confirmedPassword}
                inputType={confirmedPasswordErrorMessage ? InputType.error : undefined}
                helperText={confirmedPasswordErrorMessage || ''}
              />
            </div>
          )}
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
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Games" />
            <Tab label="Setups" />
          </Tabs>
        </AppBar>
        {selectedTab === UserPageTabs.Games && (
          <UserPreferences
            isCurrentUser={isCurrentUser}
            games={userGames}
            addUserGame={addUserGame}
            deleteUserGame={deleteUserGame}
            filteredGames={filteredGames}
            loadFilteredGames={loadFilteredGames}
          />
        )}
        {selectedTab === UserPageTabs.Setups && <UserPreferences isCurrentUser={isCurrentUser} setups={setups} />}
      </div>
    </div>
  );
};

export default UserInfo;
