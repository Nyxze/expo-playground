import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { Button } from "react-native";

export default function Help() {
    const handleClick = () => {
        router.navigate('/(sandbox)/playground');
    }
    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 16 }}>
            <ThemedText>
                Help page
            </ThemedText>
            <Button title='Playground' onPress={handleClick} />
        </ThemedView>

    )
}