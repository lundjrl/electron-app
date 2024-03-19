import { externalDbConnection } from './config';

const TABLE_NAME = 'employees';

export const getEmployees = async () => {
  const client = externalDbConnection();

  const data = await client.table(TABLE_NAME).select('*');

  return data;
};
