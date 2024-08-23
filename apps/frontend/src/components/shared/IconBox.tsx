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
        // <Box
        //     onClick={onClick}
        // >
        //     <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="20.5" cy="20.5" r="20.5" fill={bgcolor} />
        //         <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill={iconColor} />
        //     </svg>
        //     <Typography
        //         variant="h4"
        //         fontWeight={400}
        //         fontSize={20}
        //         {...labelProps}
        //     >
        //         {label}
        //     </Typography>
        // </Box>
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
            <Typography
                variant="h4"
                fontWeight={400}
                fontSize={20}
                color={labelColor || 'text.primary'}
                {...labelProps}
            >
                {label}
            </Typography>
        </Stack>
    )
}
