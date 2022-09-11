import Animation from "./Animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:max-w-xl2 md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Welcome <br></br>
                    My portfolio!
                </h1>
                <p className="mb-8 leading-relaxed">
                    안녕하세요!{" "}
                    <span className="text-indigo-300 text-lg">
                        꾸준히 성장하는 개발자
                    </span>{" "}
                    이주영입니다.<br></br>
                    <span className="text-indigo-300 text-lg">
                        도전적인 실천
                    </span>
                    을 통해 자신의 성장을 체감하는 걸 좋아합니다.<br></br>
                    <span className="text-indigo-300 text-lg">
                        사용자의 편의를 위한 개발
                    </span>
                    을 하는 개발자가 되고 싶습니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/aboutMe">
                        <a className="inline-flex text-gray-200 hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            자기소개서 보러가기
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="ml-4 inline-flex text-gray-200 hover:text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
