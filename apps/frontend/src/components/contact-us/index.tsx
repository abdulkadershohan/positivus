'use client'
import { data } from '@fakeData/index'
import { Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import TextWithBg from '../shared/TextWithBg'

export default function ContactUs() {
    const { title, description, form, button, image } = data?.contact_us || {}
    return (
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
                        <TextWithBg text={title} bgcolor="primary" />
                        <Typography
                            color={(theme) => theme.palette.text.primary}
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
                    </Stack>
                    <Stack position={'relative'} overflow={'hidden'} sx={{ borderRadius: 10, p: { md: 6, xs: 2 }, bgcolor: (theme) => theme.palette.background.paper }} >
                        <Grid container spacing={4} >
                            <Grid item xs={12} md={6}>
                                <Stack component={'form'} gap={4}>
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
                                                form?.radio?.map((item) => (
                                                    <FormControlLabel key={item?.id} value={item?.value} control={<Radio
                                                        sx={{
                                                            color: (theme) => theme.palette.text.primary,

                                                        }}
                                                    />} label={item?.label} />
                                                ))
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            {form?.name?.label}
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder={form?.name?.placeholder}
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
                                        />
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            {form?.email?.label} *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder={form?.email?.placeholder}
                                            variant="outlined"
                                            required
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
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            {form?.message?.label} *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder={form?.message?.placeholder}
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
                                            required
                                        />
                                    </Stack>
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
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} display={{
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
                                        src={image?.url}
                                        alt="Proposal"
                                        fill={true}

                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>

                </Stack>
            </Stack>
        </Container >
    )
}
