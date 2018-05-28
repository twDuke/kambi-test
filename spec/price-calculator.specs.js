describe("price calculator", function() {
  it("should calc price right mock rules", function() {
    var userType = 0;
    var productType = 0;
    var price = 59;
    var publishedDate = new Date();

    var fakeRule1 = function() {
      this.getPrizeModifier = function() {
        return -10;
      };
    };
    var fakeRule2 = function() {
      this.getPrizeModifier = function() {
        return -20;
      };
    };
    var fakeRule3 = function() {
      this.getPrizeModifier = function() {
        return 5;
      };
    };
    var rules = [new fakeRule1(), new fakeRule2(), new fakeRule3()];

    var expected = 34;
    var actual = calculatePrice(
      rules,
      userType,
      productType,
      price,
      publishedDate
    );
    expect(expected).to.equal(actual);
  });
  
  it("should calc price right real rules", function() {
    var userType = 0;
    var productType = 0;
    var price = 1;
    var publishedDate = new Date();

    var rules = [];
    rules.push(new productTypePrizeRule());
    rules.push(new userTypePrizeRule());
    rules.push(new datePrizeRule());

    var expected = 16;

    var actual = calculatePrice(
      rules,
      userType,
      productType,
      price,
      publishedDate
    );
    expect(expected).to.equal(actual);
  });
});
