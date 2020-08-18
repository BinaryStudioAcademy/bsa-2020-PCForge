import React, { useState } from 'react';
import { GameFields } from 'common/enums/AdminTools/GameFields';
import InputForm from 'components/BasicComponents/InputForm';
import Select from 'components/BasicComponents/Select';
import styles from './styles.module.scss';

interface IinputOptions {
  value: string | number;
  title: string;
}

const AddGameForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState<number | string>('');
  const [recCPU, setRecCPU] = useState<string>('');
  const [recGPU, setRecGPU] = useState<string>('');
  const [minCPU, setMinCPU] = useState<string>('');
  const [minGPU, setMinGPU] = useState<string>('');
  const [recRamSize, setRecRAMSize] = useState<number | string>('');
  const [minRamSize, setMinRAMSize] = useState<number | string>('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeDecription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };
  const handleChangeRecCPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecCPU(event.target.value as string);
  };
  const handleChangeRecGPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecGPU(event.target.value as string);
  };
  const handleChangeMinCPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinCPU(event.target.value as string);
  };
  const handleChangeMinGPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinGPU(event.target.value as string);
  };
  const handleChangeRecRAMSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecRAMSize(event.target.value);
  };
  const handleChangeMinRAMSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinRAMSize(event.target.value);
  };
  const recCPUOptions = [{ value: 'example', title: 'example' }];
  const recGPUOptions = [{ value: 'example', title: 'example' }];
  const minCPUOptions = [{ value: 'example', title: 'example' }];
  const minGPUOptions = [{ value: 'example', title: 'example' }];

  return (
    <div className={styles.formFields}>
      <div className={styles.inputItem}>
        <InputForm
          name={GameFields.Name}
          inputLabel={GameFields.Name}
          type="text"
          placeholder="Input a name of a game"
          onChange={handleChangeName}
          value={name}
          required
        />
      </div>
      <div className={styles.inputItem}>
        <InputForm
          name={GameFields.Description}
          inputLabel={GameFields.Description}
          type="text"
          placeholder={`Input a ${GameFields.Description}`}
          onChange={handleChangeDecription}
          value={description}
          multiline
          rowsMax={8}
          rows={4}
        />
      </div>
      <div className={styles.inputItem}>
        <InputForm
          name={GameFields.Year}
          inputLabel={GameFields.Description}
          type="number"
          placeholder={`Input a ${GameFields.Year}`}
          onChange={handleChangeYear}
          value={year}
          InputProps={{ inputProps: { max: 2040, min: 1980 } }}
        />
      </div>
      <div className={styles.additionalFieldsContainer}>
        <div className={styles.additionalFieldLeft}>
          <div className={styles.selectItem}>
            <Select
              inputLabel={GameFields.RecommendedCPU}
              placeholder={`Input a ${GameFields.RecommendedCPU}`}
              value={recCPU}
              onChange={handleChangeRecCPU}
              inputOptions={recCPUOptions}
              labelClassName={styles.selectItemHeader}
              required
            />
          </div>
          <div className={styles.selectItem}>
            <Select
              inputLabel={GameFields.RecommendedGPU}
              placeholder={`Input a ${GameFields.RecommendedGPU}`}
              value={recGPU}
              onChange={handleChangeRecGPU}
              inputOptions={recGPUOptions}
              labelClassName={styles.selectItemHeader}
              required
            />
          </div>
          <div className={styles.inputItem}>
            <InputForm
              name={GameFields.RecommendedRamSize}
              inputLabel={GameFields.RecommendedRamSize}
              type="number"
              placeholder={`Input a ${GameFields.RecommendedRamSize}`}
              onChange={handleChangeRecRAMSize}
              value={recRamSize}
              required
              InputProps={{ inputProps: { max: 32, min: 2, step: 2 } }}
            />
          </div>
        </div>
        <div className={styles.additionalFieldRight}>
          <div className={styles.selectItem}>
            <Select
              inputLabel={GameFields.MinimalCPU}
              placeholder={`Input a ${GameFields.MinimalCPU}`}
              value={minCPU}
              onChange={handleChangeMinCPU}
              inputOptions={minCPUOptions}
              labelClassName={styles.selectItemHeader}
              required
            />
          </div>
          <div className={styles.selectItem}>
            <Select
              inputLabel={GameFields.MinimalGPU}
              placeholder={`Input a ${GameFields.MinimalGPU}`}
              value={minGPU}
              onChange={handleChangeMinGPU}
              inputOptions={minGPUOptions}
              labelClassName={styles.selectItemHeader}
              required
            />
          </div>
          <div className={styles.inputItem}>
            <InputForm
              name={GameFields.MinimalRamSize}
              inputLabel={GameFields.MinimalRamSize}
              type="number"
              placeholder={`Input a ${GameFields.MinimalRamSize}`}
              onChange={handleChangeMinRAMSize}
              value={minRamSize}
              required
              InputProps={{ inputProps: { max: 32, min: 2, step: 2 } }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGameForm;
