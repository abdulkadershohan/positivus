import IconBox from "@/components/shared/IconBox";
import { Stack, Typography } from "@mui/material";

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
    </Stack>
  )
}
