const settings = require('./settings.json');
const userInput = process.argv[2];


const knex = require('knex')({
        client: settings.client,
        connection: {
        host : settings.host,
        user : settings.user,
        password : settings.password,
        database : settings.database,
    }
});

knex('famous_people')
    .where({first_name: userInput})
    .orWhere({last_name: userInput})
    .asCallback((err, rows) => {
        if (err) return console.error(err);

        console.log(`Found ${rows.length} by the name ${userInput}:`)
        rows.forEach((person, index) => {
            console.log(index, person);
        })
    knex.destroy();
});


