import '../styles/tailwind.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ajarn &quot;PRO&quot; - Electrical Services</title>
        <meta
          name='description'
          content='รับออกแบบ ติดตั้ง งานระบบไฟฟ้า - งานบำรุงรักษา ปรับปรุงตู้ไฟฟ้า เหมาไฟฟ้า เดินสายไฟ เดินไฟเมน วางระบบไฟฟ้า เดินไฟโรงงาน งานไฟฟ้า ตรวจไฟฟ้า ประกอบตู้ไฟฟ้า ตู้คอนโทรลไฟฟ้า หม้อแปลงไฟฟ้า'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
