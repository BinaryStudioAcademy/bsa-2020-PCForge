import React, { useState } from 'react'; //ReactElement
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { CardsName } from 'common/enums/AdminTools/CardsName';
//import { HardwareFields } from 'common/enums/HardwareTypes/fields';
import Title from 'components/Title';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import styles from './styles.module.scss';
//import { Routes } from 'common/enums';
import { useParams, useHistory, Redirect } from 'react-router-dom'; //RouteComponentProps,
import AddHardwareForm from './AddHardwareForm';
import AddGameForm from './AddGameForm';
import emptyImage from 'assets/images/emptyImage.jpg';
//import createTypography from '@material-ui/core/styles/createTypography';

interface IinputOptions {
  value: string | number;
  title: string;
}

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
  const [image, setImage] = useState(emptyImage);

  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();
  let addItemType = '';
  let renderForm = false;

  const { item } = useParams();
  console.log(item);
  for (const card in CardsName) {
    if (card.toLowerCase() == item.toLowerCase()) {
      addItemType = card;
      renderForm = true;
    }
  }

  const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(image);
    }
  };
  const handleSendDataButton = () => {
    alert('TO DO send data');
  };
  const handleCancelButton = () => history.goBack(); //history.push(Routes.ADMINTOOLS); // go to previous page

  return !renderForm ? (
    <Redirect to="/404" />
  ) : (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin page" subtitle={`Add ${addItemType}`} />
        </div>
        <ThemeProvider theme={theme}>
          <div className={styles.contentMain}>
            <div className={styles.leftContent}>
              {addItemType === CardsName.Hardwares ? <AddHardwareForm goBack={handleCancelButton} /> : null}
              {addItemType === CardsName.Games ? <AddGameForm goBack={handleCancelButton} image={image} /> : null}
              {/* <div className={styles.buttonContainer}>
                <div className={styles.buttonWrapper}>
                  <Button buttonType={ButtonType.primary} onClick={handleSendDataButton}>
                    {/* check is user is Admin and change text button here:}
                    Publish
                  </Button>
                </div>
                <div className={styles.buttonWrapper}>
                  <Button buttonType={ButtonType.secondary} onClick={handleCancelButton}>
                    Cancel
                  </Button>
                </div>
              </div> */}
            </div>
            <div className={styles.rightContent}>
              {addItemType !== CardsName.Hardwares ? (
                <div className={styles.imageUpload}>
                  <img src={image || emptyImage} alt="add-item-icon" />
                  <input
                    type="file"
                    id="imageInput"
                    name="image"
                    accept="image/*"
                    ref={imageInputRef}
                    onChange={handleChangeImage}
                    hidden
                  />
                  <Button
                    buttonType={ButtonType.secondary}
                    className={styles.imageButton}
                    onClick={() => imageInputRef.current?.click()}
                  >
                    Select Image
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </ThemeProvider>
      </div>
    </PageComponent>
  );
};

export default AddItemPage;
