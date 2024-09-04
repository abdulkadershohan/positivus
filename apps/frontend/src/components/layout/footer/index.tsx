'use client'
import TextWithBg from '@/components/shared/TextWithBg'
import { data } from '@fakeData/index'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Container, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    const { logo, navItems, contact, form, button, social, copyright } = data?.layout?.footer || {}
    return (
        <div data-aos="fade-up"
        >
            <Container maxWidth='lg'>
                <Paper
                    sx={{
                        mt: 8,
                        p: {
                            xs: 2,
                            md: 4
                        },
                        borderTopLeftRadius: 45,
                        borderTopRightRadius: 45,
                        bgcolor: (theme) => theme.palette.info.main
                    }}
                    elevation={0}
                >
                    <Stack gap={4}>
                        <Stack
                            direction={{
                                xs: 'column',
                                md: 'row'
                            }}
                            alignItems={'center'}
                            justifyContent={{
                                xs: 'center',
                                md: 'space-between'
                            }}

                        >
                            <Box >
                                <Image
                                    src={logo.darkLogo.url}
                                    alt="positivus-logo"
                                    width={200}
                                    height={56}
                                />
                            </Box>
                            <Stack gap={{
                                xs: 2,
                                md: 4
                            }}
                                direction={{
                                    xs: 'column',
                                    md: 'row'
                                }}
                            >
                                {
                                    navItems.map((item) => (
                                        <Typography key={Math.random()}
                                            fontSize={{
                                                xs: 'caption.fontSize',
                                                md: 'subtitle1.fontSize'
                                            }}
                                            textAlign={'center'}
                                            color={(theme) => theme.palette.text.secondary}
                                            component={Link}
                                            href={item.href}
                                            target={item.target}
                                        >
                                            {item.title}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                            <Stack
                                direction={'row'}
                                gap={2}
                                display={{
                                    xs: 'none',
                                    md: 'flex'
                                }}
                            >
                                <Box component={Link} href={social.linkedin} target='_blank'>
                                    <LinkedInIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                                <Box component={Link} href={social.facebook} target='_blank'>
                                    <FacebookIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                                <Box component={Link} href={social.twitter} target='_blank'>
                                    <TwitterIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            </Stack>

                        </Stack>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={5.5}>
                                <Stack gap={1}>
                                    <Stack alignItems={{
                                        xs: 'center',
                                        md: 'flex-start'
                                    }}>
                                        <TextWithBg text={contact?.title} bgcolor='primary'
                                            rest={{
                                                fontSize: {
                                                    xs: 'body2.fontSize',
                                                    md: 'body1.fontSize'
                                                },
                                            }}
                                        />
                                    </Stack>
                                    <Typography
                                        fontSize={{
                                            xs: 'caption.fontSize',
                                            md: 'body2.fontSize'
                                        }}
                                        color={(theme) => theme.palette.text.secondary}
                                        textAlign={{
                                            xs: 'center',
                                            md: 'start'
                                        }}
                                    >
                                        Email: {contact?.email}
                                    </Typography>
                                    <Typography
                                        fontSize={{
                                            xs: 'caption.fontSize',
                                            md: 'body2.fontSize'
                                        }}
                                        color={(theme) => theme.palette.text.secondary}
                                        textAlign={{
                                            xs: 'center',
                                            md: 'start'
                                        }}

                                    >
                                        Phone: {contact?.phone}
                                    </Typography>
                                    <Typography
                                        fontSize={{
                                            xs: 'caption.fontSize',
                                            md: 'body2.fontSize'
                                        }}
                                        color={(theme) => theme.palette.text.secondary}
                                        textAlign={{
                                            xs: 'center',
                                            md: 'start'
                                        }}
                                        maxWidth={{
                                            xs: '100%',
                                            md: 300
                                        }}

                                    >
                                        {contact?.address}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6.5}>
                                <Stack
                                    sx={{
                                        bgcolor: (theme) => theme.palette.info.light,
                                        px: {
                                            xs: 0,
                                            md: 4
                                        },
                                        py: 6,
                                        borderRadius: 4
                                    }}
                                >
                                    <Grid container spacing={2} alignItems={'center'} px={2} >
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                placeholder={form?.email?.placeholder}
                                                variant="outlined"
                                                sx={{
                                                    color: (theme) => theme.palette.text.primary,
                                                    '& .MuiOutlinedInput-root': {
                                                        pl: 2,
                                                        borderRadius: 4,
                                                        color: (theme) => theme.palette.text.secondary,
                                                        '& fieldset': {
                                                            color: (theme) => theme.palette.text.secondary,

                                                            borderColor: (theme) => theme.palette.text.secondary,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            color: (theme) => theme.palette.text.secondary,

                                                            borderColor: (theme) => theme.palette.text.secondary,
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                fullWidth
                                                sx={{
                                                    py: 1.6,
                                                    '&:hover': {
                                                        bgcolor: (theme) => theme.palette.info.main,
                                                        color: (theme) => theme.palette.info.contrastText
                                                    }
                                                }}
                                                LinkComponent={Link}
                                                href={button?.href}
                                                target={button?.target || '_self'}

                                            >
                                                {button.title}
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </Stack>
                            </Grid>
                        </Grid>
                        <Stack
                            direction={'row'}
                            gap={2}
                            display={{
                                xs: 'flex',
                                md: 'none'
                            }}
                            justifyContent={'center'}

                        >
                            <Box component={Link} href={social.linkedin} target='_blank'>
                                <LinkedInIcon
                                    sx={{
                                        color: (theme) => theme.palette.text.secondary,
                                        width: 30,
                                        height: 30,
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                            <Box component={Link} href={social.facebook} target='_blank'>
                                <FacebookIcon
                                    sx={{
                                        color: (theme) => theme.palette.text.secondary,
                                        width: 30,
                                        height: 30,
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                            <Box component={Link} href={social.twitter} target='_blank'>
                                <TwitterIcon
                                    sx={{
                                        color: (theme) => theme.palette.text.secondary,
                                        width: 30,
                                        height: 30,
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                        </Stack>
                        <Divider />
                        <Stack direction={{
                            xs: 'column',
                            md: 'row'
                        }}
                            gap={4}
                        >
                            <Typography
                                color={(theme) => theme.palette.text.secondary}
                                fontSize={{
                                    xs: 'caption.fontSize',
                                    md: 'body2.fontSize'
                                }}
                                textAlign={{
                                    xs: 'center',
                                    md: 'start'
                                }}
                            >
                                &copy;  {new Date().getFullYear()} {copyright?.text}
                            </Typography>
                            <Typography
                                color={(theme) => theme.palette.text.secondary}
                                fontSize={{
                                    xs: 'caption.fontSize',
                                    md: 'body2.fontSize'
                                }}
                                component={Link}
                                href={copyright?.link?.href}
                                textAlign={{
                                    xs: 'center',
                                    md: 'start'
                                }}
                                target={copyright?.link?.target}
                            >
                                {copyright?.link?.title}
                            </Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </div>
    )
}
