const express = require('express')
const app = express()
const port = 3000

{
  id = "csh",
  pw = "1111"
}

app.get('/', (req, res) => {
  res.send('Hello World!' + id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})