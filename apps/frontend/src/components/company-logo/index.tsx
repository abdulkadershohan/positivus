import { Container, Stack } from '@mui/material'
import Image from 'next/image'

const data = [
    {
        src: "/images/company-logo/logo1.svg",
        alt: "Logo 1",
    },
    {
        src: "/images/company-logo/logo2.svg",
        alt: "Logo 2",
    },
    {
        src: "/images/company-logo/logo3.svg",
        alt: "Logo 3",
    },
    {
        src: "/images/company-logo/logo4.svg",
        alt: "Logo 4",
    },
    {
        src: "/images/company-logo/logo5.svg",
        alt: "Logo 5",
    },
    {
        src: "/images/company-logo/logo6.svg",
        alt: "Logo 6",
    },
]
export default function CompanyLogo() {
    return (
        <Container maxWidth='lg'>
            <Stack direction='row' gap={{
                xs: 2,
                md: 10
            }}
                flexWrap={'wrap'}
            >
                {
                    data.map((logo, index) => (
                        <Image
                            src={logo.src}
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
