const Product = require("../models/product");

exports.postProducts = (req, res, next) => {
  const productName = req.body.productName;
  const productType = req.body.productType;
  const cost = req.body.cost;
  Product.create({
    productName: productName,
    productType: productType,
    cost: cost,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(201).json({
    message: "product added successfully",
    post: {
      productName: productName,
      productType: productType,
      cost: cost,
    },
  });
};
