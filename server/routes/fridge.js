const express = require('express')
const route = express.Router()
const Product = require('../models/products')

route.get('/:id', async function (req, res) {
  // return res.json('i am here finding lists');

  try {
    const { id } = req.params
    const fridgeitems = await Product.find({ userID: id })
    fridgeitems.sort((a, b) => a.expiryDate - b.expiryDate);
    const closeToExpire = fridgeitems.slice(0, 5)
    //Create tags for recipts
    const tags = closeToExpire.map(item => { return item.label })

    if (fridgeitems.length > 0) {
      fridgeitems.forEach((item) => {
        let exp = new Date(item.expiryDate)
        let current = new Date()
        let differenceTIME = exp - current
        let differenceDay = Math.floor(differenceTIME / (1000 * 3600 * 24))
        item.dayRemaining = differenceDay;
        return;
      })
    }
    console.log('alll products>>>>>>', allProducts);
    
    res.json({
      message: 'success',
      allProducts: fridgeitems,
      tags: tags,
    });

  } catch (err) {
    res.status(404).text('No items')
  }
})

//delete item from fridge
route.delete('/delete/:id', async (req, res) => {
  try {
    await Product.findOneAndDelete({ '_id': req.params.id });
    res.json({ success: 'success' })
  } catch (error) {
    res.json(error.message)
  }
})

//edit item info
route.put('/update/:id', async (req, res) => {
  try {
    const { label, expiryDate, category } = req.body
    let item = await Product.findbyId({ '_id': req.params.id })
    item.label = label
    item.expiryDate = expiryDate
    item.category = category
    await item.save()
    res.json({message: 'success'})
  } catch (err) {
    res.send(404).text('Cant update')
  }
})


//additem to fridge
route.post('/add', async (req, res) => {

  try {
    const { userId, label, expiryDate, category, dayRemaining } = req.body
    //if (!userId) throw 'not user id'
    let newItem = await new Product({
      userID: userId,
      label,
      expiryDate: new Date(expiryDate),
      category,
      dayRemaining,
    }).save()

    res.json({
      message: 'success',
      newItem,
    })

  } catch (error) {
    res.json(error.message)
  }
})




module.exports = route
