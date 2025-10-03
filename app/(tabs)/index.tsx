import RoomItem, { ItemData } from '@/components/item';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const useFetchData = (): Promise<ItemData[]> => {
  const data =
    [
      {
        name: "Cozy Downtown Loft",
        price: 120,
        imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        name: "Modern Beachfront Apartment",
        price: 150,
        imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      },
      {
        name: "Rustic Mountain Cabin",
        price: 200,
        imgUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      },
      {
        name: "Luxury City Penthouse",
        price: 175,
        imgUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
      },
      {
        name: "Charming Countryside Retreat",
        price: 90,
        imgUrl: "https://images.unsplash.com/photo-1505691723518-41cb85eea23e"
      },
      {
        name: "Cozy Downtown Loft",
        price: 120,
        imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        name: "Modern Beachfront Apartment",
        price: 150,
        imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      },
      {
        name: "Rustic Mountain Cabin",
        price: 200,
        imgUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      },
      {
        name: "Luxury City Penthouse",
        price: 175,
        imgUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
      },
      {
        name: "Charming Countryside Retreat",
        price: 90,
        imgUrl: "https://images.unsplash.com/photo-1505691723518-41cb85eea23e"
      },
      {
        name: "Cozy Downtown Loft",
        price: 120,
        imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        name: "Modern Beachfront Apartment",
        price: 150,
        imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      },
      {
        name: "Rustic Mountain Cabin",
        price: 200,
        imgUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      },
      {
        name: "Luxury City Penthouse",
        price: 175,
        imgUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
      },
      {
        name: "Charming Countryside Retreat",
        price: 90,
        imgUrl: "https://images.unsplash.com/photo-1505691723518-41cb85eea23e"
      }

    ]
  return new Promise<ItemData[]>((resolve) => {
    setTimeout(() => {
      const shuffled = [...data].sort(() => Math.random() - 0.5)
      const slice = shuffled.slice(0, 5)
      resolve(slice)
    }, 1000)
  })
}
export default function HomeScreen() {
  const fetchData = useFetchData()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ItemData[]>([])

  const fetch = async () => {
    setLoading(true)
    const data = await fetchData
    setData(data)
    setLoading(false)
  }
  const handleRefresh = () => {
    console.log('You tapped the button!');
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