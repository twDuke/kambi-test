// userType 1 == company, 0 == regular
function userTypePrizeRule() {
  var companyDiscount = -5;

  this.getPrizeModifier = function(
    userType,
    productType,
    price,
    publishedDate
  ) {
    return userType === 1 ? companyDiscount : 0;
  };
}
