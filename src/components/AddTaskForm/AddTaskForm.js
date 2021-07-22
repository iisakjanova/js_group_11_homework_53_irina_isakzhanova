import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className="add-task-form">
            <input
                className="add-task-input"
                type="text"
                placeholder="Add new task"
                onChange={props.onInputChange}
            />
            <button
                className="add-btn"
                onClick={props.onAdd}
            >
                Add
            </button>
        </div>
    );
};

export default AddTaskForm;
