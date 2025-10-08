import { ThemedText } from "@/components/themed-text";
import { useState } from "react";
import { Button, View } from "react-native";

export default function Playground() {
    const [color, setColor] = useState(true);
    return (
        <View>
            <Button title="Change color button" onPress={() => setColor(!color)} />
            {color ?
                <Counter show={color} />
                :
                <View>
                    <Counter show={color} />
                </View>
            }
        </View>
    )
}

function Counter({ show }) {
    const [count, setCount] = useState(0);
    console.log("Render Counter", count)
    const handleClick = () => {
        console.log('End', 'count')

        setCount((c) => {
            console.log('First Reduced ' + c)
            return c + 1
        });

        setCount((c) => {
            console.log('Second Reduced ' + c)
            return c + 1
        });

        console.log('End count', count)
    }
    return (
        <>
            <ThemedText>
                Example {count}
            </ThemedText>
            <Button onPress={handleClick} title="Increment" color={show ? "blue" : "green"} />
        </>
    )
}