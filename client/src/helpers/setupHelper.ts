import { TypeSetup } from 'containers/BuilderPage/reducer';

const keySetup = 'setup';

export const getLocalSetup = async (): Promise<TypeSetup | null> => {
  const setupString = window.localStorage.getItem(keySetup);
  return setupString ? JSON.parse(setupString) : setupString;
};

export const setLocalSetup = async (setup: TypeSetup): Promise<void> => {
  const setupString = JSON.stringify(setup);
  window.localStorage.setItem(keySetup, setupString);
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