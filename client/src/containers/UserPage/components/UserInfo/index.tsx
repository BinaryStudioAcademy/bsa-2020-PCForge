import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import styles from './styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import UserPreferences from '../UserPreferences';
import { SetErrorMessages, passwordValid, nameValid, emailValid } from '../../helpers/validation';
import { TypeUser } from 'common/models/typeUser';
import { UserActionTypes } from '../../logic/actionTypes';

enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

interface IUserInfoProps {
  user: TypeUser;
  updateUser: (data: TypeUser, avatarData?: Blob) => UserActionTypes;
}

const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const { user, updateUser } = props;
  const gamesArray = [
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/342180/header_292x136.jpg?t=1594132736',
      title: 'Arizona Sunshine',
      releaseDate: '20.02.20',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime nisi deleniti aliquam magni beatae?',
    },
    {
      image: 'https://steamcdn-a.akamaihd.net/steam/apps/546560/header_292x136.jpg?t=1594314571',
      title: 'Half-life ALYX',
      releaseDate: '06.06.16',
    },
  ];
  const setupsArray = [
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
    {
      image:
        'https://cdn2.iconfinder.com/data/icons/testing-software-2-filled-outline/128/Testing_Software_2_-_Ps_Style_-_1-01-512.png',
      title: 'My Title',
      description: 'Here is my super cool setting for all the bloody cool games',
    },
  ];

  const initialErrorMessages = {
    emailErrorMessage: null,
    passwordErrorMessage: null,
    nameErrorMessage: null,
    confirmedPasswordErrorMessage: null,
  };

  const initialAvatar = user.avatar || 'https://i.pinimg.com/originals/6f/6b/d8/6f6bd86caa6488dc3ac3fb8b1f74c0cb.jpg';

  const [selectedTab, setSelectedTab] = useState(0);
  const [editableInput, setEditableInput] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState(initialErrorMessages);

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
      if (
        emailValid(email, errorMessages, setErrorMessages as SetErrorMessages) &&
        passwordValid(password, confirmedPassword, errorMessages, setErrorMessages as SetErrorMessages) &&
        nameValid(name, errorMessages, setErrorMessages as SetErrorMessages)
      ) {
        const dataToUpdate = {
          id: user.id,
          name,
          email,
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
    setAvatar(initialAvatar);
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setConfirmedPassword('');

    setErrorMessages(initialErrorMessages);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    nameValid(event.target.value, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    emailValid(event.target.value, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    passwordValid(event.target.value, confirmedPassword, errorMessages, setErrorMessages as SetErrorMessages);
  };
  const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
    passwordValid(password, event.target.value, errorMessages, setErrorMessages as SetErrorMessages);
  };

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className={styles.userPageContainer}>
      <div className={styles.userInfo}>
        <div className={styles.userImage}>
          {editableInput && (
            <>
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
            </>
          )}
          <img src={avatar} alt="" />
        </div>
        <div className={styles.userData}>
          <Input
            disabled={editableInput ? false : true}
            className={editableInput ? styles.autoFocused : ''}
            icon="Face"
            value={name}
            inputType={errorMessages.nameErrorMessage ? InputType.error : undefined}
            onChange={handleNameChange}
            inputRef={inputRef}
            helperText={errorMessages.nameErrorMessage || ''}
          />
          <Input
            disabled={editableInput ? false : true}
            className={editableInput ? styles.autoFocused : ''}
            icon="Email"
            value={email}
            inputType={errorMessages.emailErrorMessage ? InputType.error : undefined}
            onChange={handleEmailChange}
            helperText={errorMessages.emailErrorMessage || ''}
          />
          {editableInput && (
            <Input
              className={editableInput ? styles.autoFocused : ''}
              icon="VpnKey"
              type="password"
              placeholder="New password"
              value={password}
              inputType={errorMessages.passwordErrorMessage ? InputType.error : undefined}
              onChange={handlePasswordChange}
              helperText={errorMessages.passwordErrorMessage || ''}
            />
          )}
          {editableInput && (
            <Input
              className={editableInput ? styles.autoFocused : ''}
              icon="VpnKey"
              type="password"
              placeholder="Confirm password"
              value={confirmedPassword}
              onChange={handleConfirmedPasswordChange}
              inputType={errorMessages.confirmedPasswordErrorMessage ? InputType.error : undefined}
              helperText={errorMessages.confirmedPasswordErrorMessage || ''}
            />
          )}

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
        </div>
      </div>

      <div className={styles.preferencesSection}>
        <AppBar position="static" className={styles.tabsBar}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Games" />
            <Tab label="Setups" />
          </Tabs>
        </AppBar>
        {selectedTab === UserPageTabs.Games && <UserPreferences games={gamesArray} />}
        {selectedTab === UserPageTabs.Setups && <UserPreferences setups={setupsArray} />}
      </div>
    </div>
  );
};

export default UserInfo;
