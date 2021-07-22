import {useState} from "react";
import {nanoid} from 'nanoid';

import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

const App = () => {
    const [tasks, setTasks] = useState([
        {text: 'Buy milk', id: nanoid(),},
        {text: 'Walk with dog', id: nanoid(),},
        {text: 'Do homework', id: nanoid(),},
    ]);

    const [currentTask, setCurrentTask] = useState({});

    const handleInputText = text => {
        setCurrentTask({text, id: nanoid(),});
    };

    const addTask = currentTask => {
        setTasks([...tasks, currentTask]);
    };

    const tasksComponents = tasks.map(task => (
        <Task
            key={task.id}
            text={task.text}
        />
    ));

    return (
        <div className="App">
            <AddTaskForm
                onInputChange={e => handleInputText(e.target.value)}
                onClick={() => addTask(currentTask)}
            />
            {tasksComponents}
        </div>
    );
};

export default App;
