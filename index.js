//importações
const express = require("express");
//instanciando
const app = express();
//set { usando o EJS como engine}
app.set('view engine', 'ejs');

//rotas

app.get("/", (req, res) => {
  var nome = "Gustavo Marinho";
  var lang = "JavaScript";
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 8000
  });
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});