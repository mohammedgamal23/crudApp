const {connectDB} = require('./src/db/connection');
connectDB()


const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const userRoute = require('./src/routes/user.route')

app.use('/api', userRoute)


app.get('/', (req, res) => {
  res.json({message: "Welcome to BASIC CRUD USER application."})
})

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`)
})
