//importações
const express = require("express");
//instanciando
const app = express();
//set { usando o EJS como engine}
app.set('view engine', 'ejs');

//rotas

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site!");
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});