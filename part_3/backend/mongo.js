const mongoose = require('mongoose')
require('dotenv').config()

if (process.argv.length < 4) {
  console.log('give the necessary arguments to create a new record of a person')
  process.exit(1)
}

const name = process.argv[2]
const number = process.argv[3]

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url, {
  serverSelectionTimeoutMS: 1000000000,
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number,
})

person.save().then(() => {
  console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})
