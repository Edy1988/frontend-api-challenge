const { Peep } = require('../lib/peep')

describe("Peep", function(){
  it("has a text and username", function(){
    var peep = new Peep("edy","this is a peep");
    expect(peep.username).toEqual("edy");
    expect(peep.text).toEqual("this is a peep");
  })
})
