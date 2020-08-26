import { string } from 'yup';

const schema = {
  email: string()
    .email('Email field must be a valid field')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be max 50 characters'),
};

export default schema;
