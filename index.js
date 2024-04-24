#! /usr/bin/Node
import inquirer from "inquirer";
// Asking questions from user through inquirer
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number ", type: "number", name: "secondNumber" },
    {
        message: "Select an Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subatraction", "Multiplication", "Division"],
    },
]);
//condition statement
if (answer.operator === "Addition") {
    console.log("Your Value is = ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Value is = ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Value is = ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your Value is = ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
