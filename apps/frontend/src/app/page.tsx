import { Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Stack
      sx={{
        bgcolor: '#f00'
      }}
    >
      <Typography>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
    </Stack>
  )
}
