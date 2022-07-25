import Layout from "../components/Layout";
import Head from 'next/head'

export default function AboutMe() {
    return (
        <Layout>
            <Head> 
                <title>댕 포트폴리오 | About me</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>자기소개 페이지</h1>
        </Layout>
    )
}