'use client'
import darkTheme from '@/themes/darkTheme';
import lightTheme from '@/themes/lightTheme';
import { ThemeProvider } from '@mui/material';
import { useTheme } from 'next-themes';
import React, { useEffect, useMemo, useState } from 'react';

export const NextThemeConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const { resolvedTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const theme = useMemo(() => resolvedTheme === 'light' ? lightTheme : darkTheme, [resolvedTheme]);

    if (!mounted) return <div style={{ visibility: 'hidden' }} />

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};
