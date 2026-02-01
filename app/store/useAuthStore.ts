import { create } from 'zustand'

type User = {
    user?: any
}

type AuthState = {
    user: User | null
    setUser: (user: User) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    setUser: (user) => set({ user }),

    logout: () => set({ user: null }),
}))