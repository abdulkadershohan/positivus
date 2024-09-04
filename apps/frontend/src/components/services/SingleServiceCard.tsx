import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../shared/Card'
import IconBox from '../shared/IconBox'
import TextWithBg from '../shared/TextWithBg'
type ISingleServiceProps = {
    title: string;
    text: string;
    image: string;
    link: string;
    bgcolor: 'primary' | 'secondary' | 'info'
    color: 'primary' | 'secondary' | 'info';
    iconColor: 'primary' | 'secondary' | 'info';
    iconBgColor: 'primary' | 'secondary' | 'info';
    labelColor?: 'text.primary' | 'text.secondary' | 'text.info';
    id?: number;
    btnTitle: {
        title: string;
        link: string;
        target: "_blank" | "_self" | "_parent" | "_top";
    }
};
const SingleServiceCard = ({ btnTitle, title, text, image, link, bgcolor, color, iconColor, iconBgColor, labelColor }: ISingleServiceProps) => {
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
                    <TextWithBg text={title} bgcolor={color}
                        rest={{
                            fontSize: {
                                xs: 26,
                                md: 'h3.fontSize'
                            }
                        }}
                    />
                    <TextWithBg text={text} bgcolor={color}
                        rest={{
                            fontSize: {
                                xs: 26,
                                md: 'h3.fontSize'
                            }
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction={'row'}
                        gap={4}
                        alignItems={'flex-end'}
                    >
                        <Box
                            sx={{
                                display: {
                                    sm: 'none',
                                    xs: 'block'
                                }
                            }}
                        >
                            <IconBox
                                bgcolor={iconBgColor}
                                iconColor={iconColor}

                            />
                        </Box>
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
                                src={image}
                                alt={title}
                                fill={true}
                            />
                        </Box>
                    </Stack>

                </Grid>
            </Grid>
            <Box py={2} />
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'block'
                    },
                    textDecoration: 'none',
                }}
                component={Link}
                href={link}
            >
                <IconBox
                    bgcolor={iconBgColor}
                    iconColor={iconColor}
                    label={btnTitle.title}
                    labelColor={labelColor}

                />
            </Box>
        </Card>
    )
}
export default SingleServiceCard

