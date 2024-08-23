import CallMadeIcon from '@mui/icons-material/CallMade';
import { Box, Stack, Typography, TypographyProps } from "@mui/material";
type IconBoxProps = {
    bgcolor?: string;
    iconColor?: string;
    onClick?: () => void;
    label?: string;
    labelProps?: TypographyProps,
    labelColor?: string
};
export default function IconBox({ bgcolor = 'white', iconColor = '#B9FF66', onClick, label, labelProps, labelColor }: IconBoxProps) {
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
            onClick={onClick}
            direction="row"
            alignItems="center"
            gap={2}
        >
            <Box
                sx={{
                    height: 41,
                    width: 41,
                    borderRadius: '50%',
                    bgcolor: (theme) => getBgColor(bgcolor || 'primary', theme),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CallMadeIcon
                    sx={{
                        color: (theme) => getBgColor(iconColor || 'primary', theme),
                    }}
                />
            </Box>
            {label && <Typography
                variant="h4"
                fontWeight={400}
                fontSize={20}
                color={labelColor || 'text.primary'}
                {...labelProps}
            >
                {label}
            </Typography>
            }
        </Stack>
    )
}
