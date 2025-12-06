import { useEffect, useState } from 'react';
import './App.css';
import ShowLists from './components/ShowLists';
import AddTask from './components/AddTask';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTasks } from './hooks/useTasks';

function App() {
    const { list, title, setTitle, error, createTask, deleteTask, changeStatus } = useTasks();

    return (
        <div className="todo-container">
            <AddTask
                title={title}
                setTitle={setTitle}
                error={error}
                createTask={createTask}
            />
            <ShowLists list={list} deleteTask={deleteTask} changeStatus={changeStatus} />
        </div>
    );
}

export default App;
