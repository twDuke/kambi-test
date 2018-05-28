describe("date price rule", function() {
  it("Given product with type NEW and NOT published today do NOT GIVE discount", function() {
    var userType = 0;
    var productType = 0;
    var price = 1;
    var publishedDate = new Date(2018, 1, 1);

    var expected = 0;

    var rule = new datePrizeRule();
    var actual = rule.getPrizeModifier(
      userType,
      productType,
      price,
      publishedDate
    );

    expect(expected).to.equal(actual);
  });

  it("Given product with type NEW that is published today GIVE discount", function() {
    var userType = 0;
    var productType = 0;
    var price = 1;
    var publishedDate = new Date();

    var expected = -10;

    var rule = new datePrizeRule();
    var actual = rule.getPrizeModifier(
      userType,
      productType,
      price,
      publishedDate
    );

    expect(expected).to.equal(actual);
  });

  it("Given product with type OLD that is published today do NOT GIVE discount", function() {
    var userType = 0;
    var productType = 1;
    var price = 1;
    var publishedDate = new Date();

    var expected = 0;

    var rule = new datePrizeRule();
    var actual = rule.getPrizeModifier(
      userType,
      productType,
      price,
      publishedDate
    );

    expect(expected).to.equal(actual);
  });
});
