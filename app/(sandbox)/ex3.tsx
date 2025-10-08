import { FontAwesome } from "@expo/vector-icons";
import { createContext, useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Theme = {
    color: string,
    style: any
    name: string
}
type ThemeProp = {
    theme: Theme,
    setTheme: (theme: Theme) => void
}
const SharedCtx = createContext<ThemeProp>({
    theme: {
        color: '#fff',
        style: {},
        name: 'light'
    },
    setTheme: () => { }
});

export default function Playground() {
    const [theme, setTheme] = useState<Theme>({ color: '#fff', style: {}, name: 'light' })
    return (
        <SharedCtx.Provider value={{ theme, setTheme }}>
            <View style={{ flex: 1 }}>
                <Header>
                </Header>
                <View style={{ ...theme.style, flex: 1 }}>
                    <Text style={{ color: theme.style.color }}>Hello World</Text>
                </View>
                <Footer />
            </View>
        </SharedCtx.Provider>
    )
}

function Header() {
    const ctx = useContext(SharedCtx)
    return (
        <View style={ctx.theme === darkTheme ? darkTheme.style : lightTheme.style}>
            <Text style={{ ...ctx.theme.style }}>
                Hello from header
            </Text>
        </View>

    )
}

function Footer() {
    const ctx = useContext(SharedCtx)
    const toggleTheme = () => {
        ctx.setTheme(ctx.theme === darkTheme ? lightTheme : darkTheme)
    }

    return (
        <SafeAreaView edges={["bottom"]}>
            <View style={ctx.theme === darkTheme ? darkTheme.style : lightTheme.style}>
                <Pressable onPress={toggleTheme} style={{ padding: 10, alignSelf: 'flex-end' }}>
                    <FontAwesome name={ctx.theme === darkTheme ? "sun-o" : "moon-o"} size={24} color={ctx.theme === darkTheme ? "#fff" : "#000"} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const lightTheme = {
    color: '#fff',
    style: {
        backgroundColor: '#fff',
        color: '#000'
    },
    name: 'light'
}
const darkTheme = {
    color: '#000',
    style: {
        backgroundColor: '#000',
        color: '#fff'
    },
    name: 'dark'
}