import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SliderButtonsBlogPost } from '../components/SliderButtonsBlogPost'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

export default function Home() {
  const theme = createMuiTheme();

  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Code Samples</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <SliderButtonsBlogPost />
        </main>

      </ThemeProvider>
    </div>
  )
}
