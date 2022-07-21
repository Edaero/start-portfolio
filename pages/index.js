import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>댕 포트폴리오</title>
        <meta name="description" content="댕 포트폴리오 만들기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>화면</h1>
    </div>
  )
}
