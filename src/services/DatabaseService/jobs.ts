import { externalDbConnection } from './config';

const TABLE_NAME = 'jobs';

export const getJobs = async () => {
  const client = externalDbConnection();

  const data = await client.table(TABLE_NAME).select('*');

  return data;
};
