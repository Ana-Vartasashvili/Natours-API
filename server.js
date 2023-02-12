const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((connection) => console.log(connection.connections))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App running on port ${port}...`))
