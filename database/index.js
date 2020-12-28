require('dotenv').config()

const mongoose = require('mongoose')
const db = mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })

const plateSchema = new mongoose.Schema({
  plate: String
}, { timestamps: true })

const Plate = mongoose.model('Plate', plateSchema)

const createPlate = (plateNumber) => {
  return new Promise((resolve, reject) => {
    Plate.create({ plate: plateNumber })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

module.exports = {
  createPlate,
}