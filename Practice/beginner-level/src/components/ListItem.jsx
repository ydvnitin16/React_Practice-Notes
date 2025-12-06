import React from 'react';
import Button from './button';

const ListItem = React.memo(function ({ task, changeStatus, deleteTask }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    onChange={() => changeStatus(task.id)}
                    checked={task.isCompleted}
                />
                {task.title}
            </label>

            <div className="actions">
                <Button title="Delete" onClick={() => deleteTask(task.id)} />
            </div>
        </li>
    );
});

export default ListItem;
