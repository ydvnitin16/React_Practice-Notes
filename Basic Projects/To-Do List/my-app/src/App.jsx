import { useState } from 'react';

function App() {
    const [tasks, settasks] = useState([
        {
            id: Date.now(),
            taskName: 'Create To-Do React Project',
            completed: false,
        },
    ]);
    const [input, setinput] = useState('');

    const deleteTask = (id) =>
        settasks((prev) => prev.filter((task) => task.id !== id));

    const markTask = (id) =>
        settasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

    const addTask = () => {
         if (!input.trim()) return;
        const task = {
            id: Date.now(),
            taskName: input,
            completed: false,
        };
        settasks((prev) => [...prev, task]);
        setinput(''); // clear input after adding
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo List</h1>

                    <ul className="space-y-3">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center justify-between bg-gray-50 p-2 rounded shadow-sm"
                            >
                                <div className="flex items-center space-x-2">
                                    <input
                                        id={task.id}
                                        type="checkbox"
                                        onChange={() => markTask(task.id)}
                                        checked={task.completed}
                                        className="h-4 w-4 cursor-pointer text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                                    />
                                    <li className={`list-none ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                        {task.taskName}
                                    </li>
                                </div>
                                <p
                                    onClick={() => deleteTask(task.id)}
                                    className="cursor-pointer text-red-500 font-bold hover:text-red-700"
                                    title="Delete Task"
                                >
                                    🗑
                                </p>
                            </div>
                        ))}
                    </ul>

                    <label className="mt-4 block">
                        <div className="flex mt-4 space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setinput(e.target.value)}
                                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter task name"
                            />
                            <button
                                type="submit"
                                onClick={addTask}
                                className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Add Task
                            </button>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default App;
