/*jslint node: true */

"use strict";

describe("Frame", function() {

  var frame;

  it("calculates total of two rolls", function() {
    frame = new Frame([6,3]);
    expect(frame.total()).toEqual(9);
  });

  it("indicates when rolls equal a spare", function() {
    frame = new Frame([6,4]);
    expect(frame.isSpare()).toBe(true);
  });

  it("indicates when user rolls strike", function() {
    frame = new Frame([10,0]);
    expect(frame.isStrike()).toBe(true);
  });

});
