'use client';
import { createTheme } from '@mui/material/styles';
import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#B9FF66',
            light: '#cfff96',
            dark: '#8fbf3f',
            contrastText: '#000000',
        },
        secondary: {
            main: '#F3F3F3',
            light: '#f9f9f9',
            dark: '#dbdbdb',
            contrastText: '#000000',
        },
        info: {
            main: '#191a23',
            light: '#6b6c77',
            contrastText: '#ffffff',
        },

        background: {
            default: '#FFFFFF',
            paper: '#F3F3F3',
        },
        divider: '#000000',
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: space_grotesk.style.fontFamily,
        h1: {
            fontSize: 60,
            fontWeight: 500,
        },
        h2: {
            fontSize: 40,
            fontWeight: 500,
        },
        h3: {
            fontSize: 30,
            fontWeight: 500,
        },
        h4: {
            fontSize: 20,
            fontWeight: 500,
        },
        body1: {
            fontSize: 18,
            fontWeight: 400,
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'none',
        },




    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div'
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 16,
                    lineHeight: 1.7
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 14,
                    fontFamily: space_grotesk.style.fontFamily,
                    fontWeight: 400,
                    fontSize: 20
                }
            }
        },
    },
});

export default lightTheme;
