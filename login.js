const express = require("express");
const loginroutas = require("./routes/login");
const { error } = require("node:console");
const app = express();
app.use(express.json());

app.post('',(req,res) =>{
    const{nome,email,senha} = req.body;
    if(!nome,!email,!senha){
       return res.estatus(400).json({
        error: "todos os campos tem que estar preenchidos !"
       });
    }
});

app.post('',(req,res) =>{

})

app.get('',(req,res) =>{

})
