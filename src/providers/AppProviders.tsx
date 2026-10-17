import type { ReactNode } from 'react';
import { MuiProvider } from './MuiProvider';

interface AppProvidersProps {
  children: ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export default AppProviders;
