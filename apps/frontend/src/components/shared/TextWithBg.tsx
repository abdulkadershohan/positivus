'use client'
import { ITextWithBgProps } from '@/types'
import { Typography } from '@mui/material'

export default function TextWithBg({ text, rest, bgcolor }: ITextWithBgProps) {
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
    const getColor = (color: string, theme: any) => {
        switch (color) {
            case 'primary':
                return theme.palette.primary.contrastText
            case 'secondary':
                return theme.palette.secondary.contrastText
            case 'info':
                return theme.palette.info.contrastText
            default:
                return theme.palette.primary.contrastText
        }
    }
    return (
        <Typography
            bgcolor={(theme) => getBgColor(bgcolor || 'primary', theme)}
            width={"fit-content"}
            borderRadius={"7px"}
            fontWeight={500}
            fontSize={{
                xs: "h3.fontSize",
                md: "h2.fontSize",
            }}
            sx={{
                color: (theme) => theme.palette.primary.contrastText,
            }}
            px={"7px"}
            {...rest}
        >
            {text}
        </Typography>
    )
}
