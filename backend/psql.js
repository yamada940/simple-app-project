const { Client } = require("pg");

const client = new Client({
    host: "127.0.0.1",
    database: "db_test",
    user: "horiguchimasato",
    // password: "asd098",
    port: 5432,
});
client.connect();

const query = {
    text: "UPDATE users set id = $1, name = $2, email = $3",
    values: [1, "山田太郎", "yamada@gmail.com"],
  };
client.query(query)
  .then((res) => {
    console.log(res);
    client.end();
  })
  .catch((e) => console.error(e.stack));
// client.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   client.end();
// });