import Head from 'next/head';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
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
            Stay in the loop
          </h1>
          <h2 className='my-2 text-center text-[#363845] font-bold text-lg md:text-xl'>
            Address your challenge with Ajarn &quot;PRO&quot; Electric Field
            Services
          </h2>
        </section>
        <section className='p-8'>
          <h2 className='my-4 text-center text-[#363845] font-bold text-lg md:text-xl'>
            General Contact
          </h2>
          <p className='my-4 text-center text-[#363845] font-semibold text-base'>
            Content....
          </p>
          <h2 className='my-4 text-center text-[#363845] font-bold text-lg md:text-xl'>
            Service Request
          </h2>
          <p className='my-4 text-center text-[#363845] font-semibold text-base'>
            SUBMIT A SERVICE REQUEST and we will get back to you.
          </p>
        </section>
        <section className='p-8'>
          <h2 className='my-8 text-center text-[#363845] font-bold text-lg md:text-xl'>
            KEEPING YOUR HOME HAPPY!
          </h2>
          <p className='my-8 text-center text-[#363845] font-semibold text-base'>
            Schedule Online Today
          </p>
          <ul className='my-8 flex justify-center'>
            <li>
              <img
                src='./icons/line.svg'
                alt='LineIcon'
                className='w-8 h-8 mx-2'
              />
            </li>
            <li>
              <a href='#'>
                <img
                  src='./icons/facebook.svg'
                  alt='FacebookIcon'
                  className='w-8 h-8 mx-2'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <img
                  src='./icons/instagram.svg'
                  alt='InstagramIcon'
                  className='w-8 h-8 mx-2'
                />
              </a>
            </li>
            <li>
              <a href='#'>
                <img
                  src='./icons/youtube.svg'
                  alt='YouTubeIcon'
                  className='w-8 h-8 mx-2'
                />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Contact;
