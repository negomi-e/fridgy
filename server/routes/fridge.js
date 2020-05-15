const express = require('express')
const route = express.Router()
const Product = require('../models/products')

//MAIN PAGE

//1. render main fridge
//2. delete expired product from fridge
//3. add product to fridge
//4. 

route.get('/:id', async function(req,res){
        // return res.json('i am here finding lists');
        
        try{
            console.log('HIT SERVER SIDE');
            
            const {id } = req.params
            const fridgeitems = await Product.find({userID: id})
            
            console.log('array or object', fridgeitems);
            
            res.json(fridgeitems);
            }catch(err){
            res.send(404).text('No items')
            }
    })
    

//toggle to shopping list cart
route.put('/shoppinglist/:id', async (req,res)=>{
    try{
            let item = await Product.findbyId({'_id':req.params.id})
            item.shoppinglist = !item.shoppinglist
            await item.save()
            res.json()
    }catch(err){
        res.send(404).text('Cant toggle')
        }
})

//edit item info
route.put('/change/:id', async (req,res)=>{
    try{
            const {label, expiryDate } = req.body
            let item = await Product.findbyId({'_id':req.params.id})
            item.label = label
            item.expiryDate = expiryDate
            await item.save()
            res.json()
    }catch(err){
        res.send(404).text('Cant update')
        }
})


//additem to fridge
route.post('/add', async (req,res)=>{


    let newitem = await new Product({
        userID: req.body.userID,
        label: req.body.item.body

    })

    await newitem.save()
    res.json()
})


//delete item from fridge
route.delete('/delete/:id', async (req,res)=>{
    await Product.deleteOne({'_id': req.params.id});
    res.json()
})

module.exports = route
