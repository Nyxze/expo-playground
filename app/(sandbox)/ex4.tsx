import { ThemedText } from "@/components/themed-text";
import { Task, useTaskStore } from "@/store/useTaskStore";
import { FontAwesome } from "@expo/vector-icons";
import { Button, FlatList, Pressable, View } from "react-native";

export default function Zustand() {
    const tasks = useTaskStore((s) => s.tasks)
    const addTask = useTaskStore((s) => s.addTask)
    return (
        <View>
            {tasks.length === 0 ? <ThemedText>No tasks</ThemedText> :
                <FlatList data={tasks} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                    <TaskItem task={item} />
                )} />
            }
            <Button title="Add Task" onPress={() => addTask({ title: "Task", completed: false })} />
        </View>
    )
}


function TaskItem({ task }: { task: Task }) {
    const removeTask = useTaskStore((s) => s.removeTask)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}>
            <ThemedText>{task.title}: {task.id}</ThemedText>
            <Pressable onPress={() => removeTask(task.id!)}>
                <FontAwesome name="remove" size={24} color="#f00" />
            </Pressable>
        </View>
    )
}