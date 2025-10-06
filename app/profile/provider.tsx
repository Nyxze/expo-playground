import { useState } from "react"
import { AuthContext, UserProfile } from "../../hooks/use-auth"

export default function AuthProvider({ children }) {
    const [user, setUser] = useState<UserProfile>({})
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}