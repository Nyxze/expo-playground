import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../hooks/use-auth';

export default function UserInfos() {
    const { user } = useAuth()
    const router = useRouter()
    const handleOnPress = () => {
        router.push('/profile/edit');
    }

    return (

        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                {user.avatarUrl ? (
                    <Image
                        source={{ uri: user.avatarUrl }}
                        style={styles.avatar}
                    />
                ) : (
                    <ThemedText style={styles.avatarPlaceholder}>No Avatar</ThemedText>
                )}
                <ThemedText style={styles.label}>
                    First Name: <ThemedText style={styles.value}>{user.firstName ?? "—"}</ThemedText>
                </ThemedText>
                <ThemedText style={styles.label}>
                    Last Name: <ThemedText style={styles.value}>{user.lastName ?? "—"}</ThemedText>
                </ThemedText>
                <ThemedText style={styles.label}>
                    Email: <ThemedText style={styles.value}>{user.email ?? "—"}</ThemedText>
                </ThemedText>
                <Pressable style={styles.pressable} onPress={handleOnPress} >
                    <ThemedText style={styles.editBtn}>Edit Profile</ThemedText>
                </Pressable>
            </ThemedView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        margin: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 16,
    },
    avatarPlaceholder: {
        marginBottom: 16,
        color: '#888',
    },
    editBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    label: {
        fontWeight: 'bold',
        marginTop: 8,
        fontSize: 16,
        color: '#fff',
    },
    value: {
        fontWeight: 'normal',
        color: '#ccc',
    },
    pressable: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#444',
        shadowColor: '#000',
    }
});