import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* 타이틀 */}
      <Head> 
        <title>댕 포트폴리오</title>
        <meta name="description" content="댕 포트폴리오 만들기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
      홈 입니다.
      </h1>
    </Layout>
  )
}