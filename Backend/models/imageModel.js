const connection = require('../config/db.config');

const Image = {
  create: (url, callback) => {
    const sql = 'INSERT INTO images (url) VALUES (?)';
    connection.query(sql, [url], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM images';
    connection.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  deleteById: (id, callback) => {
    const sql = 'DELETE FROM images WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
};

module.exports = Image;
