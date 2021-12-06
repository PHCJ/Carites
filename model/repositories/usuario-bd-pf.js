//usuario-bd-pf.js
const db = require("../services/db");

async function insertUsuariopf(usuariopf){
    const conn = await db.connect();
    const sql = 'INSERT INTO usuariopf(idpf, nome, cpf, data, celular, email, senha) VALUES (?,?,?,?,?,?,?);';
    const values = [idpf, usuariopf.nome, usuariopf.cpf, usuariopf.data, usuariopf.celular, usuariopf.email, usuariopf.senha];
    return await conn.query(sql, values);
}

async function selectUsuariopf(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM usuariopf;');
    console.log(rows);
    return rows;
}

async function deleteUsuariopf(idpf){
    const conn = await db.connect();
    const sql = 'DELETE FROM usuariopf where idpf=?;';
    return await conn.query(sql, [idpf]);
}

async function updateUsuariopf(idpf, usuariopf){
    const conn = await db.connect();
    const sql = 'UPDATE usuariopf SET idpf=?, nome=?, cpf=?, data=?, celular=?, email=?, senha=? WHERE idpf=?';
    const values = [idpf, usuariopf.nome, usuariopf.cpf, usuariopf.data, usuariopf.celular, usuariopf.email, usuariopf.senha];
    return await conn.query(sql, values);
}
module.exports = {selectUsuariopf, insertUsuariopf, deleteUsuariopf, updateUsuariopf}