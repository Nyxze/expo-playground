import { AuthContext } from "@/providers/auth"
import { useContext } from "react"

export type UserProfile = {
    id: string
    firstName?: string
    lastName?: string
    phoneNumber?: number
    email?: string
    avatarUrl?: string
    bookedRooms?: string[]
    favorites?: string[]
}


export const useAuth = () => useContext(AuthContext)
