#! /usr/bin/env node

import inquirer from 'inquirer';

import promptSync from 'prompt-sync';
const prompt = promptSync()

import chalk from 'chalk';


console.log(chalk.bgGreen.italic.bold('\n ********************* Welcom to the To DO List ******************'));

let myList: string[] = [];

while(true){


const answer = await inquirer.prompt([
    {
        type: "list",
        name: "query",
        message: "What do you want to do in To Do Application: ",
        choices: ['view List','Add Items in List','Delete Items','Quit']
    }
]);

if(answer.query === 'view List'){
    console.log(chalk.bgMagenta.italic.bold('\n******************** Here is the List *********************'));
    
    for(let item of myList){
  
     console.log(chalk.blueBright.italic.bold(`${myList.indexOf(item)}: ${item.toUpperCase()}`));
    }
    if(myList[0] === undefined){
        console.log(chalk.blueBright.bold(`\n                   No Entries                `));  
    }
    console.log(chalk.bgMagenta('\n************************************************************'));
    
} else if(answer.query === 'Add Items in List'){
    let input = prompt('Enter your To Do Item here: ');
    myList.push(input); 
    console.log(chalk.greenBright.bold(`\n '${input}' , Added in tha List`));
      
} else if(answer.query === 'Delete Items'){
    console.log(chalk.bgCyanBright.black.italic.bold('\n****************** Delete Items *************************'));
    console.log(chalk.greenBright.bold('\n Here is your List: ' ));
    console.log(myList);
    console.log(chalk.bgBlueBright.italic.bold('\n********************* My New List ***************************'));
    
    let deleteIndex = Number(prompt('Enter Index number of item that you want to delete: '));
    console.log(chalk.greenBright.bold(`${myList[deleteIndex]} , Now Deleted in tha List`));
    myList.splice(deleteIndex, 1);
    console.log(chalk.bgCyanBright.black('\n******************************************************************'));
    
} else{
    console.log(chalk.bgYellow.black.italic.bold('\n******************* Thanks for using App. Good Bye ******************'));   
    break;
}
};
