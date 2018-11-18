(function (exports){
  const { Client } = require('pg')
  const client = new Client({
    database: 'chitterjs_test'
  })

  function saveUser(user, callback){
    client.connect()
    const res = client.query('INSERT INTO users (name, username, email, password) VALUES ($1::text, $2::text, $3::text, $4::text) RETURNING id', [
      user.name,
      user.username,
      user.email,
      user.password
    ], (err, res) => {
      callback(err, err ? null : res.rows[0].id)
      client.end()
    })
  }

  exports.saveUser = saveUser;
})(this);
