import Layout from "../components/Layout";
import Head from "next/head";
// config폴더에 있는 토큰과 데이터 베이스 id를 가져옴
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({ projects }) {
  // console.log(projectNames);
  return (
    <Layout>
      <Head>
        <title>{"Deng's Portfolio || Contact"}</title>
        <meta name="description" content="댕 포트폴리오 만들기" />
        <link rel="icon" href="/mococo.jpg" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container h-screen lg:max-w-7xl content mx-auto px-5 py-24 md:flex-row flex-col items-center justify-center sm">
          <h1>총 프로젝트 : {projects.results.length} 개</h1>
          {projects.results.map((aProject) => (
            // eslint-disable-next-line react/jsx-key
            <h1>{aProject.properties.Title.title[0].plain_text}</h1>
          ))}
        </div>
      </section>
    </Layout>
  );
}

// 백엔드
// getServerSideProps을 이용해 데이터를 가져온다.
// 요청이 생길 때 마다 데이터를 가져온다.
export async function getServerSideProps() {
  // notion API doc > API Reference > Query a database > fetch에서 복사한 코드
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Title",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    // 프로젝트 이름이 있는 배열을 props로 보내준다.
    props: { projects },
  };
}
