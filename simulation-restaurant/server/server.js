require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , cors = require('cors')
    , axios = require('axios');

    //74C
const app = express();
app.use(cors());
    //74HIJ  76F
app.use(bodyParser.json());

