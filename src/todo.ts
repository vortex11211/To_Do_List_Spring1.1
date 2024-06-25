import chalk from 'chalk'
export interface Chore {
    id: number;
    task: string;
    completed: boolean;
}

export class taskList {
    private tasks: Chore[] = [];
    private index: number = 1;


    addTask(task: string): void {
        const activity: Chore = {
            id: this.index++,
            task,
            completed: false
        };
        this.tasks.push(activity);
        console.log(chalk.hex('#fc6a03')(`Task: "${task}"`));
        console.log(chalk.green.bold('Successfully added'))
    }
    listTasks(): void {
        console.log(chalk.green.bold('---To Do List---'));
        if (this.tasks.length === 0) {
            console.log(chalk.hex('#fc6a03')("There're no chores assigned 🌞"));
        } else {
            this.tasks.forEach(activity => {
                console.log(` ${activity.id}:${activity.completed ? '✅' : '❌'}-  ${activity.task}`);
            }
            );
        }
    }
    completeTask(index: number): void {
        const activity = this.tasks.find(chore => chore.id === index);
        if (activity) {
            activity.completed = true;
            console.log(chalk.green(`Task: "${activity.task}" successfully completed`));
        } else {
            console.log(chalk.red(`Task with id ${index} not found`));
        }
    }

    removeTask(index: number): void {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(activity => activity.id !== index);

        if (this.tasks.length === initialLength) {
            console.log(chalk.hex('#fc6a03')(`No task found with id:${index}`));
        } else {
            console.log(chalk.green.bold(`Removed task with id:${index}`));
        }
    }

}