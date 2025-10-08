import { UserProfile } from "@/hooks/user/use-auth";
import { createContext, useState } from "react";

type UserReducer = (current: UserProfile) => UserProfile
export const AuthContext = createContext<{
    user: UserProfile;
    updateUser: (reducer: UserReducer) => void
}>({
    user: null,
    updateUser: null
})

export default function AuthProvider({ children }) {
    const defaultUser: UserProfile = {
        id: "-1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        favorites: [],
        bookedRooms: [],
        avatarUrl: "assets/images/android-icon-foreground.png"
    }

    const [user, setUser] = useState<UserProfile>(defaultUser)
    const reducer = (fn: (current: UserProfile) => UserProfile) => {
        setUser(fn)
    }

    return (
        <AuthContext.Provider value={{ user, updateUser: reducer }}>
            {children}
        </AuthContext.Provider>
    )
}