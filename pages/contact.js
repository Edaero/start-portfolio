import Layout from "../components/Layout";
import Head from "next/head";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{"Deng's Portfolio || Contact"}</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container lg:max-w-7xl mt-24 content mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                    <h1>연락하기</h1>
                </div>
            </section>
        </Layout>
    );
}
