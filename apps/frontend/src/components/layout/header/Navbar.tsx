'use client';
import useThemeToggle from '@/next-theme/useThemeToggle';
import { ILayoutData } from '@/types/layout';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Button, Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import NextLink from 'next/link';
import * as React from 'react';

interface Props {
    window?: () => Window;
    children?: React.ReactNode;
}
const drawerWidth = 240;

export default function DrawerAppBar({ data, ...props }: { data: ILayoutData } & Props) {
    const { toggleTheme, mode } = useThemeToggle();
    const { button, menu } = data?.attributes?.header || {};
    const { logo } = data?.attributes || {};
    const lightLogo = logo?.light_logo?.image?.data?.attributes?.url;
    const darkLogo = logo?.dark_logo?.image?.data?.attributes?.url;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <NextLink
                href="/"
                passHref
            >
                <Image
                    src={mode === 'light' ? lightLogo : darkLogo}
                    alt="logo"
                    width={200}
                    height={56}
                />
            </NextLink>
            <Divider />
            <List>
                {menu.map((item) => (
                    <ListItem key={Math.random()} disablePadding component={NextLink} href={item?.href} target={item.target || '_self'} >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title}
                                sx={{
                                    color: (theme) => theme.palette.text.primary,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <IconButton sx={{ ml: 1, color: (theme) => theme.palette.text.primary, display: { sm: 'none', xs: 'block' } }} onClick={toggleTheme}>
                    {mode === 'dark' ? <NightlightIcon /> : <LightModeIcon />}
                </IconButton>
            </Box>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <AppBar
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    py: { xs: 0, md: 2 },
                }}
                position='sticky'
                elevation={0}
            >
                <Container maxWidth={'lg'} >
                    <Toolbar disableGutters>
                        {/* mobile screen icon and logo */}
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            width={'100%'}
                            display={{ xs: 'flex', md: 'none' }}
                        >
                            <Image
                                src={mode === 'light' ? lightLogo : darkLogo}
                                alt="logo"
                                width={200}
                                height={56}
                            />
                            <Box>
                                <IconButton
                                    color="inherit"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Stack>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                            <Image
                                src={mode === 'light' ? lightLogo : darkLogo}
                                alt="mui-logo"
                                width={200}
                                height={56}
                            />
                        </Box>

                        <Stack spacing={6} direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>
                            {menu.map((item) => (
                                <Typography
                                    key={Math.random()}
                                    fontWeight={400}
                                    fontSize={20}
                                    component={NextLink}
                                    href={item?.href}
                                    sx={{
                                        textDecoration: 'none',
                                        // i need bottom line on hover after 
                                        "&:hover": {
                                            borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
                                        },
                                        color: (theme) => theme.palette.text.primary
                                    }}
                                    target={item?.target || '_self'}
                                >
                                    {item?.title}
                                </Typography>
                            ))}
                            <Button
                                variant='outlined'
                                color={mode === 'light' ? 'info' : 'inherit'}
                                size='medium'
                                LinkComponent={NextLink}
                                href={button?.href}
                            >
                                {button?.title}
                            </Button>
                        </Stack>
                        <IconButton sx={{ ml: 1, color: (theme) => theme.palette.text.primary, display: { sm: 'block', xs: 'none' } }} onClick={toggleTheme}>
                            {mode === 'dark' ? <NightlightIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </React.Fragment>

    );
}
