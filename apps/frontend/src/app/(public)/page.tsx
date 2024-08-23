import Banner from "@/components/banner/Index";
import { Container, Stack } from "@mui/material";

export default function Page() {
  return (
    <Container maxWidth='lg'>
      <Stack
        py={4}
      >
        <Banner />


      </Stack>
    </Container >
  )
}
