Products = new Mongo.Collection("products");

  Products.featured = () => {
    const featuredSkus = ['honeymoon-mars', 'johnny-liftoff', 'one-way-reentry', "your-own-crater", "valles-marineris-weekend", "moon-races"];
    return Products.find({sku : {$in : featuredSkus}},
    {fields : {inventory : false, cost : false}});
  };

  Products.allow({
    update : (userid, product) => {
      return isAdmin();
    },
    insert : (userid, product) => {
      return isAdmin();
    },
    remove : (userid, product) => {
      return isAdmin();
    }
  });