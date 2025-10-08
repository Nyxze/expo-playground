import { create } from 'zustand';

type UserStore = {
    favoriteRoomIds: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    favoriteRoomIds: [],
    addFavorite: (id: string) => set((state) => ({
        favoriteRoomIds: [...state.favoriteRoomIds, id],
    })),

    removeFavorite: (id: string) => set((state) => ({
        favoriteRoomIds: state.favoriteRoomIds.filter((roomId) => roomId !== id),
    })),
}));