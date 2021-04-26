const connection = require('./connection')

function getSongs (db = connection) {
  return db('Songs').select()
}
// function getNames (db = connection) {
//     return db('Songs').select()
// }

module.exports = {
  getSongs,
//   getNames
}
