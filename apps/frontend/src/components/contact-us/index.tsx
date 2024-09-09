'use client'
import { IContactUsComponent } from '@/types'
import { Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import TextWithBg from '../shared/TextWithBg'

export default function ContactUs({ data }: IContactUsComponent) {
    const { title, description, form1, button, image, form2, form3, radio } = data || {}
    const imageUrl = image?.image?.data?.attributes?.url
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
            <Container maxWidth='lg' id='contact-us' >
                <Stack spacing={6} >
                    <Stack spacing={6}>
                        <Stack
                            direction={{
                                xs: 'column',
                                md: 'row',
                            }}
                            gap={6}
                            alignItems={'center'}
                        >
                            {title && <TextWithBg text={title} bgcolor="primary" />}
                            {description && <Typography
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
                        <Stack position={'relative'} overflow={'hidden'} sx={{ borderRadius: 10, p: { md: 6, xs: 2 }, bgcolor: (theme) => theme.palette.background.paper }} >
                            <Grid container spacing={4} >
                                <Grid item xs={12} md={6}>
                                    <Stack component={'form'} gap={4}>
                                        {radio &&
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    defaultValue={0}
                                                    sx={{
                                                        color: (theme) => theme.palette.text.primary,
                                                        fontSize: {
                                                            xs: 'caption.fontSize',
                                                            md: 'body2.fontSize',
                                                        },
                                                    }}
                                                >
                                                    {
                                                        radio?.map((item) => (
                                                            <FormControlLabel key={item?.id} value={item?.value} control={<Radio
                                                                sx={{
                                                                    color: (theme) => theme.palette.text.primary,

                                                                }}
                                                            />} label={item?.label} />
                                                        ))
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                        }
                                        {form1 &&
                                            <Stack spacing={1}>
                                                <Typography
                                                    variant='caption'
                                                    sx={{
                                                        color: (theme) => theme.palette.text.primary
                                                    }}
                                                >
                                                    {form1?.label}
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    placeholder={form1?.placeholder}
                                                    variant="outlined"
                                                    sx={{
                                                        color: (theme) => theme.palette.text.primary,
                                                        '& .MuiOutlinedInput-root': {
                                                            pl: 2,
                                                            borderRadius: 4,
                                                            '& fieldset': {
                                                                borderColor: (theme) => theme.palette.text.primary,
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: (theme) => theme.palette.text.primary,
                                                            },
                                                        },
                                                    }}
                                                    required={form1?.required || false}
                                                />
                                            </Stack>
                                        }
                                        {form2 &&
                                            <Stack spacing={1}>
                                                <Typography
                                                    variant='caption'
                                                    sx={{
                                                        color: (theme) => theme.palette.text.primary
                                                    }}
                                                >
                                                    {form2?.label} {form2?.required && '*'}
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    placeholder={form2?.placeholder}
                                                    variant="outlined"
                                                    required={form2?.required || false}
                                                    sx={{
                                                        color: (theme) => theme.palette.text.primary,
                                                        '& .MuiOutlinedInput-root': {
                                                            pl: 2,
                                                            borderRadius: 4,
                                                            '& fieldset': {
                                                                borderColor: (theme) => theme.palette.text.primary,
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: (theme) => theme.palette.text.primary,
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Stack>
                                        }
                                        {form3 && <Stack spacing={1}>
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: (theme) => theme.palette.text.primary
                                                }}
                                            >
                                                {form3?.label} {form3?.required && '*'}
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                placeholder={form3?.placeholder}
                                                variant="outlined"
                                                sx={{
                                                    color: (theme) => theme.palette.text.primary,
                                                    '& .MuiOutlinedInput-root': {
                                                        pl: 2,
                                                        borderRadius: 4,
                                                        '& fieldset': {
                                                            borderColor: (theme) => theme.palette.text.primary,
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: (theme) => theme.palette.text.primary,
                                                        },
                                                    },
                                                }}
                                                multiline
                                                rows={7}
                                                required={form3?.required || false}
                                            />
                                        </Stack>
                                        }
                                        {button &&
                                            <Button
                                                variant='contained'
                                                color='info'
                                                type='submit'
                                                sx={{
                                                    '&:hover': {
                                                        bgcolor: (theme) => theme.palette.primary.main,
                                                        color: (theme) => theme.palette.primary.contrastText,
                                                    },

                                                }}
                                            >
                                                {button?.title}
                                            </Button>
                                        }
                                    </Stack>
                                </Grid>
                                {imageUrl && <Grid item xs={12} md={6} display={{
                                    xs: 'none',
                                    md: 'block'
                                }}>
                                    <Stack
                                        sx={{
                                            position: 'absolute',
                                            width: 650,
                                            height: 700,
                                            top: 0,
                                            bottom: 0,
                                            left: "72%",
                                            transform: "translateX(5%)",
                                            margin: " auto 0",

                                        }}
                                    >
                                        <Box component={Image}
                                            src={imageUrl}
                                            alt={image?.alt || 'contact us'}
                                            fill={true}

                                        />
                                    </Stack>
                                </Grid>
                                }
                            </Grid>
                        </Stack>

                    </Stack>
                </Stack>
            </Container >
        </div>
    )
}
