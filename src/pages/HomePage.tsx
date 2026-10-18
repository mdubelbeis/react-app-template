import { Stack, Typography } from '@mui/material';
import { ExamplesList } from '../components/ExamplesList';

export function HomePage() {
  return (
    <Stack spacing={3}>
      <Typography component='h1' variant='h3'>
        React Application Template
      </Typography>

      <ExamplesList />
    </Stack>
  );
}
