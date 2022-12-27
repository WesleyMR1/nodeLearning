const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso");
});

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

// adicionar no arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "HELLO WORLD!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("Adicionado");
  }
);

//ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);

//pode acontecer de o node não terminar uma tarefa e passar para outra(não ficar travado em uma)
