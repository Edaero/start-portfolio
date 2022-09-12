import Link from "next/link";

export default function Footer() {
    // https://tailblocks.cc/ 사용
    return (
        <div>
            <footer className="body-font min-w-full">
                <div>
                    <div className="container lg:max-w-7xl px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link href="/">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <span className="ml-3 text-xl">
                                    Deng{"'"}s Portfolio
                                </span>
                            </a>
                        </Link>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            © 2020 Deng — FrontEnd Developer
                        </p>

                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link href="https://github.com/Edaero">
                                <a className="ml-3 text-gray-500">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://dengcode.tistory.com/">
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
