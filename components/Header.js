import Link from "next/link";
import DarkModeBtn from "./dark-mode-btn";

export default function Header() {
    // https://tailblocks.cc/ 사용
    return (
        <div>
            <header className="body-font fixed min-w-full">
                <div className="container lg:max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">
                                Deng{"'"}s Portfolio
                            </span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 font-bold hover:text-indigo-400">
                                Home
                            </a>
                        </Link>
                        <Link href="/aboutMe">
                            <a className="mr-5 font-bold hover:text-indigo-400">
                                About Me
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="mr-5 font-bold hover:text-indigo-400">
                                Projects
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="mr-5 font-bold hover:text-indigo-400">
                                Contact
                            </a>
                        </Link>
                    </nav>
                    <DarkModeBtn />
                </div>
            </header>
        </div>
    );
}
