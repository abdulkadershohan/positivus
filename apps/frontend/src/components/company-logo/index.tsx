import { data } from '@fakeData/index'
import { Container, Stack } from '@mui/material'
import Image from 'next/image'


export default function CompanyLogo() {
    const { company_logo } = data
    return (
        <Container maxWidth='lg'>
            <Stack direction='row' gap={{
                xs: 2,
                md: 10
            }}
                flexWrap={'wrap'}
            >
                {
                    company_logo.map((logo, index) => (
                        <Image
                            src={logo.url}
                            alt={logo.alt}
                            key={index}
                            width={125}
                            height={48}
                        />
                    ))

                }
            </Stack>
        </Container>
    )
}
