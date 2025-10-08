import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAuth, UserProfile } from "@/hooks/user/use-auth";
import { useTheme } from "@/providers/theme";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

export default function EditProfile() {
    const router = useRouter();
    const { user, updateUser } = useAuth();
    const theme = useTheme()
    const [formUser, setFormUser] = useState<UserProfile>(user);
    const handlChange = (field: string, value: string) => {
        setFormUser({ ...formUser, [field]: value });
    }
    const handleSave = () => {
        updateUser((u) => { return { ...u, ...formUser } });
        router.back();
    };

    const switchColor = () => {
        const current = theme.color
        if (current === 'dark') {
            theme.setTheme('light')
        } else {
            theme.setTheme('dark')
        }
    }
    // dark-mode
    // sun
    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                <Pressable onPress={switchColor}>
                    <FontAwesome name={theme.color === 'dark' ? "sun-o" : "moon-o"} size={24} color="#fff" />
                </Pressable>
            </ThemedView>
            <ThemedText style={styles.title}>Edit Profile</ThemedText>
            <ThemedView style={styles.section}>
                <ThemedText style={styles.sectionTitle}>Personal Info</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#888"
                    value={formUser?.firstName}
                    onChangeText={(text) => handlChange("firstName", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#888"
                    value={formUser?.lastName}
                    onChangeText={(text) => handlChange("lastName", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="#888"
                    value={formUser?.phoneNumber?.toString()}
                    onChangeText={(text) => handlChange("phoneNumber", text)}
                    keyboardType="phone-pad"
                />
            </ThemedView >

            {/* Section 2: Account Info */}
            <ThemedView style={styles.section}>
                <ThemedText style={styles.sectionTitle}>Account Info</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    value={formUser.email}
                    onChangeText={(text) => handlChange("email", text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </ThemedView >

            <Pressable style={styles.saveButton} onPress={handleSave}>
                <ThemedText style={styles.saveButtonText}>Save</ThemedText>
            </Pressable>
        </ThemedView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        color: "#fff",
        textAlign: "center",
    },
    section: {
        marginBottom: 24,
        borderRadius: 12,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#bbb",
        marginBottom: 12,
    },
    input: {
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#444",
    },
    saveButton: {
        backgroundColor: "#841584",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 8,
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

