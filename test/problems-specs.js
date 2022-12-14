const assert = require("assert");
const chai = require("chai");
const { logBetween, printFives, logBetweenStepper } = require("../problems");
const expect = chai.expect;

describe("Problems", () => {
  describe("logBetween(lowNum, highNum)", () => {
    it("should return a new array with every number from lowNum to highNum", () => {
      expect(logBetween(2, 6)).to.eql([2, 3, 4, 5, 6]);
      expect(logBetween(5, 10)).to.eql([5, 6, 7, 8, 9, 10]);
    });
  });
  describe("printFive(max)", () => {
    it("should return a new array with the multiples of 5 that are less than max", () => {
      expect(printFives(30)).to.eql([0, 5, 10, 15, 20, 25]);
      expect(printFives(20)).to.eql([0, 5, 10, 15]);
    });
  });
  describe("logBetweenStepper(minx, max, step)", () => {
    it("should return a new array with numbers between min and max at step intervals", () => {
        expect(logBetweenStepper(1, 10, 2)).to.eql([3,5,7,9])
    });
  });
});
