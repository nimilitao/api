const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const loadJson = (filepath, callback) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      callback(err, null)
      return
    }
    const jsonStr = JSON.stringify(JSON.parse(data), null, 2)
    callback(null, jsonStr)
  })
}

app.get('/receitas', (_, res) => {
  const dataFilePath = 'data.json'
  loadJson(dataFilePath, (err, jsonStr) => {
    if (err) {
      res.status(500).send('Erro ao carregar JSON')
      return
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(jsonStr)
  })
})

module.exports = app
