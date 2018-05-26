// productType, 0 = new product, 1 = old product
function datePrizeRule() {
  var enddateDiscount = -10;
  var ageInDaysToCountAsEnded = 30;

  this.getPrizeModifier = function(
    userType,
    productType,
    price,
    publishedDate
  ) {
    if (productType === 1) {
      return 0;
    }

    return getAgeInDays(publishedDate) >= ageInDaysToCountAsEnded ? enddateDiscount : 0;
  };

  function getAgeInDays(publishedDate) {
    var now = new Date();
    var ageInDays = Math.floor((now - publishedDate) / (1000 * 60 * 60 * 24));
    return ageInDays;
  }
}
