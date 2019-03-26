const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const findFamousPerson = (userInput, cb) => {
  const queryText = 'SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1 OR last_name = $1';
  client.query(queryText, [userInput], (err, res) => {
    if (err) {
      console.log(`Error running query. ${err.stack}`);
    } else {
      console.log(`Found ${res.rows.length} by the name ${userInput}:`)
      res.rows.forEach((person, index) => {
        console.log(index, person);
      })
    }
  })
}

client.connect(err => {
  console.log('Searching...');
  if(err) {
    console.log(`Connection error ${err.stack}`);
  } else {
    console.log(`Connected to ${client.database} database!`);
    const [node, path, userInput] = process.argv;
    
    findFamousPerson(userInput);
  }
})