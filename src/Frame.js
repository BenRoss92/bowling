function Frame(rolls) {
  this._rolls = rolls;
}

Frame.prototype = {
  total: function() {
  return this._rolls.reduce(function(a,b) {
      return (a + b);
    })
  }
}
