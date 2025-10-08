import { RoomInfos } from '@/hooks/use-rooms';
import { create } from 'zustand';

export type BookingStore = {
    bookings: RoomInfos[];
    addBooking: (room: RoomInfos) => void;
    removeBooking: (id: string) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
    bookings: [],

    addBooking: (room: RoomInfos) => {

        set((state) => ({
            bookings: [...state.bookings, room]
        }))
    },
    
    removeBooking: (id: string) => {
        set((state) => ({
            bookings: state.bookings.filter(r => r.id !== id)
        }))
    }

}));