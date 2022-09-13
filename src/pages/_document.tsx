import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='th'>
        <Head>
          <meta charSet='utf-8' />
          <meta property='og:type' content='website' />
          <meta
            name='description'
            content='รับเดินไฟโรงงาน ทั้งระบบ แบบครบวงจร ตั้งแต่ รับปรึกษาวางระบบไฟ
            การติดตั้งหม้อแปลง วางเสาไฟฟ้า เดินระบบไฟฟ้าแรงสูงแรงต่ำ'
          />
          <meta name='title' content='Ajarn "PRO" -  Electrical Services' />

          <meta property='og:title' content='รับออกแบบติดตั้งงานระบบไฟฟ้า' />
          <meta
            property='og:description'
            content='รับเหมาเดินสายไฟ อาคาร โรงงาน โรงแรม คอนโด ห้างสรรพสินค้า ตึก
          โครงการหมู่บ้าน ห้างร้าน บริษัท'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
