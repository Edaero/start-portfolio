import Layout from "../components/Layout";
import Head from "next/head";
// config폴더에 있는 토큰과 데이터 베이스 id를 가져옴
import { TOKEN, DATABASE_ID } from "../config";
import Link from "next/link";

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
          <h1 className="text-xl text-end mb-5">
            Projects : {projects.results.length}
          </h1>
          <div className="flex flex-wrap">
            {projects.results.map((aProject) => (
              // eslint-disable-next-line react/jsx-key
              <div className="flex container mb-5 h-fit border-solid border-2 border-indigo-400 py-3 rounded-3xl hover:border-indigo-100">
                <div className="flex justify-center w-1/2 h-48">
                  <img className="w-2/5 " src={aProject.cover.file.url}></img>
                </div>
                <div className="flex flex-col py-5">
                  <h1>{aProject.properties.Title.title[0].plain_text}</h1>
                  <h1>
                    작업 기간 :{" "}
                    {aProject.properties["Progress date"].date.start} ~{" "}
                    {aProject.properties["Progress date"].date.end}
                  </h1>
                  <h1>
                    <Link href={aProject.properties.Github.url}>
                      Github 가기
                    </Link>
                  </h1>
                </div>
              </div>
            ))}
          </div>
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
  console.log(projects);
  return {
    // 프로젝트 이름이 있는 배열을 props로 보내준다.
    props: { projects },
  };
}
