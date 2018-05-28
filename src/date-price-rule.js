// productType, 0 = new product, 1 = old product
function datePrizeRule() {
  var discount = -10;

  this.getPrizeModifier = function(
    userType,
    productType,
    price,
    publishedDate
  ) {
    if (productType === 1) {
      return 0;
    }

    return publishedToday(publishedDate) ? discount : 0;
  };

  function publishedToday(publishedDate) {
    var now = new Date();
    return now.toDateString() === publishedDate.toDateString();
  }
}
