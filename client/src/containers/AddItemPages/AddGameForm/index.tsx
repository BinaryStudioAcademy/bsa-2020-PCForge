import React, { useState, useEffect } from 'react';
import { GameFields } from 'common/enums/AdminTools/GameFields';
import InputForm from 'components/BasicComponents/InputForm';
import Select from 'components/BasicComponents/Select';
import Button, { ButtonType } from 'components/BasicComponents/Button';
import { getAllCpu } from 'api/services/cpuService';
import { getAllGpu } from 'api/services/gpuService';
import { postGame } from 'api/services/gameService';
import styles from './styles.module.scss';
import { GameCreationAttributes } from 'common/models/game';

interface IinputOptions {
  value: string | number;
  title: string;
}
interface IGameForm {
  goBack: () => void;
  image: string;
}

const AddGameForm = ({ goBack, image }: IGameForm): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState<number | string>('');
  const [recCPU, setRecCPU] = useState<number>();
  const [recGPU, setRecGPU] = useState<number>();
  const [minCPU, setMinCPU] = useState<number>();
  const [minGPU, setMinGPU] = useState<number>();
  const [recRamSize, setRecRAMSize] = useState<number | string>('');
  const [minRamSize, setMinRAMSize] = useState<number | string>('');

  const [CPUOptions, setCPUOptions] = useState([{ value: 0, title: '' }]);
  const [GPUOptions, setGPUOptions] = useState([{ value: 0, title: '' }]);
  //const [minCPUOptions, setMinCPUOptions] = useState([{ value: '', title:'' }]);
  //const [minGPUOptions, setMinGPUOptions] = useState([{ value: '', title:'' }]);
  // const recCPUOptions = [{ value: 'example', title: 'example' }];
  //const recGPUOptions = [{ value: 'example', title: 'example' }];
  // const minCPUOptions = [{ value: 'example', title: 'example' }];
  //const minGPUOptions = [{ value: 'example', title: 'example' }];
  const getSelectValues = async () => {
    setLoading(true);
    console.log(loading);
    try {
      const resCPU = await getAllCpu({});
      const resCPUValues = resCPU.data;
      const CPUOptionsNameValues = resCPUValues.map((item) => {
        return { value: item.id, title: item.name };
      });
      setCPUOptions(CPUOptionsNameValues);

      const resGPU = await getAllGpu({});
      const resGPUValues = resGPU.data;
      const GPUOptionsNameValues = resGPUValues.map((item) => {
        return { value: item.id, title: item.name };
      });
      setGPUOptions(GPUOptionsNameValues);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };
  useEffect(() => {
    getSelectValues();
  }, []);

  const onPublish = async () => {
    // validate intered values here
    const game: GameCreationAttributes = {
      name,
      year: year as number,
      image,
      description,
      recommendedRamSize: recRamSize as number,
      minimalRamSize: minRamSize as number,
      recommendedCpuId: recCPU as number,
      minimalCpuId: minCPU as number,
      recommendedGpuId: recGPU as number,
      minimalGpuId: recGPU as number,
    };
    console.log(game);
    const resultAdding = await postGame(game);
    if (resultAdding) alert('Game was succsessfully added!');
    // show notification that game was created
    goBack();
  };
  const onCancel = () => {
    console.log('cancel');
    goBack();
  };

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
    setRecCPU(event.target.value as number);
  };
  const handleChangeRecGPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRecGPU(event.target.value as number);
  };
  const handleChangeMinCPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinCPU(event.target.value as number);
  };
  const handleChangeMinGPU = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinGPU(event.target.value as number);
  };
  const handleChangeRecRAMSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecRAMSize(event.target.value);
  };
  const handleChangeMinRAMSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinRAMSize(event.target.value);
  };

  return (
    <div>
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
            InputProps={{ inputProps: { max: 2040, min: 1952 } }}
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
                inputOptions={CPUOptions}
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
                inputOptions={GPUOptions}
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
                inputOptions={CPUOptions}
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
                inputOptions={GPUOptions}
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
    </div>
  );
};

export default AddGameForm;
