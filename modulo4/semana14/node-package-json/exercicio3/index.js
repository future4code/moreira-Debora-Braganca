//Exercício 3

const fs = require('fs')

const listaDeTarefas = ["Lavar a louça", "Varrer a casa"]
const novaTarefa = process.argv[2]

fs.appendFile('arrayTarefas.txt', `, ${novaTarefa}`, function (err) {
    if (err) throw err;

  });

fs.readFile('arrayTarefas.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log("\x1b[33m", data);
  });