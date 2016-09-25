function Frame(rolls) {
  this._rolls = rolls;
}

Frame.prototype = {
roundScore : function(secondFrame) {
    if (this.isSpare()) {
      return this.frameScore() + secondFrame._rolls[0];
    } else {
      return this.frameScore();
    }
  },

frameScore : function() {
  return this._rolls.reduce(function(a,b) {
      return (a + b);
  });
  },

  isSpare: function() {
    return (this._rolls[0] + this._rolls[1] === 10);
  },

  isStrike: function() {
    return (this._rolls[0] === 10);
  }
}
