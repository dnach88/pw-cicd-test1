import 'dotenv/config';

export const validUser = {
  username: process.env.TEST_USER ?? 'somePlaceholderUser',
  password: process.env.TEST_PASS ?? 'somePlaceholderPass',
};