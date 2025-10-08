
import { Drawer } from 'expo-router/drawer';
export default function ExplorerRoom() {
    return (
        <Drawer>
            <Drawer.Screen name="index" options={{
                title: 'Profile',
            }} />
            <Drawer.Screen name="settings" options={{
                title: 'Settings'
            }} />
            <Drawer.Screen name="help" options={{
                title: 'Help'
            }} />
            <Drawer.Screen name="yolo" options={{
                title: 'Yolo'
            }} />
            <Drawer.Screen name="favorites" options={{
                title: 'Favorites'
            }} />
        </Drawer>
    )
}