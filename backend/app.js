require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const sessionConfig = require('./config/session');

const app = express();

const port = process.env.PORT || 5000;

const apiRoure = require('./Routes/apiRoute');
const topicRouter = require('./Routes/topicRouter');

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use('/api', apiRoure);
app.use('/api', topicRouter);

app.listen(port, () => {
  console.log('Тихо шуршит');
});
