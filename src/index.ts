import { taskList } from './todo';
import * as readlineSync from 'readline-sync';
import chalk from 'chalk';

const myTaskList = new taskList();

function showMenu() {
    const c = console.log
    c(chalk.cyan.bold('\n ---To Do List Menu---'));
    c('1. Add Task');
    c('2. List Tasks');
    c('3. Complete Task');
    c('4. Remove Task');
    c('5. Exit');
}

function addTask() {
    const chore = readlineSync.question(chalk.yellow('Enter New Task : '));
    myTaskList.addTask(chore);
}
function listTasks() {
    myTaskList.listTasks();
}
function completeTask() {
    const index = parseInt(readlineSync.question(chalk.yellow('Enter the task number id you want to complete : ')));
    myTaskList.completeTask(index);
    //console.log(chalk.hex('#fc6a03')('Task Succssesfully complete'));
}

function removeTask() {
    const index = parseInt(readlineSync.question(chalk.yellow('Enter the task number id you want to delete : ')));
    myTaskList.removeTask(index);
    

}



function main() {
    let exit = false;
    while (!exit) {
        showMenu();
        const choice = readlineSync.question(chalk.yellow('Choose an option: '));
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                listTasks();
                break;
            case '3':
                completeTask();
                break;

            case '4':
                removeTask();
                break;
            case '5':

                exit = true;
                console.log(chalk.redBright.bold('Bye'));
                break;

            default:
                console.log(chalk.hex('#fc6a03')('Invalid Choice. please choose again.'));
        }
    }

}

main()