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

//75C
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})
// 74D-3       //76C                 74M
app.post('/api/register-user', (req, res) => {
    const { username , password } = req.body
    const db = app.get('db');
    //70K
    db.create_user([
        username,
        password
    ]).then( resp => {
            //74L
        res.status(200).send('User Registered')
    })
})
//74D-2
app.put('/api/add-food', (req,res) => {
    console.log(req.body)
    const { name, price, text } = req.body
    const db = app.get('db');
    db.add_item([
        name,
        price,
        text
    ]).then(resp => {
        res.status(200).send('Item Added')
    })
})
//74D-1
app.get('/api/get-food', (req,res) => {
    const db = app.get('db');
    db.get_food([]).then( resp => {
        res.status(200).send(resp)
    })
})
//74D-4
app.delete('/api/delete-food/:id', async (req,res) => {
    console.log(req.params.id)
    const db = app.get('db');
                                //76D
    await db.delete_food([req.params.id]).then(resp => {})
    await db.get_food([]).then( resp => {
        res.status(200).send(resp)
    })
})
app.get('/api/me', (req,res) => {
    const db = app.get('db');
    db.get_user_info([]).then(resp => {
        res.status(200).send(resp)
    })
})


                //74E
app.use( express.static( `${__dirname}/../build` ) );

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`I'm listening on port: ${SERVER_PORT}`)
});