import { useCallback, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTasks = () => {
    const [list, setList] = useLocalStorage('taskList', []);

    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    const createTask = useCallback(() => {
        if (!title || title.trim() === '')
            return setError('Please add task name');
        setError(false);
        const task = { id: Date.now(), title, isCompleted: false };
        setList((prev) => [...prev, task]);
        setTitle('');
    }, [title]);

    const deleteTask = useCallback(
        (id) => {
            console.log(list);
            const updatedTask = list.filter((l) => l.id !== Number(id));
            setList(updatedTask);
        },
        [list]
    );

    const changeStatus = useCallback(
        (id) => {
            console.log(list);
            const updatedTask = list.map((l) =>
                l.id === id
                    ? l.isCompleted
                        ? { ...l, isCompleted: false }
                        : { ...l, isCompleted: true }
                    : l
            );
            setList(updatedTask);
        },
        [list]
    );

    return {
        list,
        title,
        setTitle,
        error,
        createTask,
        deleteTask,
        changeStatus,
    };
};
