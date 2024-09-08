'use client'
import TextWithBg from '@/components/shared/TextWithBg'
import { ILayoutData } from '@/types/layout'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Container, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer({ data }: { data: ILayoutData }) {
    // const { logo, menu, contact, form, button, social, copyright } = data?.layout?.footer || {}
    const { button, contact, copyright, form, menu, social } = data?.attributes?.footer || {}
    const { logo } = data?.attributes || {}
    const lightLogo = logo?.light_logo?.image?.data?.attributes?.url;
    const darkLogo = logo?.dark_logo?.image?.data?.attributes?.url;
    // check if data is empty
    if (Object.keys(data).length === 0 && data.constructor === Object) return null
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

                            {lightLogo &&
                                <Box >
                                    <Image
                                        src={darkLogo}
                                        alt="positivus-logo"
                                        width={200}
                                        height={56}
                                    />
                                </Box>
                            }

                            {menu &&
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
                                        menu?.map((item) => (
                                            <Typography key={Math.random()}
                                                fontSize={{
                                                    xs: 'caption.fontSize',
                                                    md: 'subtitle1.fontSize'
                                                }}
                                                textAlign={'center'}
                                                color='text.secondary'
                                                component={Link}
                                                href={item.href}
                                                target={item.target}
                                            >
                                                {item?.title}
                                            </Typography>
                                        ))
                                    }
                                </Stack>
                            }
                            <Stack
                                direction={'row'}
                                gap={2}
                                display={{
                                    xs: 'none',
                                    md: 'flex'
                                }}
                            >
                                {social?.linkedin &&
                                    <Box component={Link} href={social?.linkedin} target='_blank'>
                                        <LinkedInIcon
                                            sx={{
                                                color: (theme) => theme.palette.text.secondary,
                                                width: 30,
                                                height: 30,
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                }
                                {social?.facebook &&
                                    <Box component={Link} href={social?.facebook} target='_blank'>
                                        <FacebookIcon
                                            sx={{
                                                color: (theme) => theme.palette.text.secondary,
                                                width: 30,
                                                height: 30,
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                }
                                {social?.twitter &&
                                    <Box component={Link} href={social?.twitter} target='_blank'>
                                        <TwitterIcon
                                            sx={{
                                                color: (theme) => theme.palette.text.secondary,
                                                width: 30,
                                                height: 30,
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                }
                            </Stack>

                        </Stack>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={5.5}>
                                <Stack gap={1}>
                                    {contact?.title &&
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
                                    }
                                    {contact?.email &&
                                        <Typography
                                            fontSize={{
                                                xs: 'caption.fontSize',
                                                md: 'body2.fontSize'
                                            }}
                                            color='text.secondary'
                                            textAlign={{
                                                xs: 'center',
                                                md: 'start'
                                            }}
                                        >
                                            Email: {contact?.email}
                                        </Typography>
                                    }
                                    {contact?.phone &&
                                        <Typography
                                            fontSize={{
                                                xs: 'caption.fontSize',
                                                md: 'body2.fontSize'
                                            }}
                                            color='text.secondary'
                                            textAlign={{
                                                xs: 'center',
                                                md: 'start'
                                            }}

                                        >
                                            Phone: {contact?.phone}
                                        </Typography>
                                    }
                                    {contact?.address &&
                                        <Typography
                                            fontSize={{
                                                xs: 'caption.fontSize',
                                                md: 'body2.fontSize'
                                            }}
                                            color='text.secondary'

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
                                    }
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
                                        {form &&
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    fullWidth
                                                    placeholder={form?.placeholder}
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
                                        }
                                        {button &&
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
                                                    {button?.title}
                                                </Button>
                                            </Grid>
                                        }
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
                            {social?.linkedin &&
                                <Box component={Link} href={social?.linkedin} target='_blank'>
                                    <LinkedInIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            }
                            {social?.facebook &&
                                <Box component={Link} href={social?.facebook} target='_blank'>
                                    <FacebookIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            }
                            {social?.twitter &&
                                <Box component={Link} href={social?.twitter} target='_blank'>
                                    <TwitterIcon
                                        sx={{
                                            color: (theme) => theme.palette.text.secondary,
                                            width: 30,
                                            height: 30,
                                            cursor: 'pointer'
                                        }}
                                    />
                                </Box>
                            }
                        </Stack>
                        <Divider />
                        <Stack direction={{
                            xs: 'column',
                            md: 'row'
                        }}
                            gap={4}
                        >
                            {copyright?.title &&
                                <Typography
                                    color='text.secondary'
                                    fontSize={{
                                        xs: 'caption.fontSize',
                                        md: 'body2.fontSize'
                                    }}
                                    textAlign={{
                                        xs: 'center',
                                        md: 'start'
                                    }}
                                >
                                    &copy;  {new Date().getFullYear()} {copyright?.title}
                                </Typography>
                            }
                            {copyright?.button &&
                                <Typography
                                    color='text.secondary'
                                    fontSize={{
                                        xs: 'caption.fontSize',
                                        md: 'body2.fontSize'
                                    }}
                                    component={Link}
                                    href={copyright?.button?.href}
                                    textAlign={{
                                        xs: 'center',
                                        md: 'start'
                                    }}
                                    target={copyright?.button?.target || '_self'}
                                >
                                    {copyright?.button?.title}
                                </Typography>
                            }
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </div>
    )
}
