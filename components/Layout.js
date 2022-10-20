import Header from "./Header";
import Footer from "./Footer";

// Layout을 만들어 모든 페이지에 Header와 Footer가 들어갈 수 있도록 설계
export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
