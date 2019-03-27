const settings = require('./settings.json');
const [, ,first_name, last_name, birthdate] = process.argv;

const knex = require('knex')({
    client : settings.client,
    connection : {
    host : settings.host,
    user : settings.user,
    password : settings.password,
    database : settings.database,
    }
});

knex('famous_people')
.returning(['id', 'first_name', 'last_name', 'birthdate'])
    .insert({first_name, last_name, birthdate})
    .asCallback((err, rows) => {
        if(err) return console.error(err)
        console.log(rows);
        knex.destroy();
    });