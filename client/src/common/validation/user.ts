import { string, boolean } from 'yup';

import { PASSWORD, NAME } from 'common/constants';

const name = (name: string | null | undefined) => (name ? NAME.test(name) : false);
const password = (password: string | null | undefined) => (password ? PASSWORD.test(password) : false);

const schema = {
  name: string().min(3).max(50).test('name', 'Name can include only A-Z, a-z, А-Я, а-я, 0-9, symbols: _,-,.', name),
  email: string()
    .required('Email field is required')
    .email('Email field must be a valid field')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be max 50 characters'),
  password: string()
    .required('Password field is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be max 50 characters')
    .test('password', 'Password can include only A-Z, a-z, А-Я, а-я, 0-9, symbols: @,-,%,$,_,.,+', password),
  avatar: string().required().url(),
  isAdmin: boolean().default(() => false),
};

export default schema;
