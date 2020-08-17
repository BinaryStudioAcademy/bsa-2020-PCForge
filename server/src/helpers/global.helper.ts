import keys from 'lodash/keys';
import pick from 'lodash/pick';

// remove properties from 'from' object which is not properties of T
export const reduceTo = <T>(from: T, ToFactory: new () => T): T => {
  const to: T = new ToFactory();
  const reduced: T = (pick(from, keys(to)) as unknown) as T;
  return reduced;
};
