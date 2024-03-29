// configuration file
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASS,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DB
});

export default pool;

/*     user: process.env.PSQL_USER,
    password: process.env.PSQL_PASS,
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DB */