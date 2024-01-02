require('dotenv').config()
var port = process.env.PORT || 4000;
const express = require('express')
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orders')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/orders', orderRoutes)

app.get("/", (req,res) =>{
  res.send('this is TariTari`s backend server');
  
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(port, () => {
      console.log('listening for requests on port', port)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
  ///