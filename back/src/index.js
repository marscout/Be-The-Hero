const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const app = express();

app.use(cors({}));
app.use(express.json());//Informa que está utilizando JSON para parametros
app.use(routes)

app.listen(3333);