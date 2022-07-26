import '../styles/globals.css'
// https://github.com/pacocoursey/next-themes에서 가져온 넥스트테마(다크모드 사용을 위해 가져옴)
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp