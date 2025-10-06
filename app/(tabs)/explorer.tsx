import RoomItem from '@/components/item';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { fetchRooms, RoomInfos } from '@/hooks/use-rooms';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const fetchData = fetchRooms()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<RoomInfos[]>([])

  const fetch = async () => {
    setLoading(true)
    const data = await fetchData
    // Select random 5 items
    const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 5)
    setData(randomItems)
    setLoading(false)
  }
  const handleRefresh = () => {
    fetch()
  }

  useEffect(() => {
    fetch()
  }, [])
  const colorScheme = useColorScheme()
  return (

    <ThemedView style={style.themStyle}>
      <SafeAreaView>
        <Button
          onPress={handleRefresh}
          title="Refresh"
          color="#841584"
          disabled={loading}
          accessibilityLabel="Learn more about this purple button"
        />

        {loading && <ThemedView>
          <ThemedText>
            Loading...
          </ThemedText>
        </ThemedView>
        }
        <FlatList data={data} renderItem={(r) => (<RoomItem  {...r.item} />)}>
        </FlatList>
      </SafeAreaView>
    </ThemedView >
  )
}


const style = StyleSheet.create({
  themStyle: {
    flex: 1
  }
})