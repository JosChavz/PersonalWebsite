import { ThemeProvider } from '@mui/joy';
import React from 'react';
import theme from '../../theme';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
