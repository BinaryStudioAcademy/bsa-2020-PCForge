import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import { HardwareFields } from 'common/enums/AdminTools/HardwareFields';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import InputForm from 'components/BasicComponents/InputForm';
import InputBasedSelect from 'components/BasicComponents/InputBasedSelect';
import Alert, { AlertType } from 'components/BasicComponents/Alert';
import Select from 'components/BasicComponents/Select';
import styles from './styles.module.scss';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'redux/rootReducer';
import * as actions from './actions';
import { HardwareFormState, HardWareFormAction, HardwareFormActionTypes, IHardwareFilter } from './actionsTypes';
import { RamCreationAttributes } from 'common/models/ram';
import { CpuCreationAttributes } from 'common/models/cpu';
import { GpuCreationAttributes } from 'common/models/gpu';
import { MotherboardCreationAttributes } from 'common/models/motherboard';
import { PowerSupplyCreationAttributes } from 'common/models/powerSupply';
import { memorySizeOptions, classCpuOptions } from './interfaces';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: '10px',
        lineHeight: '18px',
        color: '#cbcfd4',
      },
    },
    MuiInputBase: {
      input: {
        padding: '0', //'0.3rem 1rem 0.5rem',
      },
    },
  },
});

const HardwareTypesValues = [
  { value: HardwareTypes.PowerSupply, title: HardwareTypes.PowerSupply },
  { value: HardwareTypes.Motherboard, title: HardwareTypes.Motherboard },
  { value: HardwareTypes.RAM, title: HardwareTypes.RAM },
  { value: HardwareTypes.CPU, title: HardwareTypes.CPU },
  { value: HardwareTypes.GPU, title: HardwareTypes.GPU },
];

interface IPropsAddHardwareForm {
  state: HardwareFormState;
  getAllSelectsInitialValuesMotherboard: () => HardWareFormAction;
  getAllSelectsInitialValuesRAM: () => HardWareFormAction;
  getAllSelectsInitialValuesCPU: () => HardWareFormAction;
  uploadMoreItems: (payload: IHardwareFilter) => HardWareFormAction;
  createRAM: (ram: RamCreationAttributes) => HardWareFormAction;
  createPowerSupply: (powerSupply: PowerSupplyCreationAttributes) => HardWareFormAction;
  createMotherboard: (motherboard: MotherboardCreationAttributes) => HardWareFormAction;
  createGPU: (gpu: GpuCreationAttributes) => HardWareFormAction;
  createCPU: (cpu: CpuCreationAttributes) => HardWareFormAction;
  goBack: () => void;
}

const AddHardwareForm = (props: IPropsAddHardwareForm): JSX.Element => {
  const {
    goBack,
    getAllSelectsInitialValuesMotherboard,
    getAllSelectsInitialValuesRAM,
    getAllSelectsInitialValuesCPU,
    uploadMoreItems,
    createRAM,
    createPowerSupply,
    createMotherboard,
    createGPU,
    createCPU,
  } = props;

  const [alertText, setAlertText] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<AlertType>();
  const [name, setName] = useState('');
  const [typeHardWare, setTypeHardWare] = useState<string | unknown>();
  const [performance, setPerformance] = useState('');
  const [tdp, setTdp] = useState('');
  const [clockSpeed, setClockSpeed] = useState('');
  const [cores, setCores] = useState('');
  const [classCpu, setClassCpu] = useState('');
  const [interfaceGpu, setInterfaceGpu] = useState('');
  const [memorySize, setMemorySize] = useState('');
  const [coreClocks, setCoreClocks] = useState('');
  const [directX, setDirectX] = useState('');
  const [openGl, setOpenGl] = useState('');

  const [power, setPower] = useState('');
  const [frequency, setFrequency] = useState('');
  const [ram, setRam] = useState<number>();
  const [typeRam, setTypeRam] = useState<number>();
  const [socket, setSocket] = useState<number>();

  useEffect(() => {
    //updateStateToInit();
    //setAlertText(null);
  }, []);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeHardWare(event.target.value as string);
    setAlertText('');
    console.log(typeHardWare);
    console.log(event.target.value);
    switch (event.target.value) {
      case HardwareTypes.Motherboard: {
        getAllSelectsInitialValuesMotherboard();
        break;
      }
      case HardwareTypes.RAM: {
        getAllSelectsInitialValuesRAM();
        break;
      }
      case HardwareTypes.CPU: {
        getAllSelectsInitialValuesCPU();
        break;
      }
    }
  };
  const handleChangeFrequency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(event.target.value);
  };
  const handleChangePower = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPower(event.target.value);
  };
  const handleChangePerformance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerformance(event.target.value);
  };
  const handleChangeInterfaceGpu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterfaceGpu(event.target.value);
  };
  const handleChangeCoreClocks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoreClocks(event.target.value);
  };
  const handleChangeTdp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTdp(event.target.value);
  };
  const handleChangeDirectX = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirectX(event.target.value);
  };
  const handleChangeOpenGl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenGl(event.target.value);
  };
  const handleChangeClockSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClockSpeed(event.target.value);
  };
  const handleChangeCores = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCores(event.target.value);
  };

  const handleChangeClassCpu = (event: React.ChangeEvent<{ value: unknown }>) => {
    setClassCpu(event.target.value as string);
  };
  const handleChangeMemorySize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMemorySize(event.target.value as string);
  };

  const onCancel = () => {
    console.log('cancel');
    goBack();
  };
  const onPublish = () => {
    switch (typeHardWare) {
      case HardwareTypes.PowerSupply: {
        if (!name || !power) {
          setAlertText('Error: Please fill all hardware components');
          setAlertType(AlertType.error);
          return;
        }
        setAlertText('');
        const powerSupply: PowerSupplyCreationAttributes = {
          name,
          power: +power,
        };
        createPowerSupply(powerSupply);
        break;
      }
      case HardwareTypes.Motherboard: {
        if (!name || !socket || !ram) {
          setAlertText('Error: Please fill all hardware components');
          setAlertType(AlertType.error);
          return;
        }
        setAlertText('');
        const motherBoard: MotherboardCreationAttributes = {
          name,
          socketId: socket,
          ramTypeId: ram,
        };
        createMotherboard(motherBoard);
        break;
      }
      case HardwareTypes.RAM: {
        if (!name || !frequency || !typeRam || !power || !memorySize) {
          setAlertText('Error: Please fill all hardware components');
          setAlertType(AlertType.error);
          return;
        }
        setAlertText('');
        const newRam: RamCreationAttributes = {
          name,
          memorySize: +memorySize,
          frequency: +frequency,
          power: +power,
          typeId: typeRam,
        };
        createRAM(newRam);
        break;
      }
      case HardwareTypes.CPU: {
        if (!name || !performance || !tdp || !cores || !socket || !clockSpeed || !classCpu) {
          setAlertText('Error: Please fill all hardware components');
          setAlertType(AlertType.error);
          return;
        }
        setAlertText('');
        const newCPU: CpuCreationAttributes = {
          name,
          performance: +performance,
          clockspeed: +clockSpeed,
          tdp: +tdp,
          cores: +cores,
          class: classCpu,
          socketId: socket,
        };
        createCPU(newCPU);
        break;
      }
      case HardwareTypes.GPU: {
        if (!name || !performance || !tdp || !memorySize || !openGl || !interfaceGpu || !clockSpeed || !directX) {
          setAlertText('Error: Please fill all hardware components');
          setAlertType(AlertType.error);
          return;
        }
        setAlertText('');
        const newGPU: GpuCreationAttributes = {
          name,
          interface: interfaceGpu,
          memorySize: +memorySize,
          coreClocks: +coreClocks,
          opengl: openGl,
          tdp: +tdp,
          performance: +performance,
        };
        createGPU(newGPU);
        break;
      }
    }
  };

  const createUploadMoreItems = (typeHardware: HardwareFields, typeAction: string) => {
    let offset = 0;
    switch (typeHardware) {
      case HardwareFields.ram: {
        offset = props.state.RAMList.length;
        break;
      }
      case HardwareFields.socket: {
        offset = props.state.socketList.length;
        break;
      }
      case HardwareFields.typeRam: {
        offset = props.state.RAMtypeList.length;
        break;
      }
    }
    return function ({ value, itemCount = offset }: { value: string; itemCount?: number }) {
      const filter: IHardwareFilter = { offset: itemCount, name: value, typeHardware, typeAction };
      uploadMoreItems(filter);
    };
  };

  const fieldsMap = new Map<string, boolean>();
  for (const field in HardwareFields) {
    fieldsMap.set(field, false);
  }

  fieldsMap.forEach((value, key) => {
    fieldsMap.set(key, false);
  });
  switch (typeHardWare) {
    case HardwareTypes.PowerSupply:
      {
        fieldsMap.set(HardwareFields.power, true);
      }
      break;
    case HardwareTypes.RAM:
      {
        fieldsMap.set(HardwareFields.frequency, true);
        fieldsMap.set(HardwareFields.power, true);
        fieldsMap.set(HardwareFields.typeRam, true); // get data from server
        fieldsMap.set(HardwareFields.memorySize, true);
      }
      break;
    case HardwareTypes.Motherboard:
      {
        fieldsMap.set(HardwareFields.socket, true);
        fieldsMap.set(HardwareFields.ram, true);
      }
      break;
    case HardwareTypes.GPU:
      {
        fieldsMap.set(HardwareFields.perfomance, true);
        fieldsMap.set(HardwareFields.interfaceGpu, true);
        fieldsMap.set(HardwareFields.memorySize, true);
        fieldsMap.set(HardwareFields.coreClocks, true);
        fieldsMap.set(HardwareFields.tdp, true);
        fieldsMap.set(HardwareFields.directX, true);
        fieldsMap.set(HardwareFields.openGL, true);
      }
      break;
    case HardwareTypes.CPU:
      {
        fieldsMap.set(HardwareFields.perfomance, true);
        fieldsMap.set(HardwareFields.socket, true); // get data from server
        fieldsMap.set(HardwareFields.tdp, true);
        fieldsMap.set(HardwareFields.clockSpeed, true);
        fieldsMap.set(HardwareFields.cores, true);
        fieldsMap.set(HardwareFields.classCpu, true);
      }
      break;
  }

  if (props.state.error && !alertText) {
    setAlertText(props.state.error);
    setAlertType(AlertType.error);
  }
  if (props.state.createdHardwareName && !alertText) {
    setAlertText(`Success: Hardware ${props.state.createdHardwareName} was created.`);
    setAlertType(AlertType.success);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.formFields}>
        {alertText ? <Alert alertType={alertType}>{alertText}</Alert> : null}
        <div className={styles.inputItem}>
          <InputForm
            name="Name"
            inputLabel="Name"
            type="text"
            placeholder="Input a name of hardware"
            onChange={handleChangeName}
            value={name}
            required
          />
        </div>
        <div className={styles.selectItem}>
          <Select
            inputLabel="Hardware's type"
            placeholder="Select a type of hardware"
            value={typeHardWare}
            onChange={handleChangeType}
            inputOptions={HardwareTypesValues}
            labelClassName={styles.selectItemHeader}
            required
          />
        </div>
        {fieldsMap.get(HardwareFields.power) && typeHardWare === HardwareTypes.PowerSupply ? (
          <div className={styles.inputItem}>
            <InputForm
              name={HardwareFields.power}
              inputLabel={HardwareFields.power}
              type="number"
              placeholder="Input a Power"
              onChange={handleChangePower}
              value={power}
              InputProps={{ inputProps: { min: 1 } }}
            />
          </div>
        ) : null}
        <div className={styles.additionalFieldsContainer}>
          <div className={styles.additionalFieldLeft}>
            {fieldsMap.get(HardwareFields.frequency) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.frequency}
                  inputLabel={HardwareFields.frequency}
                  type="number"
                  placeholder="Input a Frequency"
                  onChange={handleChangeFrequency}
                  value={frequency}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.perfomance) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.perfomance}
                  inputLabel={HardwareFields.perfomance}
                  type="number"
                  placeholder="Input a Performance"
                  onChange={handleChangePerformance}
                  value={performance}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.memorySize) && typeHardWare === HardwareTypes.GPU ? (
              <div className={styles.selectItem}>
                <Select
                  inputLabel={HardwareFields.memorySize}
                  placeholder="Select a Memory Size"
                  value={memorySize}
                  onChange={handleChangeMemorySize}
                  inputOptions={memorySizeOptions}
                  labelClassName={styles.selectItemHeader}
                  required
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.tdp) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.tdp}
                  inputLabel={HardwareFields.tdp}
                  type="number"
                  placeholder="Input a TDP"
                  onChange={handleChangeTdp}
                  value={tdp}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.openGL) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.openGL}
                  inputLabel={HardwareFields.openGL}
                  type="text" // number?
                  placeholder="Input an OpenGL"
                  onChange={handleChangeOpenGl}
                  value={openGl}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.cores) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.cores}
                  inputLabel={HardwareFields.cores}
                  type="number"
                  placeholder="Input a Cores"
                  onChange={handleChangeCores}
                  value={cores}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {/* { selectType }
            { select socket } */}
            {fieldsMap.get(HardwareFields.typeRam) ? (
              <div className={styles.selectItem}>
                <InputBasedSelect
                  label={HardwareFields.typeRam}
                  labelClassName={styles.labelBaseSelect}
                  placeholder="Select a type of RAM"
                  inputId={HardwareFields.typeRam}
                  options={props.state.RAMtypeList}
                  debounceTime={300}
                  onSelect={(id: number) => setTypeRam(id)}
                  onInputChange={createUploadMoreItems(
                    HardwareFields.typeRam,
                    HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAMTYPE_VALUES
                  )}
                  onSeeMoreClick={createUploadMoreItems(
                    HardwareFields.typeRam,
                    HardwareFormActionTypes.UPLOAD_MORE_RAMTYPE_VALUES
                  )}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.socket) && typeHardWare === HardwareTypes.Motherboard ? (
              <div className={styles.selectItem}>
                <InputBasedSelect
                  label={HardwareFields.socket}
                  labelClassName={styles.labelBaseSelect}
                  placeholder="Select a socket"
                  inputId={HardwareFields.socket}
                  options={props.state.socketList}
                  debounceTime={300}
                  onSelect={(id: number) => setSocket(id)}
                  onInputChange={createUploadMoreItems(
                    HardwareFields.socket,
                    HardwareFormActionTypes.UPLOAD_MORE_ENTERED_SOCKET_VALUES
                  )}
                  onSeeMoreClick={createUploadMoreItems(
                    HardwareFields.socket,
                    HardwareFormActionTypes.UPLOAD_MORE_SOCKET_VALUES
                  )}
                />
              </div>
            ) : null}
          </div>
          <div className={styles.additionalFieldRight}>
            {fieldsMap.get(HardwareFields.power) && typeHardWare !== HardwareTypes.PowerSupply ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.power}
                  inputLabel={HardwareFields.power}
                  type="number"
                  placeholder="Input a Power"
                  onChange={handleChangePower}
                  value={power}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.interfaceGpu) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.interfaceGpu}
                  inputLabel={HardwareFields.interfaceGpu}
                  type="text"
                  placeholder="Input an Interface"
                  onChange={handleChangeInterfaceGpu}
                  value={interfaceGpu}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.coreClocks) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.coreClocks}
                  inputLabel={HardwareFields.coreClocks}
                  type="number"
                  placeholder="Input a Core Clocks"
                  onChange={handleChangeCoreClocks}
                  value={coreClocks}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.directX) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.directX}
                  inputLabel={HardwareFields.directX}
                  type="text"
                  placeholder="Input a DirectX"
                  onChange={handleChangeDirectX}
                  value={directX}
                />
              </div>
            ) : null}
            {/* { select memorySize for RAM }
            { select ram}
            { select socket for CPU } */}
            {fieldsMap.get(HardwareFields.memorySize) && typeHardWare === HardwareTypes.RAM ? (
              <div className={styles.selectItem}>
                <Select
                  inputLabel={HardwareFields.memorySize}
                  placeholder="Select a Memory Size"
                  value={memorySize}
                  onChange={handleChangeMemorySize}
                  inputOptions={memorySizeOptions}
                  labelClassName={styles.selectItemHeader}
                  required
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.ram) ? (
              <div className={styles.selectItem}>
                <InputBasedSelect
                  label={HardwareFields.ram}
                  labelClassName={styles.labelBaseSelect}
                  placeholder="Select a RAM"
                  inputId={HardwareFields.ram}
                  options={props.state.RAMList}
                  debounceTime={300}
                  onSelect={(id: number) => setRam(id)}
                  onInputChange={createUploadMoreItems(
                    HardwareFields.ram,
                    HardwareFormActionTypes.UPLOAD_MORE_ENTERED_RAM_VALUES
                  )}
                  onSeeMoreClick={createUploadMoreItems(
                    HardwareFields.ram,
                    HardwareFormActionTypes.UPLOAD_MORE_RAM_VALUES
                  )}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.socket) && typeHardWare === HardwareTypes.CPU ? (
              <div className={styles.selectItem}>
                <InputBasedSelect
                  label={HardwareFields.socket}
                  labelClassName={styles.labelBaseSelect}
                  placeholder="Select a socket"
                  inputId={HardwareFields.socket}
                  options={props.state.socketList}
                  debounceTime={300}
                  onSelect={(id: number) => setSocket(id)}
                  onInputChange={createUploadMoreItems(
                    HardwareFields.socket,
                    HardwareFormActionTypes.UPLOAD_MORE_ENTERED_SOCKET_VALUES
                  )}
                  onSeeMoreClick={createUploadMoreItems(
                    HardwareFields.socket,
                    HardwareFormActionTypes.UPLOAD_MORE_SOCKET_VALUES
                  )}
                />
              </div>
            ) : null}
            {fieldsMap.get(HardwareFields.clockSpeed) ? (
              <div className={styles.inputItem}>
                <InputForm
                  name={HardwareFields.clockSpeed}
                  inputLabel={HardwareFields.clockSpeed}
                  type="number"
                  placeholder="Input a Clock Speed"
                  onChange={handleChangeClockSpeed}
                  value={clockSpeed}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </div>
            ) : null}
            {/* { select class} */}
            {fieldsMap.get(HardwareFields.classCpu) ? (
              <div className={styles.selectItem}>
                <Select
                  inputLabel={HardwareFields.classCpu}
                  placeholder="Select a class"
                  value={classCpu}
                  onChange={handleChangeClassCpu}
                  inputOptions={classCpuOptions}
                  labelClassName={styles.selectItemHeader}
                  required
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <Button buttonType={ButtonType.primary} onClick={onPublish}>
            Publish
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button buttonType={ButtonType.secondary} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  state: state.hardwareForm,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddHardwareForm);
