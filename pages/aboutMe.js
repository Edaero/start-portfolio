import Layout from "../components/Layout";
import Head from "next/head";
import Hero from "../components/home/Hero";

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>Deng{"'"}s Portfolio || About me</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container lg:max-w-7xl mt-24 content mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                    <h1>자기소개 페이지</h1>
                </div>
            </section>
        </Layout>
    );
}
