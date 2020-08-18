import React, { useState, ReactElement } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { CardsName } from 'common/enums/AdminToolsTotalCard';
import { HardwareFields } from 'common/enums/HardwareTypes/fields';
import Title from 'components/Title';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import styles from './styles.module.scss';
import { Routes } from 'common/enums';
import { RouteComponentProps, useParams, useHistory, Redirect } from 'react-router-dom';
import AddHardwareForm from './AddHardwareForm';
import createTypography from '@material-ui/core/styles/createTypography';

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

  let history = useHistory();
  const [image, setImage] = useState('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg');
  const inputRef = React.createRef<HTMLInputElement>();
  const imageInputRef = React.createRef<HTMLInputElement>();
  let addItemType = '';

  let { item } = useParams();
  console.log(item);
  for(let card in CardsName) {
    if (card.toLowerCase() == item.toLowerCase())
      addItemType = card;
  }


  //const addItemType: CardsName = CardsName.Hardwares;

  const handleChangeImage = () => { }
  const handleSendDataButton = () => { alert('TO DO send data'); }
  const handleCancelButton = () => history.goBack();//history.push(Routes.ADMINTOOLS); // go to previous page

  return (
      !addItemType
      ? <Redirect to="/404" />
      : <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
        <div className={styles.contentPage}>
          <div className={styles.pageHeader}>
            <Title title="Admin page" subtitle={`Add ${addItemType}`} />
          </div>
          <ThemeProvider theme={theme}>
          <div className={styles.contentMain}>
            <div className={styles.leftContent}>
              { addItemType === CardsName.Hardwares
                ? <AddHardwareForm />
                : null
              }
              {/* { addItemType === CardsName.Games
                  ? <AddHardwareForm /> //<AddGameForm />
                  : null
              } */}
              <div className={styles.buttonContainer}>
                <div className={styles.buttonWrapper}>
                  <Button buttonType={ButtonType.primary} onClick={handleSendDataButton} > {/* check is user is Admin and change text button here:*/}
                      Publish
                  </Button>
                </div>
                <div className={styles.buttonWrapper}>
                  <Button buttonType={ButtonType.secondary} onClick={handleCancelButton} >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.imageUpload}>
                  <img src={image} alt="hardware-icon"/>
                  <input type='file' id='imageInput' accept="image/*" ref={imageInputRef} hidden />
                  <Button buttonType={ButtonType.secondary} className={styles.imageButton} onClick={() => imageInputRef.current?.click()}>
                    Select Image
                  </Button>
              </div>
            </div>
            </div>
          </ThemeProvider>
        </div>
      </PageComponent>


  )
}

export default AddItemPage;