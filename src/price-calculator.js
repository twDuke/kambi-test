// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function(
  rules,
  userType,
  productType,
  price,
  publishedDate
) {
  try {
    var accumulatedPriceModifiers = 0;
    for (var i = 0; i < rules.length; i++) {
      var priceModifier = rules[i].getPrizeModifier(
        userType,
        productType,
        price,
        publishedDate
      );
      accumulatedPriceModifiers += priceModifier;
    }
    return price + accumulatedPriceModifiers;
  } catch (ex) {
    console.log(ex);
  }
  return 0;
};