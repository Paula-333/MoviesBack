
const express = require('express');
const app = express();
//app.use(express.json());


const arrUsers = [{id:1, user:'', password:'' }];
const user = arrUsers.push();

//CREAR USUARIO

app.post('/movies/:id',(req,res)=>{
    const id = req.params;
    const user = req.body;
    const password = req.body;
    let users = arrUsers.filter(user => user.id != id);
    let user0 = {id,user, password};
    users.push(user0);
    res.json(user0);

})

//PERFIL
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const users1  = arrUsers.find(users1 => movie.id == id);
    res.json(users1);
});

//DELETE





