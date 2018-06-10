const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const config = require('./config/config');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);

app.listen(config.PORT, () => console.log('Example app listening on port 3000!'));
