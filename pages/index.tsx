import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SliderButtonsBlogPost } from '../components/SliderButtonsBlogPost'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Samples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SliderButtonsBlogPost />
      </main>

    </div>
  )
}
