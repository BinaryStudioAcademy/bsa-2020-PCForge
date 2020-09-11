import React from 'react';
import styles from 'containers/UserPage/components/PreferencesSection/styles.module.scss';
import { AppBar, Box, Tab, Tabs } from '@material-ui/core';
import UserPreferences from 'containers/UserPage/components/UserPreferences';
import { IPreferencesSectionProps, UserPageTabs } from 'containers/UserPage/interfaces';

const PreferencesSection = (props: IPreferencesSectionProps): JSX.Element => {
  const {
    openTab,
    setTab,
    isCurrentUser,
    userGames,
    addUserGame,
    deleteUserGame,
    filteredGames,
    loadFilteredGames,
    setups,
    deleteUserSetup,
    editUserSetup,
  } = props;

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: UserPageTabs) => {
    setTab(newValue);
  };

  return (
    <Box className={styles.preferencesSection}>
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
          deleteFunction={deleteUserGame}
          filteredGames={filteredGames}
          loadFilteredGames={loadFilteredGames}
        />
      )}
      {openTab === UserPageTabs.Setups && (
        <UserPreferences
          isCurrentUser={isCurrentUser}
          setups={setups}
          deleteFunction={deleteUserSetup}
          editUserSetup={editUserSetup}
          setTab={setTab}
        />
      )}
    </Box>
  );
};

export default PreferencesSection;
