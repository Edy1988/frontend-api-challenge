const { User } = require('../lib/user')

describe("SignUp", function(){
  it("creates a user with a name, username and email", function() {
    var user = new User("edyta", "edy", "edy@email.com", "password")
    expect(user.name).toEqual("edyta")
    expect(user.username).toEqual("edy")
    expect(user.email).toEqual("edy@email.com")
    expect(user.password).toEqual("password")

  });
});
