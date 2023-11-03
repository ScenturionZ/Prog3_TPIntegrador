require('dotenv').config();

const mysql = require("mysql2/promise");

const moment = require("moment");

//CONEXION CON LA DB
const conn = mysql.createPool({
	host: "localhost",
	user: process.env.REACT_APP_DB_USER,
	password: process.env.REACT_APP_DB_PASS,
	database: process.env.REACT_APP_DB_NAME
});

async function create(table, data){
    const query = "INSERT INTO " + table + " SET ?";
    const [newObj] = await conn.query(query, data);
    return findById(table, newObj.insertId);
}

async function createData(table, data){
    const query = "INSERT INTO " + table + " SET ?";
    const [newObj] = await conn.query(query, data);
    return findDataById(table, newObj.insertId);
}

async function findAll(table){
    const query = "SELECT * FROM " + table + " WHERE activo = 1";
    const [data] = await conn.query(query);
    const result = await checkData(data);
    return checkTypes(result);
}

async function findAllData(table){
    const query = "SELECT * FROM " + table;
    const [data] = await conn.query(query);
    let result = await checkData(data);
    return checkTypes(result);
}

async function findById(table, id){
    const query = "SELECT * FROM " + table + " WHERE id = " + id + " AND activo = 1";
    const [data] = await conn.query(query);
    if(data.length){
        let result = await checkData(data);
        return checkTypes(result);
    }
    return data;
}

async function findDataById(table, id){
    const query = "SELECT * FROM " + table + " WHERE id = " + id;
    const [data] = await conn.query(query);
    if(data.length){
        let result = await checkData(data);
        return checkTypes(result);
    }
    return data;
}

async function logicalDelete(table, value, id){
    const query = "UPDATE " + table + " SET activo = " + value + " WHERE id = " + id;
    await conn.query(query)
}

async function update(table, data, id){
    const query = "UPDATE " + table + " SET ? WHERE id = " + id;
    const [newObj] = await conn.query(query, data);
    return findById(table, id);
}

async function updateData(table, data, id){
    const query = "UPDATE " + table + " SET ? WHERE id = " + id;
    const [newObj] = await conn.query(query, data);
    return findDataById(table, id);
}

async function runSql(q){
    const [res] = await conn.query(q);
    /*if(res.length){
        return checkData(res);
    }*/
    return res;
}

async function checkData(data){
    let result = data;
    let cols = Object.keys(result);
    if(Array.isArray(result)){
        cols = Object.keys(result[0]);
    }
    let tables = getTableCols(cols);    
    if(!tables.length){
        return result;
    }
    let removeList = [];
    for (let e of result) {
        for (const t of tables) {
            const valId = e["id" + t];
            delete e["id" + t];
            let element;
            try {
                [element] = await findById(t, valId);
                if(element){
                    let colsE = Object.keys(element);
                    for (const colE of colsE) {
                        if(colE === "id"){
                            e[t.toLowerCase() + "ID"] = element[colE];
                        }else{
                            e[colE] = element[colE];
                        }
                    }
                }else{
                    removeList.push(result.indexOf(e));
                }
            } catch (error) {
                if(valId){
                    [element] = await findDataById(t, valId);
                    if(t === "Nacionalidad"){
                        e[t.toLowerCase()] = element.pais
                    }else{

                        e[t.toLowerCase().charAt(0) + t.substring(1)] = element.descripcion
                    }
                }else{
                    result.splice(result.indexOf(e),1)
                }
            }
        }
        delete e["activo"];
    }
    for (let i = 0; i < removeList.length; i++) {
        delete result[removeList[i]];
    }
    result = result.filter(function (e) {
        return e != null;
    });
    return checkData(result);
}

function checkTypes(data){
    for (let element of data) {
        if(element){
            for(let f of Object.keys(element)){
                //TIPOS DATE
                if(moment(element[f], moment.ISO_8601).isValid()){
                    element[f] = moment(element[f]).format('DD-MM-YYYY');
                }
            }
        }
    }
    return data;
}

function getTableCols(cols){
    let tables = [];
    for (const col of cols) {
        if(col.startsWith("id") && col !== "id"){
            tables.push(col.replace("id", ""));
        }
    }
    return tables;
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    logicalDelete,
    findAllData,
    findDataById,
    createData,
    updateData,
    runSql
};