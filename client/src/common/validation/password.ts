import { string } from 'yup';

const schema = {
  password: string()
    .required('Password field is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be max 50 characters'),
};

export default schema;
