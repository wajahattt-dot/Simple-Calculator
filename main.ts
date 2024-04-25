#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select One Of The Operator To Perform Operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//condition statement
if (answer.operator === "Addition") {
    console.log("Your Value is = ", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log("Your Value is = ", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log("Your Value is = ", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log("Your Value is = ", answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please Select Valid Operator");
}