const { Peep } = require('../lib/peep')
const { User } = require('../lib/user')
const { savePeep, saveUser, makeClient } = require('../database')

describe("Peep", function(){
  var client;

  beforeEach(function(done) {
    client = makeClient()
    client.connect()
    client.query('TRUNCATE peeps, users;', [], (err, res) => {
      done()
    })
  });

  afterEach(function() {
    client.end()
  })

  it("has a text and user_id", function(){
    var peep = new Peep(123, "this is a peep");
    expect(peep.user_id).toEqual(123);
    expect(peep.text).toEqual("this is a peep");
  })

  it("saves a peep with user_id and text", function(done){
    const user = new User("edyta", "edy", "edy@email.com", "password")

    saveUser(user, (err, user_id) => {
      const peep = new Peep(user_id, "This is peep")

      savePeep(peep, (err, id) => {
        expect(id).toBeGreaterThan(0)

        client.query('SELECT * FROM peeps WHERE id = $1;', [id], (err, res) => {
          const dbPeep = res.rows[0];

          expect(dbPeep.id).toEqual(id);
          expect(dbPeep.user_id).toEqual(user_id);
          expect(dbPeep.text).toEqual("This is peep");

          done();
        });
      });
    });
  });

});
