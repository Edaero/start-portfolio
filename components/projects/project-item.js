import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const title = data.properties.Title.title[0].plain_text;
  const desc = data.properties.Desc.rich_text[0].plain_text;
  const dStart = data.properties["Progress date"].date.start;
  const dEnd = data.properties["Progress date"].date.end;
  const Img = data.cover.file.url;
  const url = data.properties.Github.url;
  return (
    <>
      <div className="flex container mb-5 h-fit border-solid border-4 border-indigo-400 py-3 rounded-3xl hover:border-indigo-200 justify-center align-center font-semibold">
        <div className="flex justify-center w-1/2 h-64 mx-3">
          <Image src={Img} width="400%" height="100%" objectFit="contain" />
        </div>
        <div className="flex flex-col w-1/2 py-5 gap-5 justify-center">
          <h1>{title}</h1>
          <h1>{desc}</h1>
          <h1>
            작업 기간 : {dStart} ~ {dEnd}
          </h1>
          <h1>
            <Link href={url}>Github 가기</Link>
          </h1>
        </div>
      </div>
    </>
  );
}
