import Head from "next/head";
import { Inter } from "@next/font/google";
import App from "./App/App";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title></title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="root">
        <App />
      </main>
    </>
  );
}
