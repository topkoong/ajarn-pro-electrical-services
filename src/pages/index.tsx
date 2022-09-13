// import Head from 'next/head';
// import Image from 'next/image';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className='container p-8'>
      <section
        className={`h-full w-full p-8 md:p-20 bg-center bg-no-repeat bg-cover bg-[url('https://d2wvwvig0d1mx7.cloudfront.net/data/org/22246/media/img/cache/1920x0/2301752_1920x0.jpg')]`}
      >
        <h1 className='z-10 my-2 text-center uppercase text-[#DFB614] font-bold text-xl md:text-2xl'>
          Residential Electrical Repair and Installation Services in Bangkok
          area
        </h1>
        <h2 className='z-10 my-2 text-center uppercase text-white font-bold text-lg'>
          Your Local Electricians in Bangkok
        </h2>
        <h3 className='z-10 my-2 text-center uppercase text-white font-semibold text-base'>
          Welcome to Ajarn &quot;PRO&quot; Electrical Services. The Best Value
          Electricians Since 2020!
        </h3>
      </section>
      <section className='my-8 w-full grid grid-cols-1 grid-rows-1 md:grid-cols-3'>
        <div className='col-span-1 flex justify-center'>
          <img src='https://www.keefes.com/wp-content/uploads/2022/05/Panel-box-06-1479x1536.jpg' />
        </div>
        <article className='h-full col-span-1 md:col-span-2 md:flex md:flex-col md:justify-center p-2 md:p-4'>
          <h4 className='text-center font-semibold text-[#363845] text-lg'>
            Have you been looking for the best electricians in Bangkok who can
            get the job done right for a fair price? Look no further!
          </h4>
        </article>
      </section>
      <section className='my-8 w-full'>
        <h3 className='my-2 text-center text-[#363845] font-bold text-xl md:text-2xl'>
          บริษัทมีความชำนาญและเชี่ยวชาญในการออกแบบระบบควบคุมอัตโนมัติ
          งานออกแบบเขียนโปรแกรมควบคุมเครื่องจักร
          งานประกอบตู้คอนโทรลและงานติดตั้ง
        </h3>
        <ul>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับเหมาทำระบบไฟฟ้า ติดตั้งระบบไฟฟ้า เดินไฟฟ้า วางระบบไฟฟ้า
            ตรวจไฟฟ้าประจำปี โรงงาน สำนักงาน คลังสินค้า โรงแรม ร้านค้า บ้าน
            เรามีวิศวกร และทีมงานคุณภาพ
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            บริการสำรวจ ออกแบบ ติดตั้ง ทดสอบ และซ่อมบำรุงรักษา
            ในส่วนระบบไฟฟ้ากำลัง เช่น งานระบบไฟฟ้าในสถานีโครงข่ายโทรศัพท์มือถือ
            งานดูแลบำรุงรักษาระบบไฟฟ้าในอาคาร สถานีรถไฟฟ้าใต้ดิน
            งานก่อสร้างเปลี่ยนระบบสายไฟฟ้าอากาศเป็นสายไฟฟ้าลงดิน
            ตลอดจนการซ่อมบำรุงระบบไฟฟ้าในอาคารสำนักงานต่างๆ
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับทำระบบควบคุมอัตโนมัติ Automation ด้วย PLC, SCADA, HMI
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับทำตู้ Control Panel แบบต่างๆ ตามความต้องการ
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับไวริ่งตู้ควบคุมไฟฟ้าทุกชนิด
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับทำตู้คอนโทรลพร้อมติดตั้งและเขียนโปรแกรมควบคุมเครื่องจักร
          </li>
          <li className='my-4 font-semibold text-[#363845]'>
            <span className='font-extrabold text-[#DFB614] mr-2 text-2xl'>
              -
            </span>
            รับเขียนโปรแกรม PLC ติดต่อ Touch screen , HMI , PANEL
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
