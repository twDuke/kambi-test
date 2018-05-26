// rules should be constructed elsewhere and passed to the calculator so that the calculator is 
// agnostic to what rule type it has. Also making testing easier as you can pass rules that you want during test.
// Constructing here for simplicity.
var rules = [];
// rule data could be retreied from config/db etc and passed in to each rule. 
// as long as a rule defines the getPrizeModifier interface, the rule can do what it wants, 
// aggregate several if needed. 
rules.push(new productTypePrizeRule());
rules.push(new userTypePrizeRule());
// didn't understand the original published date logic... Made somthing up giving discount if older than X.
rules.push(new datePrizeRule());


// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function(userType, productType, price, publishedDate) {
  try {
    var accumulatedPriceModifiers = 0;
    for (var i = 0; i < rules.length; i++) {
      accumulatedPriceModifiers = rules[i].getPrizeModifier(
        userType,
        productType,
        price,
        publishedDate
      );
    }
    return price + accumulatedPriceModifiers;
  } catch (ex) {
    console.log(ex);
  }
  return 0;
};
var calculatePriceOld = function(userType, productType, price, publishedDate) {
  try {
    switch (userType) {
      case 0: // normal
        if (productType == 0) {
          // new product
          var enddateDiscount = 0;
          if (publishedDate.toDateString() == new Date().toDateString())
            enddateDiscount = 10;

          return price + 25 - enddateDiscount;
        } else if (productType == 1) {
          // old product
          return price + 35 - 0;
        }
        break;
      case 1: // company
        if (productType == 0) {
          // new product
          if (publishedDate.toDateString() === new Date().toDateString()) {
            return price + 25 - 15; // Enddate discount and company discount
          }

          return price + 25 - 5; // Only company discount
        } else if (productType == 1) {
          // old product
          return price + 35 - 5;
        }
        break;
    }
  } catch (ex) {
    console.log(ex);
  }
  return 0;
};
