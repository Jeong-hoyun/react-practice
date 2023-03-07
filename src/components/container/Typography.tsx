import { Button, Container, Stack, Typography } from "@mui/material";

type TypographyProps = {
  layout: string;
  text: string;
  onClick: () => void;
};

export default function TypographyContainer({
  layout,
  text,
  onClick,
}: TypographyProps) {
  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {layout}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
      ></Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={onClick}>
          click
        </Button>
      </Stack>
    </Container>
  );
}
