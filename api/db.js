import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "hiago",
    password: "Tankard",
    database: "crud"
})