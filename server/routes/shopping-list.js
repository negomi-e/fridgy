const express = require('express')
const route = express.Router()
const ProductSL = require('../models/ProductsSL')

route.get('/:userId', async function (req, res, next) {
  try {
    if (!req.params.userId) throw 'cant get userId'
    const allProductsSL = await ProductSL.find({
      userID: req.params.userId
    })
    res.json(allProductsSL)
  } catch (error) {
    res.json('cant find products')
  }
  res.json();
});

route.post('/', async function (req, res) {
  const { text, userId } = req.body
  try {
    if (!text) throw 'label not specified'
    if (!userId) throw 'cant get userId'
    const newProductSL = await new ProductSL({
      userID: userId,
      label: text,
      quantity: 2,
      status: false,
    }).save()
    res.json({
      message: 'success',
      createdProduct: newProductSL,
    })
  } catch (error) {
    res.json(error)
  }
})

route.delete('/:id', async function (req, res) {
  const { id } = req.params
  try {
    await ProductSL.findByIdAndRemove(id)
    res.json({
      message: 'success',
    })
  } catch (error) {
    res.json(error.message)
  }
})

route.delete('/delete/all', async function (req, res) {
  try {
    await ProductSL.collection.drop();
    res.json({
      message: 'success'
    })
  } catch (error) {
    res.json(error.message)
  }

})

route.put('/:id', async function (req, res) {
  const { id } = req.params
  try {
    const product = await ProductSL.findById(id)
    product.status = !product.status
    product.save()
    res.json({
      message: 'success'
    })
  } catch (error) {
    res.json({
      message: 'cant change status',
    })
  }
})



module.exports = route
