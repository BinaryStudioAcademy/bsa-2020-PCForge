import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import styles from './styles.module.scss';
import Input, { InputType } from 'components/BasicComponents/Input';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Link from 'components/BasicComponents/Link';
import UserPreferences from './components/UserPreferences';
import { RootState } from 'redux/rootReducer';
import { loadUser } from './logic/actions';

enum UserPageTabs {
  Games = 0,
  Setups = 1,
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserPage = (props: Props) => {
  const { loadedUser, spinner, loadUser } = props;

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

  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState(0);
  const [editableInput, setEditableInput] = useState(false);
  const [requireOldPassword, setRequireOldPassword] = useState(false);
  const [name, setName] = useState('Takeshi');
  const [email, setEmail] = useState('Takeshi@gmail');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    loadUser(id);
  }, []);

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
      console.log("you'll have to save here");
      setRequireOldPassword(false);
    }
    setEditableInput(!editableInput);
  };

  const handleCancel = (event: React.MouseEvent) => {
    setEditableInput(false);
    setRequireOldPassword(false);
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
          <img src="https://i.pinimg.com/originals/6f/6b/d8/6f6bd86caa6488dc3ac3fb8b1f74c0cb.jpg" alt="" />
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

const mapState = (state: RootState) => ({
  loadedUser: state.user.loadedUser,
  spinner: state.user.showSpinner,
});

const mapDispatch = {
  loadUser,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserPage);
