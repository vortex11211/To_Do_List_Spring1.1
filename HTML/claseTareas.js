class Task {
    static counter =0
    constructor(task) {
        this.id = ++Task.counter,
        this.task = task,
        this.completed = false
    }

    getId() {
        return this.id;
    }
    getTask() {
        return this.task;
    }

    getCompleted() {
        return this.completed;
    }

    completeTask() {
        this.completed = true
    }
    toString() {
        let status=""
                this.completed ? status= '✅': status='❌';
        let retorno = `id: ${this.id} - status: ${status} - ${this.task} `
        return retorno
    }

}