import './Task.css';

const Task = props => {
    let labelClassNames = 'task-text';

    if (props.done) {
        labelClassNames += ' crossed';
    }

    return (
        <div className="task">
            <input
                type="checkbox"
                onChange={props.onCheck}
                checked={props.done}
            />
            <p className={labelClassNames}>{props.text}</p>
            <button className="delete-btn" onClick={props.onRemove}>X</button>
        </div>
    )
};

export default Task;
