
const URL = "https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json"
export type RoomInfos = {
    id: string;
    title: string;
    city: string;
    price: number;
    image: string;
    lat: number;
    lng: number;
    type: string;
    description: string;
    rating: number;
    reviews: number;
}

let cachedRooms: RoomInfos[] | null = null;

export async function fetchRooms(): Promise<RoomInfos[]> {
    const response = await fetch(URL);
    return await response.json();
}

export async function fetchRoomById(id: string): Promise<RoomInfos> {
    const data = await fetchRooms()
    return data.find(r => r.id === id);

}