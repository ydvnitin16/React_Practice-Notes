import React from 'react';
import Button from './button';

const AddTask = React.memo(function ({ createTask, title, setTitle, error }) {
    return (
        <>
            <div className="input-section">
                <input
                    id="todo-input"
                    placeholder="Add new task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Button type="submit" title={'Create'} onClick={createTask} />
                {error && <p id="error">{error}</p>}
            </div>
        </>
    );
});

export default AddTask;
