import Head from 'next/head';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ajarn &quot;PRO&quot; - รับออกแบบติดตั้งงานระบบไฟฟ้า</title>
        <meta
          name='description'
          content='รับเหมาไฟฟ้า ติดตั้งระบบไฟฟ้า เหมาไฟฟ้า เดินสายไฟ เดินไฟเมน วางระบบไฟฟ้า เดินไฟโรงงาน งานไฟฟ้า ตรวจไฟฟ้า ประกอบตู้ไฟฟ้า ตู้คอนโทรลไฟฟ้า หม้อแปลงไฟฟ้า'
        />
        <meta name='title' content='Ajarn "PRO" -  Electrical Services' />

        <meta
          property='og:title'
          content='รับแก้ไขระบบไฟฟ้า รับเดินสายไฟ เดินราง รับลากสาย รับทำ Cable Tray,Wireway Cabinet,Cable Ladder รับซ่อมบำรุง รับปรับปรุง ดูแลระบบไฟฟ้าโรงงาน อุตสาหกรรรม ควบคุม'
        />
      </Head>
      <main className='container p-8'>
        <section>
          <h1 className='text-lg md:text-2xl font-bold text-center my-8 uppercase'>
            About Us
          </h1>
          <h2 className='my-2 text-center text-[#363845] font-bold text-lg md:text-xl'>
            Content is coming soon
          </h2>
        </section>
        <section className='p-8'>
          <p className='text-xs md:text-sm lg:text-base'>
            Ajarn &quot;PRO&quot; Electrical Services, Inc. (APES) is a control
            systems integration company offering expertise in custom automation
            and control systems solutions. We provide automation services from
            conception through completion on a fixed price or T&M basis. AES can
            design and develop a wide range of control systems utilizing any
            style of PLCs.
          </p>
          <p className='text-xs mt-8 md:text-sm lg:text-base'>
            Since its establishment in 2020, Ajarn &quot;PRO&quot; Electrical
            Services Company has grown to become one of Bangkok&apos;s largest
            electrical contractors with more than 90 years of successful
            service. Ajarn &quot;PRO&quot; Electric manifests its commitment to
            quality through its dedicated employees. Over 500 construction
            personnel, field electricians, professional engineers, project
            managers, designers, industrial automation professionals,
            management, and clerical staff are committed to making your project
            successful.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
