const { Peep } = require('../lib/peep')

describe("Peep", function(){
  it("has a text", function(){
    var peep = new Peep("this is a peep");
    expect(peep.text).toEqual("this is a peep");
  })
})
