'use client';
import Navbar from '@/components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './globals.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00D1CD',
    },
    secondary: {
      main: '#00d1cd',
    },
    info: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily: 'Chivo',
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
