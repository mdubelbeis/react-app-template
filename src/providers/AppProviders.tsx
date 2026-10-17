import type { ReactNode } from 'react';
import { MuiProvider } from './MuiProvider';
import { QueryProvider } from './QueryProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <MuiProvider>{children}</MuiProvider>
    </QueryProvider>
  );
}
