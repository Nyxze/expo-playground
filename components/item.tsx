import { RoomInfos } from '@/hooks/use-rooms';
import { Link } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';


export default function RoomItem(data: RoomInfos) {

    const currency = '$'
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{ flex: 1, justifyContent: 'center' }}>
                <ThemedText style={styles.name}>
                    {data.name}
                </ThemedText>
                <ThemedText style={styles.price}>
                    {data.price}{currency}
                </ThemedText>
            </ThemedView>
            <Link href={{
                pathname: '/explorer/[id]',
                params: { id: data.id}
            }}>
                <Image
                    source={{ uri: data.imgUrl }}
                    style={{ width: 80, height: 80, borderRadius: 8 }}
                />
            </Link>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#444', // dark gray for dark theme
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        margin: 8,
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        gap: 8,
    },
    price: {
        gap: 8,
        marginBottom: 8,
    },
});