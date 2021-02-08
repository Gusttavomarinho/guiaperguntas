//importações
//const express = require("express");
//instanciando
//const app = express();
//set { usando o EJS como engine}
app.set("view engine", "ejs");
app.use(express.static("public")); //definindo a pasta de arquivos estatico

//rotas

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;
  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-Cola", preco: 5.0 },
    { nome: "Leite", preco: 1.45 },
    { nome: "Cerveja", preco: 4.0 },
    { nome: "Carne", preco: 45.0 },
  ];

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 10000,
    msg: exibirMsg,
    produtos: produtos,
  });
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});
