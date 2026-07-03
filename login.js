const express = require("express");
const { error } = require("node:console");
const bodyparser = require('body-parser');
const path = require('path');
const port = 3000;

const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

const usuarios = [];

app.post('/.js',(req,res) =>{
    res.render('index.ejs');
    const{nome,email,senha} = req.body;
    if(!nome || !email || !senha){
       return res.estatus(400).json({
        error: "todos os campos tem que estar preenchidos !"
       });
    }
    const umemaul = usuarios.find(iemail => iemail === email);
    if(!umemaul){
         res.send("emil já registrado,tente de novo");
         res.render('index.ejs');
    }else{
         usuarios.push(nome,email,senha);
        res.render('login.ejs'); 
    }   
    
});

app.get('/.js',(res,req) =>{
    res.render('index.ejs');
})

app.get('/login.js',(req,res) =>{
   res.render('Login.ejs')
    const{email,senha} = req.body;
    if(!email || !senha){
        return res.estatus(400).json({
            error : "todos os campos tem que estar prechidos !"
        })
    }
    const umemaul = usuarios.find(iemail => iemail === email);
    const umasenha = usuarios.find(isenha => isenha === senha);
    if(!umasenha && !umasenha){
        res.send("login concluido");
    }
})

app.get('/login.js',(req,res) =>{
    res.send("sejam bem vindos ",{nome,email});
})

app.listen(port,()=>{
    console.log("sevirdor rodando")
});
