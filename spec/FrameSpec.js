/*jslint node: true */

"use strict";

describe("Frame", function() {

  var frame;
  var secondFrame;

  it("calculates score of frame, i.e. two rolls", function() {
    frame = new Frame([6,3]);
    expect(frame.frameScore()).toEqual(9);
  });

  it("indicates when rolls spare within frame", function() {
    frame = new Frame([6,4]);
    expect(frame.isSpare()).toBe(true);
  });

  it("indicates when rolls strike", function() {
    frame = new Frame([10,0]);
    expect(frame.isStrike()).toBe(true);
  });

  it("calculates a round score, i.e. 2 normal frames", function() {
    frame = new Frame([5,2]);
    secondFrame = new Frame([4,0]);
    expect(frame.roundScore(secondFrame)).toEqual(7);
  });

  it("calculates a spare over a round", function() {
    frame = new Frame([5,5]);
    secondFrame = new Frame([4,0]);
    expect(frame.roundScore(secondFrame)).toEqual(14);
  });

});
