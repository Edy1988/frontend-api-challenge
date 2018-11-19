(function(exports){

  listOfPeeps = [];
  function Peep(user_id, text){

    this.user_id = user_id;
    this.text = text;
  }
  exports.Peep = Peep;
  exports.listOfPeeps = listOfPeeps;
})(this);
