//importações
const express = require("express");
//instanciando
const app = express();
//set { usando o EJS como engine}
app.set("view engine", "ejs");

//rotas

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 10000,
    msg: exibirMsg,
  });
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});
