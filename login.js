const express = require("express");
const routes = require("./routes/login")
const { error } = require("node:console");
const port = 3000;

const app = express();
app.use(express.json());
app.use(userRoutas);

const usuarios = [];

app.post('/',(req,res) =>{
    const{nome,email,senha} = req.body;
    if(!nome || !email || !senha){
       return res.estatus(400).json({
        error: "todos os campos tem que estar preenchidos !"
       });
    }
    const umemaul = usuarios.find(iemail => iemail === email);
    if(!umemaul){
         res.send("emil já registrado");
    }
    res.status(201).json({mensagem: "usuario registrado com sucesso"});
    usuarios.push(nome,email,senha);
});

app.get('/',(req,res)=> {
    res.render('index')
})

app.post('/login',(req,res) =>{
    const{email,senha} = req.body;
    if(!email || !senha){
        return res.estatus(400).json({
            error : "todos os campos tem que estar prechidos !"
        })
    }
    
})

app.get('/login',(req,res) =>{
    res.send("sejam bem vindos ",{nome,email});
})

app.listen(port,()=>{
    console.log("sevirdor rodando")
});
