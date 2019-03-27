// Update with your config settings.
const settings = require('./settings.json');
module.exports = {

  development: {
    client: settings.client,
    connection : {
    host : settings.host,
    user : settings.user,
    password : settings.password,
    database : settings.database,
    }
  }
};
