import RoomItem from "@/components/item"
import { fetchRooms, RoomInfos } from "@/hooks/use-rooms"
import { useUserStore } from "@/stores/use-user-store"
import { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler"

export default function Favorites() {

    const favIds = useUserStore(s => s.favoriteRoomIds)
    const [rooms,setRooms] = useState<RoomInfos[]>([])

    useEffect(() => {
        const fn = async () => {
            const rooms = await fetchRooms()   // await userStore.fetchFavorites()
            const list = rooms.filter(r => favIds.includes(r.id))
            setRooms(list)
        }
        fn()
    }, [favIds])

    return (
        <FlatList
            data={rooms}
            renderItem={({ item }) => (
                <RoomItem {...item} />
            )}
        />
    )
}