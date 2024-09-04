'use client';
import { data } from '@fakeData/index';
import MenuIcon from '@mui/icons-material/Menu';
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

export default function DrawerAppBar(props: Props) {
    const { logo, navItems, button } = data?.layout?.header || {};
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
                    src={logo?.lightLogo?.url}
                    alt="logo"
                    width={200}
                    height={56}
                />
            </NextLink>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={Math.random()} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                                src={logo?.lightLogo?.url}
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
                                src={logo?.lightLogo?.url}
                                alt="mui-logo"
                                width={200}
                                height={56}
                            />
                        </Box>

                        <Stack spacing={6} direction={'row'} sx={{ display: { xs: 'none', md: 'block' } }}>
                            {navItems.map((item) => (
                                <Typography
                                    key={Math.random()}
                                    color={(theme) => theme.palette.text.primary}
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
                                    }}
                                    target={item?.target || '_self'}
                                >
                                    {item?.title}
                                </Typography>
                            ))}
                            <Button
                                variant='outlined'
                                color='info'
                                size='medium'
                                LinkComponent={NextLink}
                                href={button?.href}
                            >
                                {button?.title}
                            </Button>
                        </Stack>
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
