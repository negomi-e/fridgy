# Fridgy

![mockup] (https://github.com/negomi-e/fridgy/blob/master/smartmockups_kcn92qns.png)

Fridgy is an application to help track your products in your fridge by thier expiry date. You can both manually add and scan new products. You can create an interactive shopping list and easily add all expired and used products to it. Finally, it helps suggest recipes that use products in your fridge.

Deployed in Heroku:  https://fridgy-2020.herokuapp.com/

# Main Features

The Fridge
    - Add, store and monitor all the products in your fridge.
    - Import and scan photo file to read product type and printed expiry date
    - Updates expiry date and track what is in your fridge.

Personal Shopping List
    -Create a dynamic shopping list to replenish used up food items or the necessary ingredients for your next meal
    
Recipe Generator
    -Use an API to generate recipes using your ingredients close to expiry and inputted items

### Tech

Fridgy uses a number of open source projects and JavaScripts frameworks and libraries:

* React JS
* Redux
* node.js
* Express
* Materialize UI
* CSS
* HTML
* MongoDB
* Mongoose


### Installation

Fridgy requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd fridgy
$ npm install
```

For production environments in .env file in backend folder

```sh
$ MONGO_URI= your mongodb URI with username and password
$ GOOGLE_APPLICATION_CREDENTIALS=route to your secret google auth json file
```

Running in the both folders

```sh
$ npm start
```

### Team

* [Imogen Eddings]
* [Alexey Aleshnikov]
* [Dmitry Pak]
* [Konstantin Samolevich]


### Development

   -Develop on React Native to make it mobile friendly
   
   -Connect shopping list feature to online food shop that delivers


  [Imogen Eddings]: <https://github.com/negomi-e/>
  [Alexey Aleshnikov]: <https://github.com/AV-Aleksey>
  [Dmitry Pak]: <https://github.com/pakdmitry88>
  [Konstantin Samolevich]: <https://github.com/samolevich>
