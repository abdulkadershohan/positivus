'use client';
import { ICardProps } from '@/types';
import { Stack } from '@mui/material';

export default function Card({ children, onClick, sx, bgcolor, cardProps }: ICardProps) {
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
