import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className="add-task-form">
                <input className="add-task-input"
                    type="text"
                    placeholder="Add new task"
                />
                <button className="add-btn">Add</button>
        </div>
    );
};

export default AddTaskForm;
