import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import lightTheme from './lightTheme'

export default function ThemeProvider2({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider theme={lightTheme}>
            {children}
        </MuiThemeProvider>
    )
}
