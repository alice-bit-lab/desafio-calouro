const express = require("express");
const loginroutas = require("./routes/login");
const { error } = require("node:console");
const app = express();
app.use(express.json());

const usuarios = [];

app.post('',(req,res) =>{
    const{nome,email,senha} = req.body;
    if(!nome || !email || !senha){
       return res.estatus(400).json({
        error: "todos os campos tem que estar preenchidos !"
       });
    }
    if(){}
    
    res.status(201).json({mensagem: "usuario criado com sucesso"});
});

app.post('',(req,res) =>{
    const{email,senha} = req.body;
    if(!email || !senha){
        return req.estatus(400).json({
            error : "todos os campos tem que estar prechidos !"
        })
    }
})

app.get('',(req,res) =>{
    res.send("sejam bem vindos", dados: {nome,email});
})
