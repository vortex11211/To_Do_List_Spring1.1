import { taskList } from '../src/todo';

describe('taskList', () => {
    let myTaskList: taskList;

    beforeEach(() => {
        myTaskList = new taskList();
    });

    test('should add a task', () => {
        myTaskList.addTask('Test task');
        expect(myTaskList['tasks'].length).toBe(1);
        expect(myTaskList['tasks'][0].task).toBe('Test task');
        expect(myTaskList['tasks'][0].completed).toBe(false);
    });

    test('Should list tasks', () => {
        myTaskList.addTask('Test task');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        myTaskList.listTasks();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Test task'));
        consoleSpy.mockRestore();
    });

    test('Should complete a task', () => {
        myTaskList.addTask('Test task');
        myTaskList.completeTask(1);
        expect(myTaskList['tasks'][0].completed).toBe(true);
    });

    test('Should remove a task', () => {
        myTaskList.addTask('Test task');
        myTaskList.removeTask(1);
        expect(myTaskList['tasks'].length).toBe(0);
});
});