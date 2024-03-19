import { selfDbConnection } from '../DatabaseService/config';

const TABLE_NAME = 'jobs';

export const getJobs = async () => {
  const client = selfDbConnection();

  const data = await client.table(TABLE_NAME).select('*');

  return data;
};
