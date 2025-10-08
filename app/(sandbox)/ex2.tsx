import { ThemedText } from "@/components/themed-text";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Playground() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1);
    }
    useEffect(() => {
        console.log("Mounted")
    }, [])

    useEffect(() => {
        console.log("Updated")
        console.log(count)
    }, [count])

    return (
        <View>
            <ThemedText>
                Example {count}
            </ThemedText>
            <Button onPress={handleClick} title="Increment" />
            <Text>
                Exo Use Effect
            </Text>
        </View>
    )
}