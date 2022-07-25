import Layout from "../components/Layout";
import Head from 'next/head'

export default function Contact() {
    return (
        <Layout>
            <Head> 
                <title>댕 포트폴리오 | Contact</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>연락하기</h1>
        </Layout>  
    );
}