const express = require('express')
const route = express.Router()
const Product = require('../models/products')

route.get('/:id', async function(req,res){
        // return res.json('i am here finding lists');
        
        try{
            console.log('HIT SERVER SIDE');
            
            const {id } = req.params
            const fridgeitems = await Product.find({userID: id})
            fridgeitems.sort((a,b) => a.expiryDate - b.expiryDate);
            const tags = fridgeitems.slice(0,6)


        if (fridgeitems.length > 0) {
            // let array = fridgeitems.items
            // console.log('array', fridgeitems);
            fridgeitems.forEach((item) => {
                let exp = new Date(item.expiryDate)
                let current = new Date()
                //console.log(exp);
                // console.log(new Date());

                let differenceTIME =  exp - current 
                let differenceDay = Math.floor(differenceTIME / (1000 * 3600 * 24))
                item.dayRemaining = differenceDay; 
                return;
                
            })
            
        }
        // console.log('daysss', fridgeitems);
            
            const fruit = fridgeitems.filter((product)=>{ return product.category == 'Fruit'})
            const meat = fridgeitems.filter((product)=>{ return product.category == 'Meat'})
            const dairy = fridgeitems.filter((product)=>{ return product.category == 'Dairy'})

    
            
            const categories = {'Fruit': fruit, 'Meat': meat, 'Dairy': dairy}
            // await fridgeitems.save()
            res.json({list: categories, tags: tags});
            }catch(err){
            res.send(404).text('No items')
            }
    })

//delete item from fridge
route.delete('/delete/:id', async (req,res)=>{
    
    await Product.findOneAndDelete({'_id': req.params.id});
    const fridgeitems = await Product.find()
    console.log(fridgeitems)
    res.json({success: true})
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
        label: req.body.item.label,
        expiryDate: req.body.item.expiryDate,
        category: req.body.item.category,
        dayRemaining: req.body.item.dayRemaining,
    })

    await newitem.save()
    res.json()
})


//add item from fridge to shopping list
//const Shopping = require('../models/shopping')
// route.post('/addshoppinglist/:id', async (req,res)=>{
//     let item = await Product.findbyId({'_id':req.params.id})


//     let newshoppingitem = await new Shopping({
//         userID: item.userID,
//         label: item.label,
//         categories: item.label
//     })

//     await newshoppingitem.save()
//     res.json()
// })



module.exports = route
