const { User } = require('../lib/user')
const { saveUser } = require('../database')
const { Client } = require('pg')

describe("SignUp", function(){
  var client;

  beforeEach(function(done) {
    client = new Client({ database: 'chitterjs_test' })
    client.connect()
    client.query('TRUNCATE peeps, users;', [], (err, res) => {
      done()
    })
  })

  afterEach(function() {
    client.end()
  })

  it("creates a user with a name, username and email", function() {
    const user = new User("edyta", "edy", "edy@email.com", "password")

    expect(user.name).toEqual("edyta")
    expect(user.username).toEqual("edy")
    expect(user.email).toEqual("edy@email.com")
    expect(user.password).toEqual("password")
  });

  it("saves a user with a name, username and email", function(done) {
    const user = new User("edyta", "edy", "edy@email.com", "password")

    saveUser(user, (err, id) => {
      expect(id).toBeGreaterThan(0)

      client.query('SELECT * FROM users WHERE id = $1;', [id], (err, res) => {
        const dbUser = res.rows[0];

        // console.log(dbUser)

        expect(dbUser.name).toBe("edyta")
        expect(dbUser.username).toEqual("edy")
        expect(dbUser.email).toEqual("edy@email.com")
        expect(dbUser.password).toEqual("password")
        done()
      })
    })
  });

});
