import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { SliderButtons } from '../components/SliderButtons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Samples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SliderButtons />
      </main>

    </div>
  )
}
