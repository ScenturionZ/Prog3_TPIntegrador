require('dotenv').config();
const mysql = require("mysql2/promise");

//CONEXION CON LA DB
const conn = mysql.createPool({
	host: "localhost",
	user: process.env.REACT_APP_DB_USER,
	password: process.env.REACT_APP_DB_PASS,
	database: process.env.REACT_APP_DB_NAME
});

async function create(table, data, idField){
    const query = "INSERT INTO " + table + " SET ?";
    const [newObj] = await conn.query(query, data);
    return findById(table, newObj.insertId, idField);
}

async function findAll(table){
    const query = "SELECT * FROM " + table + " WHERE activo = 1";
    const [result] = await conn.query(query);
    return result;
}

async function findById(table, id, idField){
    const query = "SELECT * FROM " + table + " WHERE " + idField + " = " + id + " AND activo = 1";
    const [result] = await conn.query(query);
    return result;
}

async function logicalDelete(table, value, id, idField){
    const query = "UPDATE " + table + " SET activo = " + value + " WHERE " + idField + " = " + id;
    await conn.query(query)
}

async function update(table, data, id, idField){
    const query = "UPDATE " + table + " SET ? WHERE " + idField + " = " + id;
    const [newObj] = await conn.query(query, data);
    return findById(table, id, idField);
}


module.exports = {
    create,
    findAll,
    findById,
    update,
    logicalDelete
};