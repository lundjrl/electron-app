import knex from 'knex';

const host: string = process.env.DB_HOST ?? '';
const port: number = parseInt(process.env.DB_PORT ?? '1433', 10);
const database: string = process.env.DB_DATABASE ?? '';
const user: string = process.env.DB_USER ?? '';
const password: string = process.env.DB_PASSWORD ?? '';

const selfDbConnection = () => {
  const config = {
    client: 'sqlite3',
    connection: {
      filename: './data/app.db',
    },
  };

  return knex(config);
};

const externalDbConnection = () => {
  const config = {
    client: 'mssql',
    connection: {
      database,
      user,
      password,
      server: host,
      port,
    },
  };

  return knex(config);
};

export { externalDbConnection, selfDbConnection };
