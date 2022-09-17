import { FunctionComponent, PropsWithChildren } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { useRef } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const navRef = useRef<HTMLHeadingElement>(null);
  const handleFooterClick = () =>
    navRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <>
      <Navbar ref={navRef} />
      {children}
      <Footer onScrollClick={handleFooterClick} />
    </>
  );
};

export default Layout;
