
const express = require('express');
const app = express();
app.use(express.json());


const arrUsers = [{id:'', user:'', password:'' }];

app.listen(3000,()=>console.log('Servidor levantado en 3000'));


//CREAR USUARIO

app.post('/users',(req,res)=> {
    const {id,user,password} = req.body;
    const users = {id,user,password};
    arrUsers.push(users);
    res.json(users);
})


//PERFIL
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const users1  = arrUsers.find(users1 => movie.id == id);
    res.json(users1);
});

//DELETE

app.delete('/remove/:id', Heros.removeHero);



