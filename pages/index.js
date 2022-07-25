import Head from 'next/head'
import Hero from '../components/home/Hero'
import Animation from '../components/home/Animation'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* 타이틀 */}
      <Head> 
        <title>댕 포트폴리오 | Home</title>
        <meta name="description" content="댕 포트폴리오 만들기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <Hero />
            </div>
      </section>
    </Layout>
  )
}