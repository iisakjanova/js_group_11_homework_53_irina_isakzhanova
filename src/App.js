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

    const tasksComponents = tasks.map(task => (
        <Task
            key={task.id}
            text={task.text}
        />
    ));

    return (
        <div className="App">
            <AddTaskForm />
            {tasksComponents}
        </div>
    );
};

export default App;
