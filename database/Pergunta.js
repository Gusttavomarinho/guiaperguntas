//importando
const Sequelize = require("sequelize");
const connection = require("./database");
//arquivo que sera o model da Pergunta

const Pergunta = connection.define("pergunta", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// o force false e pra nao recriar a tabela
Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela Pergunta Criada!");
});
