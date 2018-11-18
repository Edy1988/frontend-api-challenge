(function(exports){

  listOfPeeps = [];
  function Peep(username, text){

    this.username = username;
    this.text = text;
  }
  exports.Peep = Peep;
  exports.listOfPeeps = listOfPeeps;
})(this);
