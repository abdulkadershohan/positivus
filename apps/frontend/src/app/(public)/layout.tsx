import Footer from '@/components/layout/footer';
import DrawerAppBar from '@/components/layout/header/Navbar';
import { find } from '@/lib/strapi';
import React from 'react';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
    const { data: LayoutData, error: LayoutError } = await find(
        "layout",
        {
            populate: "deep",
            publicationState: "live"
            // locale: [language]
        },
        "no-store",
    );
    console.log(LayoutData)
    console.log(LayoutError)
    return (
        <main>
            <DrawerAppBar />
            {children}
            <Footer />
        </main>
    )
}
