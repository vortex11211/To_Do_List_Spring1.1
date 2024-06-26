

function addTask(chore) {
    return new Task(chore);

}

function listTasks() {
    let retorno=""
    if (tasks.length === 0) {
       retorno = "There are no pendent task 🌞"
    } else {
        retorno = tasks.join("<br>")
    }
    console.log(retorno)
    return retorno
}
function endedTask(index) {
    tasks[index].completedTask();

}

function removeTask(index) {

    tasks.splice(index, 1);
}

function main() {
    let show = "";
    let choice = document.getElementById("options").value;
    switch (choice) {
        case "1":
            let task = prompt("Type the task you want to add", "Do Laundry");
            let chore = addTask(task);
            tasks.push(chore);
            console.table(tasks)
            show = `Task:  ${task} added successfully`
            break;

        case "2": 
        console.log(tasks.length)
        let resultado = listTasks();
            show = resultado;
            break;

        case "3": let idTask = parseInt(prompt("Type the id task you want to complete"));
            let i = tasks.findIndex(task=> task.getId() === idTask);
            if (i < 0) {
                alert("Error, task id incorrect, try again")
            } else {
                tasks[i].completeTask()
                console.table(tasks);
                show = `Task ${tasks[i].getTask()} completed susscessfully`
            }
            break;

        case "4": let idChore = parseInt(prompt("Type the id task you want to delete"));
            let j = tasks.findIndex(task=> task.getId()===idChore)
            if (j < 0) {
                alert('Id incorrect, Try again')
            } else {
                removeTask(j);
                show = `Task deleted Successfully`
            }
    }
    document.getElementById("result").innerHTML= show
}