import IconBox from "@/components/shared/IconBox";
import { Button, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Stack
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <Typography>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <IconBox
        bgcolor="#f00"
        iconColor="#fff"
      />
      <Stack spacing={2}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button variant="contained" color="info">
          Info Button
        </Button>
        <Button variant="outlined" color="info">
          outlined Button
        </Button>
      </Stack>

    </Stack>
  )
}
