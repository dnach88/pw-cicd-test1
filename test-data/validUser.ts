import 'dotenv/config';

export const validUser = {
  username: process.env.TEST_USER ?? 'defaulttUser',
  password: process.env.TEST_PASS ?? 'defaulttPass',
};