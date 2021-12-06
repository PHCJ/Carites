//usuario-bd-pj.js
const db = require("../services/db");

async function insertUsuariopj(usuariopj){
    const conn = await db.connect();
    const sql = 'INSERT INTO usuariopj(nome, cnpj, razao, inscricao, telefone, site, email, senha, idpj) VALUES (?,?,?,?,?,?,?,?,?);';
    const values = [idpj, usuariopj.nome, usuariopj.cnpj, usuariopj.razao, usuariopj.inscricao, usuariopj.telefone, usuariopj.site, usuariopj.email, usuariopj.senha];
    return await conn.query(sql, values);
}

async function selectUsuariopj(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM usuariopj;');
    console.log(rows);
    return rows;
}

async function deleteUsuariopj(idpj){
    const conn = await db.connect();
    const sql = 'DELETE FROM usuariopj where idpj=?;';
    return await conn.query(sql, [idpj]);
}

async function updateUsuariopj(idpj, usuariopj){
    const conn = await db.connect();
    const sql = 'UPDATE usuariopj SET nome=?, cnpj=?, razao=?, inscricao=?, telefone=?, site=?, email=?, senha=? WHERE idpj=?';
    const values = [idpj, usuariopj.nome, usuariopj.cnpj, usuariopj.razao, usuariopj.inscricao, usuariopj.telefone, usuariopj.site, usuariopj.email, usuariopj.senha];
    return await conn.query(sql, values);
}
module.exports = {selectUsuariopj, insertUsuariopj, deleteUsuariopj, updateUsuariopj}