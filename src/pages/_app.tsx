import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SEO title="Nutrition by FKM" description="Sebuah website yang diperuntukkan untuk meningkatkan kepedulian atas kesehatan gizi terutma di kalangan remaja" />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
