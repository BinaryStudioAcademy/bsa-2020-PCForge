import { TypeSetup, TypeSetupForPost } from 'containers/BuilderPage/reducer';

const keySetup = 'setup';

export const getLocalSetup = async (): Promise<TypeSetup | null> => {
  const setupString = window.localStorage.getItem(keySetup);
  return setupString ? JSON.parse(setupString) : setupString;
};

export const getLocalSetupObjectForSave = () => {
  const setupString = window.localStorage.getItem(keySetup);
  const setup = setupString ? JSON.parse(setupString) : setupString;
  const [cpuId, gpuId, motherboardId, ramId, powerSupplyId, hddId, ssdId, ramCapacity] = [
    setup?.cpu?.id,
    setup?.gpu?.id,
    setup?.motherboard?.id,
    setup?.ram?.id,
    setup?.powersupply?.id,
    setup?.hdd?.id,
    setup?.ssd?.id,
    setup.ramCapacity,
  ];
  if (cpuId && gpuId && motherboardId && ramId && powerSupplyId) {
    const setupForSave: TypeSetupForPost = {
      cpuId,
      gpuId,
      motherboardId,
      ramId,
      powerSupplyId,
      hddId,
      ssdId,
      ramCapacity,
    };
    return setupForSave;
  }
  return null;
};

export const setLocalSetup = async (setup: TypeSetup): Promise<void> => {
  const setupString = JSON.stringify(setup);
  window.localStorage.setItem(keySetup, setupString);
};

export const setCapacity = async (capacity: string): Promise<void> => {
  const setup = await getLocalSetup();
  if (setup) {
    setup.ramCapacity = capacity;
    await setLocalSetup(setup);
  }
};

export const updateLocalSetup = async (setup: TypeSetup): Promise<void> => {
  const setupString = window.localStorage.getItem(keySetup);
  const localSetup = setupString ? JSON.parse(setupString) : {};
  const newSetup = { ...localSetup, ...setup };
  const newSetupString = JSON.stringify(newSetup);
  window.localStorage.setItem(keySetup, newSetupString);
};

export const clearLocalSetup = async (): Promise<void> => {
  window.localStorage.setItem(keySetup, JSON.stringify({}));
};

export const deleteLocalSetup = async (): Promise<void> => {
  window.localStorage.removeItem(keySetup);
};
