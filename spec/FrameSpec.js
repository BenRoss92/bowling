/*jslint node: true */

"use strict";

describe("Frame", function() {

  var frame;

  it("calculates total of two rolls", function() {
    frame = new Frame([6,3]);
    console.log(frame.total());
    expect(frame.total()).toEqual(9);
  });

});
