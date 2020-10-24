
const express = require('express');
const app = express();
app.use(express.json());


let users = [{
    name:'',
    password:''
}]

app.listen(3000,()=>console.log('Servidor levantado en 3000'));

//CREAR USUARIO

app.post('/users',(req,res)=> {
    const {name, password} = req.body;
    const users1 = {name, password};
    users.push(users1);
    res.json(users1);
})
