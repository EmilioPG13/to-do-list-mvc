const pool = require('./database');

const create = (description) => {
  return pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
};

const get = () => {
  return pool.query('SELECT * FROM todo');
};

const remove = (id) => {
  return pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
};

module.exports = { create, get, remove };