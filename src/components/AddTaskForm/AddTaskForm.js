import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className="add-task-block">
            <form id="add-task-form">
                <input
                    className="add-task-input"
                    type="text"
                    placeholder="Add new task"
                    value={props.value}
                    onChange={props.onInputChange}
                />
                <button
                    className="add-btn"
                    onClick={props.onAdd}
                >
                    Add
                </button>
            </form>
            <p className="error-text">{props.error}</p>
        </div>
    );
};

export default AddTaskForm;
