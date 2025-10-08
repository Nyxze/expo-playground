import { Stack } from "expo-router";

export default function ExplorerRoom() {
    return <Stack >
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen
            name="[id]"
            options={{
                title: "Room Details",
                presentation: "modal", // or "card"
            }}
        />
    </Stack>;
}