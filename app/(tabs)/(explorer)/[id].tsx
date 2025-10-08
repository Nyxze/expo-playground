import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { fetchRoomById } from "@/hooks/use-rooms";
import { useUserStore } from "@/stores/use-user-store";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type QueryP = {
    id: string;
}
export default function ExplorerRoom() {
    const { id } = useLocalSearchParams<QueryP>();
    const userStore = useUserStore(s => s);
    const isFav = userStore.favoriteRoomIds.includes(id);
    const [room, setRoom] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleFav = () => {
        if (isFav) {
            userStore.removeFavorite(id);
        } else {
            userStore.addFavorite(id);
        }
    };

    const showDatePicker = (mode: "start" | "end") => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: (event, selectedDate) => {
                if (selectedDate) {
                    if (mode === "start") {
                        setStartDate(selectedDate);
                    } else {
                        setEndDate(selectedDate);
                    }
                }
            },
            mode: "date",
            is24Hour: true,
        });
    };

    const handleBooking = async () => {
        if (!startDate || !endDate) {
            alert("Please select both start and end dates");
            return;
        }
        if (endDate <= startDate) {
            alert("End date must be after start date");
            return;
        }
        // Add booking logic here
        alert(`Room booked from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}!`);
    };

    useEffect(() => {
        const fn = async () => {
            if (!id) return;
            const room = await fetchRoomById(id);
            setRoom(room);
            setLoading(false);
        };
        fn();
    }, [id]);

    if (loading) {
        return (
            <ThemedView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#841584" />
            </ThemedView>
        );
    }

    if (!room) {
        return (
            <ThemedView style={styles.loadingContainer}>
                <ThemedText>Room not found</ThemedText>
            </ThemedView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={styles.container}>
                <ThemedView style={styles.imageContainer}>
                    <Image
                        source={{ uri: room.image }}
                        style={styles.image}
                    />
                    <Pressable
                        style={[styles.favIcon, isFav ? styles.favoriteActive : styles.favoriteButton]}
                        onPress={handleFav}
                    >
                        <ThemedText style={styles.favIconText}>
                            {isFav ? "❤️" : "🤍"}
                        </ThemedText>
                    </Pressable>
                </ThemedView>
                <ThemedText style={styles.title}>{room.title}</ThemedText>
                <ThemedText style={styles.cityType}>{room.city} • {room.type}</ThemedText>
                <ThemedText style={styles.price}>${room.price}</ThemedText>
                <ThemedText style={styles.description}>{room.description}</ThemedText>
                <ThemedText style={styles.host}>Host: {room.hostName ?? "N/A"}</ThemedText>
                <ThemedText style={styles.details}>
                    Guests: {room.guests ?? "?"} | Beds: {room.beds ?? "?"} | Baths: {room.baths ?? "?"}
                </ThemedText>
                <ThemedText style={styles.rating}>
                    ⭐ {room.rating} ({room.reviews} reviews)
                </ThemedText>
                <ThemedText style={styles.location}>
                    Location: {room.lat}, {room.lng}
                </ThemedText>

                <ThemedView style={styles.dateRow}>
                    <Pressable
                        style={styles.dateButton}
                        onPress={() => showDatePicker("start")}
                    >
                        <ThemedText style={styles.buttonText}>
                            {startDate ? `Start: ${startDate.toLocaleDateString()}` : "Select Start Date"}
                        </ThemedText>
                    </Pressable>
                    <Pressable
                        style={styles.dateButton}
                        onPress={() => showDatePicker("end")}
                    >
                        <ThemedText style={styles.buttonText}>
                            {endDate ? `End: ${endDate.toLocaleDateString()}` : "Select End Date"}
                        </ThemedText>
                    </Pressable>
                </ThemedView>
                <Pressable
                    style={[styles.button, styles.reserveButton]}
                    onPress={handleBooking}
                >
                    <ThemedText style={styles.buttonText}>Reserve</ThemedText>
                </Pressable>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        backgroundColor: "#222",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
    },
    imageContainer: {
        position: "relative",
        alignItems: "center",
        marginBottom: 16,
    },
    image: {
        width: 240,
        height: 160,
        borderRadius: 12,
        backgroundColor: "#333",
    },
    favIcon: {
        position: "absolute",
        top: 12,
        right: 12,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        elevation: 4,
    },
    favIconText: {
        fontSize: 24,
        textAlign: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff",
        marginBottom: 2,
        textAlign: "center",
    },
    cityType: {
        fontSize: 15,
        color: "#bbb",
        marginBottom: 2,
        textAlign: "center",
    },
    price: {
        fontSize: 18,
        color: "#11b36aff",
        marginBottom: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    description: {
        fontSize: 15,
        color: "#ccc",
        marginBottom: 8,
        textAlign: "center",
    },
    host: {
        fontSize: 14,
        color: "#bbb",
        marginBottom: 2,
        textAlign: "center",
    },
    details: {
        fontSize: 14,
        color: "#bbb",
        marginBottom: 2,
        textAlign: "center",
    },
    rating: {
        fontSize: 14,
        color: "#FFD700",
        marginBottom: 2,
        textAlign: "center",
    },
    location: {
        fontSize: 13,
        color: "#888",
        marginBottom: 8,
        textAlign: "center",
    },
    dateRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        marginTop: 16,
        marginBottom: 8,
    },
    dateButton: {
        backgroundColor: "#333",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 4,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 4,
        minWidth: 120,
        elevation: 2,
        marginTop: 16,
    },
    reserveButton: {
        backgroundColor: "#11b36aff",
        borderWidth: 2,
        borderColor: "#fff",
    },
    favoriteButton: {
        backgroundColor: "#333",
        borderWidth: 2,
        borderColor: "#FFD700",
    },
    favoriteActive: {
        backgroundColor: "#FFD700",
        borderWidth: 2,
        borderColor: "#333",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
});