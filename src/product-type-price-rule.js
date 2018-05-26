// productType, 0 = new product, 1 = old product
function productTypePrizeRule() {
  var oldProductModifier = 35;
  var newProductModifier = 25;

  this.getPrizeModifier = function(
    userType,
    productType,
    price,
    publishedDate
  ) {
    return productType === 0 ? newProductModifier : oldProductModifier;
  };
}
