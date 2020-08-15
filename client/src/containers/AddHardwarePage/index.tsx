import React, { useState, ReactElement } from 'react';
import PageComponent from 'containers/PageComponent';
import { MenuItems } from 'common/enums';
import { HardwareTypes } from 'common/enums/HardwareTypes';
import Title from 'components/Title';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import Input from 'components/BasicComponents/Input';
import Select from 'components/BasicComponents/Select';
import styles from './styles.module.scss';
import { SettingsSystemDaydreamRounded } from '@material-ui/icons';

interface IinputOptions {
  value: string | number;
  title: string;
}

const HardwareTypesValues = [
  { value: HardwareTypes.PowerSupply, title: HardwareTypes.PowerSupply },
  { value: HardwareTypes.Motherboard, title: HardwareTypes.Motherboard },
  { value: HardwareTypes.RAM, title: HardwareTypes.RAM },
  { value: HardwareTypes.CPU, title: HardwareTypes.CPU },
  { value: HardwareTypes.GPU, title: HardwareTypes.GPU },
];

/*const HardwareTypesValues: Array<IinputOptions> = [
  { value: 0, title: HardwareTypes.PowerSupply },
  { value: 1, title: HardwareTypes.Motherboard },
  { value: 2, title: HardwareTypes.RAM },
  { value: 3, title: HardwareTypes.CPU },
  { value: 4, title: HardwareTypes.GPU },
];*/



const AddHardwarePage: React.FC = () => {
  const [name, setName] = useState('');
  const [typeHardWare, setTypeHardWare] = useState<string | unknown>();
  const [frequency, setFrequency] = useState('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleChangeFrequency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(event.target.value);
  }
  const handleChangeType = (event: React.ChangeEvent<{ value: unknown}>) => {
    setTypeHardWare(event.target.value as string);
  }
  let perfomanceIsShown = false, // TO DO: create enum and handle all fields in map
      tdpIsShown = false,
      socketIsShown = false,
      clockSpeedIsShown = false,
      coresIsShown = false,
      classIsShown = false,
      interfaceIsShown = false,
      memorySizeIsShown = false,
      coreClocksIsShown = false,
      directXIsShown = false,
      openGLIsShown = false,
      ramIsShown = false,
      powerIsShown = false,
      frequencyIsShown = false,
      typeIsShown = false;

  switch(typeHardWare) {
    case (HardwareTypes.PowerSupply): {
      powerIsShown = true;

      frequencyIsShown = false;
    } break;
    case (HardwareTypes.RAM): {
      frequencyIsShown = true;
      powerIsShown = true;
      typeIsShown = true;
      memorySizeIsShown = true;
    } break;
    case (HardwareTypes.Motherboard): {
      socketIsShown = true;
      ramIsShown = true;

      frequencyIsShown = false;
    } break;
    case (HardwareTypes.GPU): {
      perfomanceIsShown = true;
      interfaceIsShown = true;
      memorySizeIsShown = true;
      coreClocksIsShown = true;
      tdpIsShown = true;
      directXIsShown = true;
      openGLIsShown = true;

      frequencyIsShown = false;
    } break;
    case (HardwareTypes.CPU): {
      perfomanceIsShown = true;
      socketIsShown = true;
      tdpIsShown = true;
      clockSpeedIsShown = true;
      coresIsShown = true;
      classIsShown = true;

      frequencyIsShown = false;
    } break;
  }

  return (
    <PageComponent selectedMenuItemNumber={MenuItems.AdminTools}>
      <div className={styles.contentPage}>
        <div className={styles.pageHeader}>
          <Title title="Admin page" subtitle="Add hardware"/>
        </div>
        <div className={styles.contentMain}>
          <div className={styles.leftContent}>
            <Input
              name='Name'
              type='text'
              placeholder="Input a name of hardware"
              onChange={handleChangeName}
              value={name}
              className={styles.inputTextField}
              required
            />
            <Select
              inputLabel="Hardware's type"
              placeholder="Select a type of hardware"
              value={typeHardWare}
              onChange={handleChangeType}
              inputOptions={HardwareTypesValues}
              labelClassName={styles.selectItemHeader}
              required
            />
            { frequencyIsShown
              ?  <Input
                  name='Frequency'
                  type='text'
                  placeholder="Input a name of frequency"
                  onChange={handleChangeFrequency}
                  value={frequency}
                />
              : null
            }
          </div>
          <div className={styles.rightContent}></div>
        </div>
      </div>
    </PageComponent>
  )
}

export default AddHardwarePage;