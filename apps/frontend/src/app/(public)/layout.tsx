import DrawerAppBar from '@/components/layout/header/Navbar'
import React from 'react'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <DrawerAppBar />
            {children}
        </main>
    )
}
