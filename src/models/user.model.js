const db = require('db');
const connection = require('db/connection');

const UserSchema = new db.Schema({
  userName: { type: String, required: true }
});

const User = connection.model('User', UserSchema);

module.exports = User;