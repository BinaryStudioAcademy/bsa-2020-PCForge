import { TypeSetup } from 'containers/BuilderPage/reducer';

const keySetup = 'setup';

export const getSetup = async (): Promise<TypeSetup | null> => {
  const setupString = window.localStorage.getItem(keySetup);
  return setupString ? JSON.parse(setupString) : setupString;
};

export const setSetup = async (setup: TypeSetup): Promise<void> => {
  const setupString = JSON.stringify(setup);
  window.localStorage.setItem(keySetup, setupString);
};

export const updateSetup = async (setup: TypeSetup): Promise<void> => {
  const setupString = window.localStorage.getItem(keySetup);
  const localSetup = setupString ? JSON.parse(setupString) : {};
  const newSetup = { ...localSetup, ...setup };
  const newSetupString = JSON.stringify(newSetup);
  window.localStorage.setItem(keySetup, newSetupString);
};

export const clearSetup = async (): Promise<void> => {
  window.localStorage.setItem(keySetup, JSON.stringify({}));
};

export const deleteSetup = async (): Promise<void> => {
  window.localStorage.removeItem(keySetup);
};
