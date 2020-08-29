import keys from 'lodash/keys';
import pick from 'lodash/pick';

// remove properties from 'from' object which is not properties of T
export const reduceTo = <T>(from: T, ToFactory: new () => T): T => {
  const to: T = new ToFactory();
  const reduced: T = (pick(from, keys(to)) as unknown) as T;
  return reduced;
};

export const triggerServerError = (message: string, statusCode: number): never => {
  throw {
    error: message,
    message,
    status: statusCode,
  };
};

export const removeNonUrlChars = (source: string): string => {
  return source.replace(/\//g, '_').replace(/\+/g, '-').replace(/\./g, '-');
};

export const parseInt = (value: string | number): string => {
  if (typeof value === 'string') return value;
  else return parseInt(value);
};
