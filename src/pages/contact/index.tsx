import { Wrapper as MapWrapper, Status } from '@googlemaps/react-wrapper';

import Head from 'next/head';
import Map from '@components/Map';
import Marker from '@components/Marker';
import type { NextPage } from 'next';
import { ReactElement } from 'react';
import useBreakpoints from '@hooks/useBreakpoints';

const Contact: NextPage = () => {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const center: google.maps.LatLngLiteral = {
    lat: 13.7677238,
    lng: 100.6776538,
  };
  const zoom = 19.51;
  const position = { lat: 13.767917497113437, lng: 100.67764904834 };
  const markerTitle = 'อาจารย์ "โปร" Electrical Services';
  const markerLabelStyle = {
    text: markerTitle,
    fontFamily: 'EQ TH',
    fontWeight: 'bold',
    color: 'black',
    fontSize: isXs
      ? '17px'
      : isSm
      ? '20px'
      : isMd
      ? '24px'
      : isLg
      ? '28px'
      : '32px',
  };

  const renderMap = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <h3>Not working</h3>;
    // return null;
  };
  return (
    <>
      <Head>
        <title>Ajarn &quot;PRO&quot; - Contact</title>
        <meta
          name='description'
          content='รับเหมาไฟฟ้า ติดตั้งระบบไฟฟ้า เหมาไฟฟ้า เดินสายไฟ เดินไฟเมน วางระบบไฟฟ้า เดินไฟโรงงาน งานไฟฟ้า ตรวจไฟฟ้า ประกอบตู้ไฟฟ้า ตู้คอนโทรลไฟฟ้า หม้อแปลงไฟฟ้า'
        />
        <meta name='title' content='Ajarn "PRO" -  Electrical Services' />

        <meta
          property='og:title'
          content='รับแก้ไขระบบไฟฟ้า รับเดินสายไฟ เดินราง รับลากสาย รับทำ Cable Tray,Wireway Cabinet,Cable Ladder รับซ่อมบำรุง รับปรับปรุง ดูแลระบบไฟฟ้าโรงงาน อุตสาหกรรรม ควบคุม'
        />
        <meta
          property='og:description'
          content='รับตรวจระบบไฟฟ้า ปรับปรุงระบบไฟฟ้า รับทำตู้ Control Panel แบบต่างๆ ตามความต้องการ'
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
        <section className='p-8 h-full'>
          <MapWrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
            render={renderMap}
          >
            <Map center={center} zoom={zoom}>
              <Marker
                position={position}
                label={markerLabelStyle}
                title={markerTitle}
              />
            </Map>
          </MapWrapper>
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
