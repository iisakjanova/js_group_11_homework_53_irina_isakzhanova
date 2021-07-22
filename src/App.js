import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";

const App = () => {
    return (
        <div className="App">
            <AddTaskForm />
            <Task text="text" />
        </div>
    );
};

export default App;
