const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.11.12canaryNotOk')
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) // eslint-disable-line no-console
})
