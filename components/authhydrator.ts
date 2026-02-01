'use client'

import { useEffect, useRef } from 'react'
import { useAuthStore } from '@/app/store/useAuthStore'

export default function AuthHydrator() {
    const setUser = useAuthStore((s) => s.setUser)
    const hydrated = useRef(false)

    useEffect(() => {
        if (hydrated.current) return
        hydrated.current = true

        fetch('/api/auth/me', {
            credentials: 'include',
        })
            .then((res) => {
                if (!res.ok) throw new Error('Unauthenticated')
                return res.json()
            })
            .then((data) => {
                setUser({
                    user: data?.user || null,
                })
            })
            .catch(() => {
                // user not logged in → do nothing
            })
    }, [setUser])

    return null
}