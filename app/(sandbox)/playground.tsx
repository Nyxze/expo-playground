import { router } from 'expo-router';
import { Button, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Playground() {

    const nav = (route) => {
        router.push(`/(sandbox)/${route}`);
    }
    return (

        <SafeAreaView>
            <Text>
                Sandbox
            </Text>
            <Button title="Use Sate" onPress={() => nav('ex1')} />
            <Button title="Use Effect" onPress={() => nav('ex2')} />
            <Button title="Use Context" onPress={() => nav('ex3')} />
            <Button title="Use Zustand" onPress={() => nav('ex4')} />
        </SafeAreaView>
    )

}
