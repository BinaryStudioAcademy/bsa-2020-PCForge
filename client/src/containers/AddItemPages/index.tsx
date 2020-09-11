import React from 'react'; //ReactElement
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { CardsName } from 'common/enums/AdminTools/CardsName';
//import { HardwareFields } from 'common/enums/HardwareTypes/fields';
import Title from 'components/Title';
import styles from './styles.module.scss';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import AddHardwareForm from './AddHardwareForm';
import AddGameForm from './AddGameForm';
import AddNewsForm from './AddNewsForm';

const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      filled: {
        color: 'black',
      },
    },
  },
});

const AddItemPage = (): JSX.Element => {
  const history = useHistory();
  let addItemType = '';
  let renderForm = false;

  const { item } = useParams();
  for (const card in CardsName) {
    if (card.toLowerCase() == item.toLowerCase()) {
      addItemType = card;
      renderForm = true;
    }
  }

  const handleCancelButton = () => history.goBack();

  return !renderForm ? (
    <Redirect to="/404" />
  ) : (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin Tools" subtitle={`Add ${addItemType}`} />
        </div>
        <ThemeProvider theme={theme}>
          {addItemType === CardsName.Hardwares ? <AddHardwareForm goBack={handleCancelButton} /> : null}
          {addItemType === CardsName.Games ? <AddGameForm goBack={handleCancelButton} /> : null}
          {addItemType === CardsName.News ? <AddNewsForm goBack={handleCancelButton} /> : null}
        </ThemeProvider>
      </div>
    </PageComponent>
  );
};

export default AddItemPage;
