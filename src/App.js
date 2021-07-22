import {useState} from "react";
import {nanoid} from 'nanoid';

import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

const App = () => {
    const [tasks, setTasks] = useState([
        {text: 'Buy milk', id: nanoid(), done: false,},
        {text: 'Walk with dog', id: nanoid(), done: false,},
        {text: 'Do homework', id: nanoid(), done: false,},
    ]);

    const [currentTask, setCurrentTask] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleInputChange = text => {
        setCurrentTask(text);
    };

    const addTask = (currentTask, e) => {
        e.preventDefault();

        if (currentTask !== '') {
            setErrorText('');
            setTasks([...tasks, {text: currentTask, id: nanoid(), done: false,}]);
            setCurrentTask('');
        } else {
            setErrorText('* Enter a task!');
        }
    };

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const setDoneTask = id => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, done: !task.done}
            }

            return task;
        }));
    };

    return (
        <div className="App">
            <AddTaskForm
                value={currentTask}
                error={errorText}
                onInputChange={e => handleInputChange(e.target.value)}
                onAdd={e => addTask(currentTask, e)}
            />

            {tasks.map(task => (
                <Task
                    key={task.id}
                    text={task.text}
                    done={task.done}
                    onRemove={() => removeTask(task.id)}
                    onCheck={() => setDoneTask(task.id)}
                />
            ))}
        </div>
    );
};

export default App;
