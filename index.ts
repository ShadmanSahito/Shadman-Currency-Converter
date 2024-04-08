import inquirer from "inquirer";
import chalk from "chalk"
// print message
console.log(chalk.bgGreenBright.bold `This is a Simple CLI Currency Converter`);

// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1,       // Base Currency
    "EUR": 0.92,    // European Currency
    "AED": 3.67,    // United Arab Emirates Dirham
    "SAR": 3.75,    // Saudi Arabia Riyal
    "CAD": 1.36,    // Canadian Dollar
    "AUD": 1.51,    // Australian Dollar
    "PKR": 278.40,   // Pakistani Rupees
    // Add more currencies and their exchange rates here
}

// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency to convert from:",
        choices: ["USD", "EUR", "AED","SAR", "CAD", "AUD","PKR"]
        
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the Currency to convert into :",
        choices: ["USD", "EUR", "AED","SAR", "CAD", "AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: " Select your Conversion Amount: "
    }
]);
  // Perform currency conversion by using formula
  let  from_amount = exchange_rate[user_answer.from_currency];
  let to_amount = exchange_rate[user_answer.to_currency];
  let amount = user_answer.amount

  //formula of conversion
  let base_amount = amount / from_amount
  let converted_amount = base_amount * to_amount

  // display the current amount
  console.log(`Converted Amount = ${converted_amount}`);