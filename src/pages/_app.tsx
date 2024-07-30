import Navbar from "@/components/Navbar/navbar";
import { createGlobalStyle } from 'styled-components';
import "@/styles/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }
`;
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Component {...pageProps} />
    </>

  );
}  
