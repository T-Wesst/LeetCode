const expect = chai.expect;

describe("oddOrEven", () => {
  it('should return the string "odd" if a number IS NOT evenly divisible by 2', () => {
    let num = 777;
    let result = oddOrEven(num);
    expect(result).to.eql("odd");
  });

  it('should return the string "even" if a number IS evenly divisible by 2', () => {
    let num = 1002;
    let result = oddOrEven(num);
    expect(result).to.eql("even");
  });
});
