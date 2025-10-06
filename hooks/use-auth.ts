import { createContext, useContext } from "react"

export type UserProfile = {
    firstName?: string
    lastName?: string
    email?: string
    avatarUrl?: string
}

export const AuthContext = createContext<{
    user: UserProfile;
    setUser: (user: UserProfile) => void
}>({
    user: null,
    setUser: () => { }
})

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    console.log("AuthContext:", ctx)
    return ctx
}
