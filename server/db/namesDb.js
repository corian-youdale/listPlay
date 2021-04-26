const connection = require('./connection')

function getNames (db = connection) {
    return db('Songs').select()
    
}


// add new name to database
function addName (newName, db = connection) {
    return nameExists(newName.name, db)
    .then(exists => {
        if (exists) {
            throw new Error ('Name already exists, try being someone else for today?')
        }
        return null
    })
    .then(newName => {
        return db('Songs')
        .insert(newName)

    })
}


// verify whether a name already exists
function nameExists (newName, db = connection) {
    return db('Songs')
    .count('id as n')
    .where('name', newName)
    .then(count => {
        return count[0].n > 0
    })
}


module.exports = {
    getNames,
    addName,
    nameExists
}
