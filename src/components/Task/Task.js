import './Task.css';

const Task = props => {
    return (
        <div className="task">
            <p className="task-text">{props.text}</p>
            <button className="delete-btn">X</button>
        </div>
    )
};

export default Task;
