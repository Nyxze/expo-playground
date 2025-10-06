import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { fetchRoomById } from "@/hooks/use-rooms";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet } from "react-native";

export default function ExplorerRoom() {
    const { id } = useLocalSearchParams();
    const [room, setRoom] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchRoomById(id as string).then((data) => {
                setRoom(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return (
            <ThemedView className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#841584" />
            </ThemedView>
        );
    }

    if (!room) {
        return (
            <ThemedView className="flex-1 items-center justify-center">
                <ThemedText className="text-2xl">Room not found</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView className="flex-1 items-center justify-center p-6">
            <Image
                source={{ uri: room.imgUrl }}
                style={styles.image}
            />
            <ThemedText className="text-2xl font-bold mt-4">{room.name}</ThemedText>
            <ThemedText className="text-lg mt-2">{room.description}</ThemedText>
            <ThemedText className="text-base mt-2">Host: {room.hostName}</ThemedText>
            <ThemedText className="text-base mt-2">Guests: {room.guests} | Beds: {room.beds} | Baths: {room.baths}</ThemedText>
            <ThemedText className="text-base mt-2">Price: ${room.price}</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 240,
        height: 160,
        borderRadius: 12,
        marginBottom: 16,
        backgroundColor: "#333",
    },
});