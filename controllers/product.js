exports.postProducts = (req, res, next) => {
  const productName = req.body.productName;
  const productType = req.body.productType;
  const cost = req.body.cost;
  res.status(201).json({
    message: "product added successfully",
    post: {
      productName: productName,
      productType: productType,
      cost: cost,
    }
  })
};
