const connection = require('./connection')

function getSongs (db = connection) {
  return db('Songs').select()
}

module.exports = {
  getSongs
}
