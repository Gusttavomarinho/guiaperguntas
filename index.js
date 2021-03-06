//importações
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//database
connection
  .authenticate()
  .then(() => {
    console.log("Conexao feita com o banco de dados");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

//instanciando
const app = express();
//set { usando o EJS como engine}
app.set("view engine", "ejs");
app.use(express.static("public")); //definindo a pasta de arquivos estatico
//configurando o bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});

//acredito que na nova versao do express nao precise mais do body-parser vou tirar duvida depois
