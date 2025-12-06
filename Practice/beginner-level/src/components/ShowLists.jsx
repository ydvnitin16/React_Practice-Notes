import React from 'react';
import Button from './button';
import ListItem from './listItem';

const ShowLists = React.memo(function ({ list, deleteTask, changeStatus }) {
    return (
        <ul id="todo-list">
            {list?.length > 0 ? (
                list.map((task) => (
                    <ListItem key={task.id} task={task} changeStatus={changeStatus} deleteTask={deleteTask} />
                ))
            ) : (
                <h1>List is empty</h1>
            )}
        </ul>
    );
});

export default ShowLists;
