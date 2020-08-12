import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import styles from './styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import UserPreferences from '../UserPreferences';
import { TypeUser } from 'models/typeUser';

enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

interface IUserInfoProps {
  user: TypeUser;
}

interface IErrorMessage {
  emailErrorMessage: null | string;
  passwordErrorMessage: null | string;
  nameErrorMessage: null | string;
}

type SetErrorMessages = (message: IErrorMessage) => void;

const emailValid = (email: string, errorMessages: IErrorMessage, setErrorMessages: SetErrorMessages) => {
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

const passwordValid = (
  password: string,
  confirmedPassword: string,
  errorMessages: IErrorMessage,
  setErrorMessages: SetErrorMessages
) => {
  let passwordMessage = null;
  const regex = /^[a-zA-Z0-9@\-%$_.+]{5,30}$/;
  // if (password == '' && confirmedPassword == '') {
  //   passwordMessage = null;
  // }
  if (password !== '') {
    if (!regex.test(password)) {
      passwordMessage = 'Wrong password format';
      console.log('wrong format');
    } else if (password !== confirmedPassword) {
      passwordMessage = 'Passwords do not match';
      console.log('do not match');
    }
  }
  setErrorMessages({ ...errorMessages, passwordErrorMessage: passwordMessage });
  return !passwordMessage;
};

const nameValid = (name: string, errorMessages: IErrorMessage, setErrorMessages: SetErrorMessages) => {
  let nameMessage = null;
  const regex = /^[a-zA-Z0-9._-]{3,30}$/;
  if (!regex.test(name)) {
    nameMessage = 'Wrong email format';
  }
  setErrorMessages({ ...errorMessages, nameErrorMessage: nameMessage });
  return !nameMessage;
};

const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const { user } = props;
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

  const [selectedTab, setSelectedTab] = useState(0);
  const [editableInput, setEditableInput] = useState(false);
  const [requireOldPassword, setRequireOldPassword] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState('https://i.pinimg.com/originals/6f/6b/d8/6f6bd86caa6488dc3ac3fb8b1f74c0cb.jpg');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    emailErrorMessage: null,
    passwordErrorMessage: null,
    nameErrorMessage: null,
  });

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
      let valid = true;

      if (
        valid &&
        emailValid(email, errorMessages, setErrorMessages as SetErrorMessages) &&
        passwordValid(password, confirmedPassword, errorMessages, setErrorMessages as SetErrorMessages) &&
        nameValid(name, errorMessages, setErrorMessages as SetErrorMessages)
      ) {
        console.log("you'll have to save here");
        setEditableInput(false);
      } else {
        console.log('wrong');
      }
      setRequireOldPassword(false);
    } else {
      setEditableInput(true);
    }
  };

  const handleCancel = (event: React.MouseEvent) => {
    setEditableInput(false);
    setRequireOldPassword(false);
    setName(user.name);
    setEmail(user.email);
    setPassword('');
    setOldPassword('');
    setConfirmedPassword('');
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setRequireOldPassword(true);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setRequireOldPassword(true);
  };
  const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  };
  const handleOldPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value);
  };
  const handleChangeImage = () => {
    // TODO: Upload image and show
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
            inputType={name ? undefined : InputType.error}
            onChange={handleNameChange}
            inputRef={inputRef}
          />
          <Input
            disabled={editableInput ? false : true}
            className={editableInput ? styles.autoFocused : ''}
            icon="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {editableInput && (
            <Input
              className={editableInput ? styles.autoFocused : ''}
              icon="VpnKey"
              type="password"
              placeholder="New password"
              value={password}
              onChange={handlePasswordChange}
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
              helperText={password !== confirmedPassword ? 'passwords must match' : ''}
            />
          )}
          {requireOldPassword && (
            <Input
              className={styles.autoFocused}
              icon="VpnKey"
              type="password"
              placeholder="Old password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
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
