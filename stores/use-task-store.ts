import { create } from 'zustand';

export type Task = {
    id?: string
    title: string;
    completed: boolean;
}

let id = 0;
type TaskStore = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
}

const addTask = (store: TaskStore, task: Task): Partial<TaskStore> => {
    task.id = `${++id}`
    return {
        tasks: [...store.tasks, task]
    };
};

const removeTask = (store: TaskStore, id: string): Partial<TaskStore> => {
    return {
        tasks: store.tasks.filter(t => t.id !== id)
    }
}

export const useTaskStore = create<TaskStore>((set) => {
    return {
        tasks: [],
        addTask: (task: Task) => set((state) => addTask(state, task)),
        removeTask: (id: string) => set((state) => removeTask(state, id)),
    }
});

