import pkg from "pg";
import { allowedNodeEnvironmentFlags } from "process";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}


async function autenticarAdmin(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM Admin WHERE email = $1 AND senha = $2";
  const admin = [email, senha];
  const res = await client.query(query, admin);
  return res.rows[0];
}

async function selectShows() {
  const client = await connect();
  const res = await client.query("SELECT * FROM Shows");
  return res.rows;
}

async function insertShows(data) {
  const client = await connect();
  const query = "INSERT INTO Shows (codigo, pessoas, artista, valor_disp, valor_final, responsavel, endereco, data_hora) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
  const curso = [data.codigo, data.pessoas, data.artista, data.valor_disp, data.valor_final, data.responsavel, data.endereco, data.data_hora];
  await client.query(query, curso);
  client.release();
}

async function deleteShows(codigo) {
  const client = await connect();
  const query = "DELETE FROM Shows WHERE codigo = $1";
  await client.query(query, [codigo]);
  client.release();
}

async function updateShows(codigo, data) {
  const client = await connect();
  const query = "UPDATE Cursos SET pessoas = $1, valor_disp = $2, valor_final = $3, artista = $4, responsavel = $5, endereco = $6, data_hora = $7 WHERE id = $8";
  const curso = [data.pessoas, data.valor_disp, data.valor_final, data.artista, data.responsavel, data.endereco, data.data_hora, codigo];
  await client.query(query, curso);
  client.release();
}

async function insertAdmin(data) {
    const client = await connect();
    const query = "INSERT INTO Admin(email, senha, nome) VALUES ($1, $2, $3)";
    const curso = [data.email, data.senha, data.nome];
    await client.query(query, curso);
    client.release();
}

async function deleteAdmin(email) {
    const client = await connect();
    const query = "DELETE FROM Admin WHERE email = $1";
    await client.query(query, [email]);
    client.release();
}

export {
  autenticarAdmin, insertAdmin, deleteAdmin,
  insertShows, deleteShows, updateShows, selectShows
};