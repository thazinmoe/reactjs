export const Task = (props) => {
    return (
        <li>
            {!props.isEditing ? (
                <span>
                    <input
                        type="checkbox"
                        onChange={() => props.completeTodo(props.id)}
                        checked={props.isComplete ? true : false} />
                    <span
                        onDoubleClick={() => props.markAsEditing(props.id)}
                        style={{ textDecoration: props.isComplete ? 'line-through' : '' }}
                    >
                        {props.title}
                    </span>
                </span>
            ) : (
                <input
                    type="text"
                    onBlur={(event) => props.updateTodo(event, props.id)}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            props.updateTodo(event, props.id);
                        } else if (event.key === 'Escape') {
                            props.cancelEdit(event, props.id);
                        }
                    }}
                    defaultValue={props.title}
                    autoFocus
                />
            )}

            <button onClick={() => props.deleteTodo(props.id)}>X</button>
        </li>
    );
};