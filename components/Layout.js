import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <h1>레이아웃</h1>
            <div>{children}</div>
            <Footer />
        </>
    );
}