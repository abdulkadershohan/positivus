'use client';
import { createTheme } from '@mui/material/styles';
import { Space_Grotesk } from 'next/font/google';

const space_grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#B9FF66',
            light: '#cfff96',
            dark: '#8fbf3f',
            contrastText: '#000000',
        },
        secondary: {
            main: '#191a23',
            light: '#292A32',
            contrastText: '#ffffff',
        },
        info: {
            main: '#191a23',
            light: '#292A32',
            contrastText: '#ffffff',
        },
        background: {
            default: '#121212',
            paper: '#292A32',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
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
            fontSize: 20,
            fontWeight: 400,
        },
        body2: {
            fontSize: 18,
            fontWeight: 400,
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'none',
        },
        caption: {
            fontSize: 16,
            fontWeight: 400,
        },





    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1200,
            lg: 1400,
            xl: 1840
        }
    },
    spacing: 9,
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
                //   disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 14,
                    fontFamily: space_grotesk.style.fontFamily,
                    fontWeight: 400,
                    fontSize: 20,

                },
                sizeMedium: {
                    padding: '20px 35px 20px 35px',
                }

            }
        },

    },

});

export default darkTheme;
