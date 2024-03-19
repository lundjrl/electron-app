import { selfDbConnection } from '../DatabaseService/config';

const TABLE_NAME = 'employees';

export const getStoredEmployees = async () => {
  const client = selfDbConnection();

  const data = await client.table(TABLE_NAME).select('*');

  return data;
};
