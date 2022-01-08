import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Box from '@mui/material/Box';
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ maxWidth: '1800px', margin: '0 auto' }}>
      <Component {...pageProps} />
    </Box>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
