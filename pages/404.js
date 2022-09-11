import Layout from "../components/Layout";
import Head from "next/head";

export default function NotFound() {
    return (
        <Layout>
            <Head>
                <title>Deng's Portfolio || error</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>잘못된 경로입니다.</h1>
        </Layout>
    );
}
