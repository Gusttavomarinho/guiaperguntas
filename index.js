//importações
const express = require("express");
//instanciando
const app = express();
//set { usando o EJS como engine}
app.set("view engine", "ejs");
app.use(express.static("public")); //definindo a pasta de arquivos estatico

//rotas

app.get("/", (req, res) => {
  res.render("index");
});

//criando o server da aplicação
app.listen(4000, () => {
  console.log("App rodando");
});
