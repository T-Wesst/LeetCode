const expect = chai.expect;

before(() => {
  window._temp = {};
  window._temp.log = console.log;
  window.console.log = ((...args) => {
    let values = [];

    let log = (args) => {
      values.push(args);
      window._temp.log(args);
    };

    log.calledWith = () => {
      return values;
    };

    return log;
  })();
});

describe("countdown", () => {
  it("log numbers from `num` down to 1", () => {
    let num = 15;

    countdown(num);

    expect(console.log.calledWith()).to.eql([
      15,
      14,
      13,
      12,
      11,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]);
  });
});

after(() => {
  console.log = window._temp.log;
  delete window._temp;
});
