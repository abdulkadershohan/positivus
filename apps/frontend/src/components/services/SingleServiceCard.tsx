import { IService } from '@/types'
import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../shared/Card'
import IconBox from '../shared/IconBox'
import TextWithBg from '../shared/TextWithBg'

const SingleServiceCard = ({ title, text, image, button, bgcolor, color, iconColor, iconBgColor, iconLabelColor }: IService) => {
    const imageUrl = image?.image?.data?.attributes?.url
    return (
        <Card
            bgcolor={bgcolor}
            sx={{
                '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                    cursor: 'pointer',
                },
            }}

        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {title &&
                        <TextWithBg text={title} bgcolor={color}
                            rest={{
                                fontSize: {
                                    xs: 26,
                                    md: 'h3.fontSize'
                                }
                            }}
                        />
                    }
                    {text &&
                        <TextWithBg text={text} bgcolor={color}
                            rest={{
                                fontSize: {
                                    xs: 26,
                                    md: 'h3.fontSize'
                                }
                            }}
                        />
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction={'row'}
                        gap={4}
                        alignItems={'flex-end'}
                    >
                        {button &&
                            <Box
                                sx={{
                                    display: {
                                        sm: 'none',
                                        xs: 'block'
                                    }
                                }}
                                component={Link}
                                href={button?.href || '#'}
                                target={button?.target || '_self'}
                            >
                                <IconBox
                                    bgcolor={iconBgColor}
                                    iconColor={iconColor}

                                />
                            </Box>
                        }
                        {imageUrl &&
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: {
                                        xs: 130,
                                        md: 210
                                    },
                                    overflow: 'hidden',

                                }}
                            >
                                <Image
                                    src={imageUrl}
                                    alt={image?.alt || title || 'image'}
                                    fill={true}
                                />
                            </Box>
                        }

                    </Stack>

                </Grid>
            </Grid>
            <Box py={2} />
            {button &&
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block'
                        },
                        textDecoration: 'none',
                    }}
                    component={Link}
                    href={button?.href || '#'}
                    target={button?.target || '_self'}
                >
                    <IconBox
                        bgcolor={iconBgColor}
                        iconColor={iconColor}
                        label={button?.title}
                        labelColor={iconLabelColor}

                    />
                </Box>
            }
        </Card>
    )
}
export default SingleServiceCard

