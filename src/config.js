import {config} from "dotenv";
config();

export default {
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'enidev911',
    database: process.env.DB_DATABASE || 'langs_programmer',
    host: process.env.DB_HOST || 'localhost'
}