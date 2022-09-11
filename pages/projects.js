import Layout from "../components/Layout";
import Head from "next/head";
// config폴더에 있는 토큰과 데이터 베이스 id를 가져옴
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Deng's Portfolio || Projects</title>
                <meta name="description" content="댕 포트폴리오 만들기" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트</h1>
        </Layout>
    );
}

// getServerSideProps을 이용해 데이터를 가져온다.
export async function getServerSideProps() {
    // notion API doc > API Reference > Query a database > fetch에서 복사한 코드
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`, // ``으로 해줘야 한다.
        },
        body: JSON.stringify({ page_size: 100 }),
    };
    // const res = await를 추가해 res변수를 만들어준다.
    const res = await fetch(
        `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
        options
    ); // ``으로 해줘야 한다.

    const projects = await res.json(); // res를 json으로 만들어준다.
    // json파일에서 map을 사용해 필요한 데이터를 파싱해온다.
    const projectIds = projects.results.map((aProject) => {
        aProject.id;
    });

    return {
        props: {},
    };
}
