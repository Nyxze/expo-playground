import { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import RoomItem from "./item";

export default function RoomList({ data, onRefresh }) {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }

    return (
        <FlatList
            keyExtractor={(r) => r.id} data={data}
            renderItem={(r) => (<RoomItem  {...r.item} />)}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }
        >
        </FlatList>
    )
}