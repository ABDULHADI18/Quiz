#! /usr/bin/env node    

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.white("\n \t<<==="),chalk.blue.bold("WELCOME TO THE QUIZ"),chalk.white("===>>\n"));

const question1 = await inquirer.prompt([
  {
    type: "list",
    name: "q1",
    message: chalk.yellow.italic('\nWhat are the three main "simple types" in Typescript?'),
    choices: [
      "object,string,number",
      "object,array,symbol",
      "string,number,boolean",
    ],
  },
  {
    type: "list",
    name: "q2",
    message: chalk.yellow.italic("\nWhat is Typescript primarily used for?"),
    choices: ["memory management", "dynamic typing", "static typing"],
  },
  {
    type: "list",
    name: "q3",
    message: chalk.yellow.italic("\nWhich of the following is NOT a valid Typescript data type?"),
    choices: ["void", "any", "dynamic"],
  },
  {
    type: "list",
    name: "q4",
    message: chalk.yellow.italic("\nHow do you denote a variable as readonly in Typescript?"),
    choices: ["const", "static", "readonly"],
  },
  {
    type: "list",
    name: "q5",
    message: chalk.yellow.italic("\nWhat is a union type in Typescript?"),
    choices: [
      "a type that can be one of several types",
      "a type that can be any value",
      "a type that can be an object",
    ],
  },
  {
    type: "list",
    name: "q6",
    message:chalk.yellow.italic("\nHow do you declare a variable that can be either a string or null in Typescript?"),
    choices: [
      "let variable:string || null;",
      "let variable:string | null;",
      "let variable:string && null;",
    ],
  },
]);

if (question1.q1 === "string,number,boolean") {
  console.log("1) Correct 👍🏻");
} else {
  console.log("1) Wrong ❌");
}
if (question1.q2 === "static typing") {
  console.log("2) Correct 👍🏻");
} else {
  console.log("2) Wrong ❌");
}

if (question1.q3 === "dynamic") {
  console.log("3) Correct 👍🏻");
} else {
  console.log("3) Wrong ❌");
}

if (question1.q4 === "readonly") {
  console.log("4) Correct 👍🏻");
} else {
  console.log("4) Wrong ❌");
}

if (question1.q5 === "a type that can be one of several types") {
  console.log("5) Correct 👍🏻");
} else {
  console.log("5) Wrong ❌");
}

if (question1.q6 === "let variable:string | null;") {
  console.log("6) Correct 👍🏻");
} else {
  console.log("6) Wrong ❌");
}

const playAgain = await inquirer.prompt([
    {
        type: "list",
        name: "playAgain",
        message: chalk.yellow.italic("\nWould you like to participate in a JavaScript quiz?"),
        choices: [
            "Yes",
            "No"
        ]
    }
]);

if (playAgain.playAgain === "Yes") {
    console.log(chalk.green("\nGreat!"));

    const question2 = await inquirer.prompt([
        {
            type: "list",
            name: "q1",
            message: chalk.yellow.italic("\nWhat is the name of the JavaScript library that is used to create user interfaces?"),
            choices: [
                "React",
                "Angular",
                "Vue",
            ],
        },
        {
            type: "list",
            name: "q2",
            message: chalk.yellow.italic("\nIf you type the following code in the console window, what result will you get?(3 > 2 > 1 === false;)"),
            choices: [
                "false",
                "true",
            ],
        },
        {
            type: "list",
            name: "q3",
            message: chalk.yellow.italic("\n JavaScript is a ___ side programming language."),
            choices: [
                " Client",
                "Server",
                "Both"
            ],
        },
        {
            type: "list",
            name: "q4",
            message: chalk.yellow.italic("\nWhich of the following will write the message “Hello DataFlair!” in an alert box?"),
            choices: [
                " alert(“Hello DataFlair!”);",
                " msgAlert(“Hello DataFlair!”);",
                " alert(Hello DataFlair!);"
            ],
        },
        {
            type: "list",
            name: "q5",
            message: chalk.yellow.italic("\nWhich JavaScript label catches all the values, except for the ones specified?"),
            choices: [
                "default",
                "label",
                "try"
            ],
        },
        {
            type: "list",
            name: "q6",
            message: chalk.yellow.italic("\nWhich are the correct “if” statements to execute certain code if “x” is equal to 2?"),
            choices: [
                " if(x = 2)",
                " if(x == 2)",
                " if(x 2)"
            ],
        }
]);        

if (question2.q1 ===  "React") {
    console.log("1) Correct 👍🏻");
  } else {
    console.log("1) Wrong ❌");
  }
  if (question2.q2 === "true") {
    console.log("2) Correct 👍🏻");
  } else {
    console.log("2) Wrong ❌");
  }
  
  if (question2.q3 === "Both") {
    console.log("3) Correct 👍🏻");
  } else {
    console.log("3) Wrong ❌");
  }
  
  if (question2.q4 === " alert(“Hello DataFlair!”);") {
    console.log("4) Correct 👍🏻");
  } else {
    console.log("4) Wrong ❌");
  }
  
  if (question2.q5 === "default") {
    console.log("5) Correct 👍🏻");
  } else {
    console.log("5) Wrong ❌");
  }
  
  if (question2.q6 === " if(x == 2)") {
    console.log("6) Correct 👍🏻");
  } else {
    console.log("6) Wrong ❌");
  }

} else {}
    console.log("\n***************",chalk.red.bold("THANK YOU FOR PLAYING QUIZ"),"****************");
