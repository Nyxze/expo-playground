import roomData from "./rooms.json"
export type RoomInfos = {
    name: string
    price: number
    imgUrl?: string
    id: string
    description: string
    hostName: string
    guests: number
    beds: number
    baths: number
}

let cachedRooms: RoomInfos[] | null = null;

export function fetchRooms(): Promise<RoomInfos[]> {
    return new Promise((resolve) => {
        let delay = 1000
        if (cachedRooms) {
            delay = 100
        } else {
            cachedRooms = roomData;
        }
        setTimeout(() => {
            resolve(cachedRooms);
        }, delay);
    });
}

export function fetchRoomById(id: string): Promise<RoomInfos> {
    return new Promise((resolve) => {
        let delay = 1000
        if (cachedRooms) {
            delay = 100
        } else {
            cachedRooms = roomData;
        }
        setTimeout(() => {
            const room = cachedRooms.find((r) => r.id === id);
            resolve(room);
        }, delay);
    });
}