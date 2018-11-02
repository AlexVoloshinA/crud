const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const {User} = require('./models');

app.get('/', async (req,res) => {
    const user = await User.findAll();
    res.json(user);
});



app.post('/new',  async (req,res) => {
    console.log('ee');
    let body = req.body;
    console.log(body);
    const user = await User.create(body);
    console.log(user);
    res.json(user);
});

app.put('/update/:id',  async (req,res) => {
    const id = req.params.id;
    
    User.update(req.body, {where: {id}})
    .then(updatedUser => res.json(updatedUser));
    //console.log(user);
    //res.json(user);
});

app.delete('/delete/:id', (req,res) => {
    let id = req.params.id;
    User.destroy({
        where: {id}
    })
    .then(deleted => res.json(deleted));
});


app.listen(4000, () => {
    console.log(`Listening to the 4000 port...`);
});