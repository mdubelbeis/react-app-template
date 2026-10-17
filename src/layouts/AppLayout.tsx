import { Container } from '@mui/material';
import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <Container component='main'>
      <Outlet />
    </Container>
  );
}
