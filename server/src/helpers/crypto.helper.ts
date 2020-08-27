/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const saltRounds = 10;

export const encrypt = (data: unknown) => bcrypt.hash(data, saltRounds);

export const encryptSync = (data: unknown) => bcrypt.hashSync(data, saltRounds);

export const compare = (data: unknown, encrypted: string) => bcrypt.compare(data, encrypted);

export const getRandomStringToken = () => crypto.randomBytes(24).toString('hex');
