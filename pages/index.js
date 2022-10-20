import Head from "next/head";
import Hero from "../components/home/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* 타이틀 */}
      <Head>
        <title>{"Deng's Portfolio || Home"}</title>
        <meta name="description" content="댕 포트폴리오 만들기" />
        <link rel="icon" href="/mococo.jpg" />
      </Head>

      <section className="flex flex-col items-center justify-center text-gray-600 body-font h-screen">
        <div className="container lg:max-w-7xl mt-24 content mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center sm">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
