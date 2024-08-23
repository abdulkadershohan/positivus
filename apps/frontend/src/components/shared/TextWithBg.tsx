'use client'
import { Typography, TypographyProps } from '@mui/material'
type TextWithBgProps = {
    text: string
    rest?: TypographyProps
    bgcolor: 'primary' | 'secondary' | 'info'
}
export default function TextWithBg({ text, rest, bgcolor }: TextWithBgProps) {
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
            color={(theme) => getColor(bgcolor || 'primary', theme)}
            width={"fit-content"}
            borderRadius={"7px"}
            fontWeight={500}
            fontSize={{
                xs: "h3.fontSize",
                md: "h2.fontSize",
            }}
            px={"7px"}
            {...rest}
        >
            {text}
        </Typography>
    )
}
