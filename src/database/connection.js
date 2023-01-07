import mysql from "promise-mysql";
import config from "../config";


const connection = mysql.createConnection({
    user: config.user,
    password: config.password,
    database: config.database
})

const getConnection = () => {
    return connection;
}

export const db = { getConnection }