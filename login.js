const express = require("express");
const { error } = require("node:console");
const bodyparser = require('body-parser')
const port = 3000;

const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

const usuarios = [];

app.post('/',(req,res) =>{
    res.render('index')
    const{nome,email,senha} = req.body;
    if(!nome || !email || !senha){
       return res.estatus(400).json({
        error: "todos os campos tem que estar preenchidos !"
       });
    }
    const umemaul = usuarios.find(iemail => iemail === email);
    if(!umemaul){
         res.send("emil já registrado,tente de novo");
         res.render('index');
    }else{
         usuarios.push(nome,email,senha);
        res.render('login'); 
    }   
    
});

app.get('/login',(req,res) =>{
   res.render('Login')
    const{email,senha} = req.body;
    if(!email || !senha){
        return res.estatus(400).json({
            error : "todos os campos tem que estar prechidos !"
        })
    }
    const umemaul = usuarios.find(iemail => iemail === email);
    const umasenha = usuarios.find(isenha => isenha === senha);
    if(!umasenha && !umasenha){
        res.render('')
    }
})

app.get('/login',(req,res) =>{
    res.send("sejam bem vindos ",{nome,email});
})

app.listen(port,()=>{
    console.log("sevirdor rodando")
});
