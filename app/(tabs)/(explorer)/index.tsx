
import RoomList from '@/components/RoomList';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { fetchRooms, RoomInfos } from '@/hooks/use-rooms';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [rooms, setRooms] = useState<RoomInfos[]>([])
    const [lastUpdate, setLastUpdate] = useState<number>()

    const onRefresh = async () => {
        loadRooms()
    }

    const loadRooms = useCallback(async () => {
        setLoading(true)
        try {
            const data = await fetchRooms()
            setRooms(data)
            setError(null)
        } catch (e) {
            console.error("Failed to fetch rooms", e)
            setError("Failed to fetch rooms")
        }finally{
            setLoading(false)
        }
    }, [lastUpdate])


    useEffect(() => {
        loadRooms()
    }, [])

    return (

        <ThemedView style={style.themStyle}>
            <SafeAreaView>
                {error && <ThemedText>{error}</ThemedText>}
                {loading ? <ThemedView>
                    <ActivityIndicator />
                </ThemedView>
                    :
                    <RoomList data={rooms} onRefresh={onRefresh} />
                }
            </SafeAreaView>
        </ThemedView >
    )
}


const style = StyleSheet.create({
    themStyle: {
        flex: 1
    }
})