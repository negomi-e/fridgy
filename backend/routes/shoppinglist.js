const express = require('express')
const route = express.Router()
const Product = require('../models/products')

//SHOPPINGLIST PAGE

//1. render shopping list
//2. edit shopping list
//3. add product to shopping list

route.route('/')
    .get(async function(req,res){
        try{
            const fridgeitems = await Product.findAll()
            res.json(fridgeitems);
            }catch(err){
            res.send(404).text('No images')
            }
    })

//toggle to shopping list cart
route.put('/change/:id', async (req,res)=>{
            let item = await Product.findbyId(req.params.id)
            item.shoppinglist = !item.shoppinglist
            await item.save()

            res.json()
        })

this.state ={
    label: 'Frog',

}

//  fetch('https://localhost:3000/add', {
//         method: 'POST',
//         body: JSON.stringify{
//             userID: state.userid,
//             label: this.state.label,

//         }
//  })    

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

