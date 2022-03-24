//Exercício 2
const op = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const getResult = (num1, num2) => {
    if(op === "add"){
        return num1 + num2
    } else if (op === "sub"){
        return num1 - num2
    } else if (op === "mult") {
        return num1 * num2
    } else if (op === "div"){
        return num1 / num2
    } else {
        return "Selecione uma operação"
    }
}
console.log(getResult(num1, num2))