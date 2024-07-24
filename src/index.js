const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000
const hdb = require('express-handlebars')

app.use(express.static(path.join(__dirname, 'public')))

// Template Engine
app.engine('hdb', hdb.engine({extname: '.hdb'}));
app.set('view engine', 'hdb');
app.set('views', path.join(__dirname, 'resources/views'));
// HTTP Logger
app.use(morgan('combined'))
app.get('/', (req, res) => {
  res.render('home');
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
