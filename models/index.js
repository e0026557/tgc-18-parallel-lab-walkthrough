// One model class represents one table
const bookshelf = require('../bookshelf');

// CONVENTION:
// Name of the Model must be first alphabet uppercase and singular
// first arg to bookshelf.model is the NAME of the model
const Poster = bookshelf.model('Poster', {
  'tableName': 'posters'
})

// To export more than one variable, we export out as an object
module.exports = { Poster };