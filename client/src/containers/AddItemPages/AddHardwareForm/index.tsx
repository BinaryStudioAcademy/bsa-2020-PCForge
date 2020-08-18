import React, { useState } from 'react';
import { HardwareTypes } from 'common/enums/AdminTools/HardwareTypes';
import { HardwareFields } from 'common/enums/AdminTools/HardwareFields';
//import Title from 'components/Title';
//import Button, { ButtonType } from 'components/BasicComponents/Button';
//import Input from 'components/BasicComponents/Input';
import InputForm from 'components/BasicComponents/InputForm';
//import Link from 'components/BasicComponents/Link';
import Select from 'components/BasicComponents/Select';
import styles from './styles.module.scss';

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

let typeRamOptions: IinputOptions[], socketOptions: IinputOptions[], ramOptions: IinputOptions[];
const memorySizeOptions = [
  { value: 2, title: '2' },
  { value: 4, title: '4' },
  { value: 8, title: '8' },
  { value: 16, title: '16' },
];
const classCpuOptions = [
  { value: 'Laptop', title: 'Laptop' },
  { value: 'Desktop', title: 'Desktop' },
];

const AddHardwareForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const [typeHardWare, setTypeHardWare] = useState<string | unknown>();
  const [performance, setPerformance] = useState('');
  const [tdp, setTdp] = useState('');
  const [socket, setSocket] = useState('');
  const [clockSpeed, setClockSpeed] = useState('');
  const [cores, setCores] = useState('');
  const [classCpu, setClassCpu] = useState('');
  const [interfaceGpu, setInterfaceGpu] = useState('');
  const [memorySize, setMemorySize] = useState('');
  const [coreClocks, setCoreClocks] = useState('');
  const [directX, setDirectX] = useState('');
  const [openGl, setOpenGl] = useState('');
  const [ram, setRam] = useState('');
  const [power, setPower] = useState('');
  const [frequency, setFrequency] = useState('');
  const [typeRam, setTypeRam] = useState('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeHardWare(event.target.value as string);
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

  const handleChangeSocket = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSocket(event.target.value as string);
  };
  const handleChangeClassCpu = (event: React.ChangeEvent<{ value: unknown }>) => {
    setClassCpu(event.target.value as string);
  };
  const handleChangeRam = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRam(event.target.value as string);
  };
  const handleChangeTypeRam = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeRam(event.target.value as string);
  };
  const handleChangeMemorySize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMemorySize(event.target.value as string);
  };

  const fieldsMap = new Map<string, boolean>();
  for (const field in HardwareFields) {
    fieldsMap.set(field, false);
  }
  console.log(fieldsMap);

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
        typeRamOptions = [
          { value: 0, title: 'example0' },
          { value: 1, title: 'example1' },
        ];
        fieldsMap.set(HardwareFields.memorySize, true);
      }
      break;
    case HardwareTypes.Motherboard:
      {
        fieldsMap.set(HardwareFields.socket, true); // get data from server
        socketOptions = [
          { value: 0, title: 'example0' },
          { value: 1, title: 'example1' },
        ];
        fieldsMap.set(HardwareFields.ram, true); // get data from server
        ramOptions = [
          { value: 0, title: 'example0' },
          { value: 1, title: 'example1' },
        ];
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
        socketOptions = [
          { value: 0, title: 'example0' },
          { value: 1, title: 'example1' },
        ];
        fieldsMap.set(HardwareFields.tdp, true);
        fieldsMap.set(HardwareFields.clockSpeed, true);
        fieldsMap.set(HardwareFields.cores, true);
        fieldsMap.set(HardwareFields.classCpu, true);
      }
      break;
  }

  return (
    <div className={styles.formFields}>
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
              <Select
                inputLabel={HardwareFields.typeRam}
                placeholder="Select a type of RAM"
                value={typeRam}
                onChange={handleChangeTypeRam}
                inputOptions={typeRamOptions}
                labelClassName={styles.selectItemHeader}
                required
              />
            </div>
          ) : null}
          {fieldsMap.get(HardwareFields.socket) && typeHardWare === HardwareTypes.Motherboard ? (
            <div className={styles.selectItem}>
              <Select
                inputLabel={HardwareFields.socket}
                placeholder="Select a socket"
                value={socket}
                onChange={handleChangeSocket}
                inputOptions={socketOptions}
                labelClassName={styles.selectItemHeader}
                required
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
              <Select
                inputLabel={HardwareFields.ram}
                placeholder="Select a RAM"
                value={ram}
                onChange={handleChangeRam}
                inputOptions={ramOptions}
                labelClassName={styles.selectItemHeader}
                required
              />
            </div>
          ) : null}
          {fieldsMap.get(HardwareFields.socket) && typeHardWare === HardwareTypes.CPU ? (
            <div className={styles.selectItem}>
              <Select
                inputLabel={HardwareFields.socket}
                placeholder="Select a Socket"
                value={socket}
                onChange={handleChangeSocket}
                inputOptions={socketOptions}
                labelClassName={styles.selectItemHeader}
                required
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
  );
};

export default AddHardwareForm;
