
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const openingHoursController = require('./controllers/openingHours')

const app = express()

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))
app.use(helmet())

app.use('/', openingHoursController)

app.listen('3001', () => {
  console.log('API server started on 3001')
})