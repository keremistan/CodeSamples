import Head from 'next/head'
import { SliderButtonsBlogPost } from '../components/SliderButtonsBlogPost'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

export default function Home() {
  const theme = createMuiTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Code Samples</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <SliderButtonsBlogPost />
        </main>

      </ThemeProvider>
    </div>
  )
}
