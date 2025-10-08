import ImagePicker from '@/components/image-picker';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/hooks/user/use-auth';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserInfos() {
    const { user, updateUser } = useAuth();
    const handleImageSelected = (imageUri: string) => {
        // Handle the selected image URI (e.g., upload to server or update state)
        updateUser((u) => { return { ...u, avatarUrl: imageUri } });
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.avatar}>
                    <ImagePicker onSelect={handleImageSelected} img={user?.avatarUrl} />
                </ThemedView >
                <ThemedView style={styles.infoCard}>
                    <ThemedText style={styles.label}>First Name</ThemedText>
                    <ThemedText style={styles.value}>{user.firstName ?? "—"}</ThemedText>
                    <ThemedText style={styles.label}>Last Name</ThemedText>
                    <ThemedText style={styles.value}>{user.lastName ?? "—"}</ThemedText>
                    <ThemedText style={styles.label}>Email</ThemedText>
                    <ThemedText style={styles.value}>{user.email ?? "—"}</ThemedText>
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#181818',
    },
    container: {
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#222',
        alignItems: 'center',
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 4,
    },
    drawerBtn: {
        alignSelf: 'flex-end',
        marginBottom: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#333',
    },
    drawerBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        paddingBottom: 15,
        borderColor: '#841584',
        backgroundColor: '#333',
    },
    avatarPlaceholder: {
        marginBottom: 16,
        color: '#888',
        fontSize: 18,
        textAlign: 'center',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center',
    },
    email: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 16,
        textAlign: 'center',
    },
    infoCard: {
        width: '100%',
        backgroundColor: '#292929',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 2,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#bbb',
        marginTop: 8,
    },
    value: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: 16,
        marginBottom: 4,
    },
    editBtnContainer: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#841584',
        shadowColor: '#000',
        marginTop: 8,
        width: '100%',
        alignItems: 'center',
    },
    editBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});