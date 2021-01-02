import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '111',
  database: 'schooldb',
  port: 5432,
});

export default pool;
