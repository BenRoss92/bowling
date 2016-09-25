function Frame(rolls) {
  this._rolls = rolls;
}

Frame.prototype = {
  total: function() {
  return this._rolls.reduce(function(a,b) {
      return (a + b);
    })
  },

  isSpare: function() {
    return (this._rolls[0] + this._rolls[1] === 10);
  }
}
