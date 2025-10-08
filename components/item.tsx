import { RoomInfos } from '@/hooks/use-rooms';
import { Link } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export default function RoomItem(data: RoomInfos) {
    const currency = '$';
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{ flex: 1, justifyContent: 'center' }}>
                <ThemedText style={styles.name}>{data.title}</ThemedText>
                <ThemedText style={styles.city}>{data.city} • {data.type}</ThemedText>
                <ThemedText style={styles.price}>
                    {data.price}{currency}
                </ThemedText>
                <View style={styles.ratingRow}>
                    <ThemedText style={styles.rating}>⭐ {data.rating}</ThemedText>
                    <ThemedText style={styles.reviews}>({data.reviews} reviews)</ThemedText>
                </View>
            </ThemedView>
            <Link href={{
                pathname: '/(tabs)/(explorer)/[id]',
                params: { id: data.id }
            }}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.image}
                />
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
        color: '#fff',
    },
    city: {
        fontSize: 14,
        color: '#bbb',
        marginBottom: 2,
    },
    price: {
        fontSize: 15,
        color: '#841584',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    rating: {
        fontSize: 13,
        color: '#FFD700',
        marginRight: 4,
    },
    reviews: {
        fontSize: 13,
        color: '#bbb',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginLeft: 12,
        backgroundColor: "#333",
    },
});