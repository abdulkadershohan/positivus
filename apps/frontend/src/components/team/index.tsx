'use client';
import { ITeamComponent } from '@/types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../shared/Card';
import TextWithBg from '../shared/TextWithBg';

export default function Team({ data }: ITeamComponent) {
    const { description, members, title, button } = data || {}
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
            <Container maxWidth='lg' id='team'>
                <Stack spacing={6}>
                    <Stack
                        direction={{
                            xs: 'column',
                            md: 'row',
                        }}
                        gap={6}
                        alignItems={'center'}
                    >
                        {title &&
                            <TextWithBg text={title} bgcolor="primary" />
                        }
                        {description &&
                            <Typography
                                sx={{
                                    color: (theme) => theme.palette.text.primary
                                }}
                                maxWidth={{
                                    xs: 390,
                                    md: 580,
                                }}
                                fontSize={{
                                    xs: 'caption.fontSize',
                                    md: 'body2.fontSize',
                                }}
                                textAlign={{
                                    xs: 'center',
                                    md: 'left',
                                }}
                            >
                                {description}
                            </Typography>
                        }
                    </Stack>
                    <Stack>
                        <Grid container spacing={4}>
                            {
                                members && members?.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={item.id}
                                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        <Card
                                            sx={{
                                                bgcolor: 'none',
                                                position: 'relative',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                    cursor: 'pointer',
                                                },
                                            }}
                                        >
                                            <Stack spacing={4}>
                                                <Stack direction={'row'} gap={2}>
                                                    <Image
                                                        src={item?.image?.image?.data?.attributes?.url}
                                                        alt={item?.name || 'team member'}
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <Stack justifyContent={'flex-end'}>
                                                        <Typography
                                                            variant='h4'
                                                            fontWeight={500}
                                                            fontSize={{
                                                                xs: 'body2.fontSize',
                                                                md: 'h4.fontSize',
                                                            }}
                                                            sx={{
                                                                color: (theme) => theme.palette.text.primary
                                                            }}
                                                        >
                                                            {item?.name}
                                                        </Typography>
                                                        <Typography
                                                            variant='h4'
                                                            fontWeight={500}
                                                            fontSize={{
                                                                xs: 'caption.fontSize',
                                                                md: 'body2.fontSize',
                                                            }}
                                                            sx={{
                                                                color: (theme) => theme.palette.text.primary
                                                            }}
                                                        >
                                                            {item?.role}
                                                        </Typography>
                                                    </Stack>

                                                </Stack>
                                                <Divider />
                                                {item?.description &&
                                                    <Typography
                                                        variant='h4'
                                                        fontWeight={500}
                                                        fontSize={{
                                                            xs: 'caption.fontSize',
                                                            md: 'body2.fontSize',
                                                        }}
                                                        sx={{
                                                            color: (theme) => theme.palette.text.primary
                                                        }}
                                                    >
                                                        {item?.description}
                                                    </Typography>
                                                }
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 25,
                                                        bgcolor: (theme) => theme.palette.info.main,
                                                        borderRadius: '50%',
                                                        height: 40,
                                                        width: 40,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                    component={Link}
                                                    href={item?.linkedin}
                                                    target='_blank'

                                                >
                                                    <LinkedInIcon color='primary' />
                                                </Box>

                                            </Stack>
                                        </Card>
                                    </Grid>


                                ))
                            }
                        </Grid>
                        {button &&
                            <Stack spacing={4} pt={4} alignItems={{
                                xs: 'center',
                                md: 'flex-end',
                            }}>
                                <Button
                                    variant='contained'
                                    color='info'
                                    sx={{
                                        '&:hover': {
                                            bgcolor: (theme) => theme.palette.primary.main,
                                            color: (theme) => theme.palette.primary.contrastText
                                        },
                                    }}
                                    LinkComponent={Link}
                                    href={button?.href}
                                    target={button?.target || '_self'}
                                >
                                    {button?.title}
                                </Button>
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
