const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const users = require('./routes/users');
const config = require('./config/config');

const app = express();
mongoose.connect(`mongodb://${config.DB_SERVER}/${config.DB_NAME}`);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);
app.use('/user', users);

app.listen(config.PORT, () => console.log('Example app listening on port 3000!'));
