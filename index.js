const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Asad', 'Moin', 'Sadab', 'Susmita', 'Sohana', 'Sabana'];

app.get('/', (req, res) => {

    const fruit = {
        products: 'apple',
        price: '10'
    }
    res.send(fruit);
})

// app.get('/products/phone', (req, res) => {
//     const items = {
//         name: 'Apple',
//         model: '10x',
//         price: 1000,
//     }
//     res.send(items);
// })


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})

// Post
app.post('/addUser', (req, res) => {

    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})



app.listen(4200, () => console.log('Listening to port 4200'));