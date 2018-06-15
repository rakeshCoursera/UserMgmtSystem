// configuration file contains variables which are used by application at various places
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_SERVER: process.env.DB_SERVER || 'localhost',
  DB_NAME: process.env.DB_NAME || 'user_manager',
};
