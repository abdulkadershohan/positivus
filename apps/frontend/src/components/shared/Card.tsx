import { Stack, StackProps, SxProps } from '@mui/material'
import React from 'react'
type CardProps = {
    children: React.ReactNode,
    onClick?: () => void
    sx?: SxProps
    cardProps?: StackProps,
    bgcolor?: 'primary' | 'secondary' | 'info'
}
export default function Card({ children, onClick, sx, bgcolor, cardProps }: CardProps) {
    const getBgColor = (color: string, theme: any) => {
        switch (color) {
            case 'primary':
                return theme.palette.primary.main
            case 'secondary':
                return theme.palette.secondary.main
            case 'info':
                return theme.palette.info.main
            default:
                return theme.palette.primary.main
        }
    }
    return (
        <Stack
            sx={{
                boxShadow: '0px 5px 0px 0px',
                borderColor: (theme) => theme.palette.text.primary,
                borderRadius: '45px',
                border: '1px solid',
                padding: '50px',
                bgcolor: (theme) => getBgColor(bgcolor || 'primary', theme),

                ...sx
            }}
            onClick={onClick}
            {...cardProps}

        >
            {children}
        </Stack>
    )
}
