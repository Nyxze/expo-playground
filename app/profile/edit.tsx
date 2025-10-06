import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useAuth, UserProfile } from "@/hooks/use-auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

export default function EditProfile() {
    const router = useRouter();
    const { user: currentUser, setUser: setCurrentUser } = useAuth();
    const [formUser, setFormUser] = useState<UserProfile>(currentUser ?? {});
    const handlChange = (field: string, value: string) => {
        setFormUser({ ...formUser, [field]: value });
    }
    const handleSave = () => {
        setCurrentUser(formUser);
        router.back();
    };
    const selectImage = () => {
        // Logic to select an image from the device gallery or camera
    }
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Edit Profile</ThemedText>
            <Pressable style={styles.profilePictureContainer} onPress={selectImage}>

            </Pressable>

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
                placeholder="Email"
                placeholderTextColor="#888"
                value={formUser.email}
                onChangeText={(text) => handlChange("email", text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Pressable style={styles.saveButton} onPress={handleSave}>
                <ThemedText style={styles.saveButtonText}>Save</ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        backgroundColor: "#222",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        color: "#fff",
        textAlign: "center",
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
    profilePictureContainer: {

    },
    profilePicture: {

    }
});