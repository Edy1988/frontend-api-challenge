(function (exports){
  const { Client } = require('pg')

  function saveUser(user, callback){
    const client = makeClient()
    client.connect()

    client.query('INSERT INTO users (name, username, email, password) VALUES ($1::text, $2::text, $3::text, $4::text) RETURNING id', [
      user.name,
      user.username,
      user.email,
      user.password
    ], (err, res) => {
      callback(err, err ? null : res.rows[0].id)
      client.end()
    })
  }

  function savePeep(peep, callback){
    const client = makeClient()
    client.connect()

    client.query('INSERT INTO peeps(user_id, text) VALUES ($1, $2) RETURNING id', [peep.user_id, peep.text], (err, res) => {
      callback(err, err ? null : res.rows[0].id)
      client.end()
    })
  }

  function makeClient() {
    if (process.env.NODE_ENV == 'test') {
      return new Client({ database: 'chitterjs_test' })
    } else {
      return new Client({ database: 'chitterjs' })
    }
  }

  exports.saveUser = saveUser;
  exports.savePeep = savePeep;
  exports.makeClient = makeClient;
})(this);
