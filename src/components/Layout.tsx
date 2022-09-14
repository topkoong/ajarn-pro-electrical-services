import { FunctionComponent, PropsWithChildren } from 'react';

import Navbar from '@components/Navbar';

const Layout: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
