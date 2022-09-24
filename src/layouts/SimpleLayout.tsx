import React, { ReactNode } from 'react';

import { Header, Footer } from 'components';
type Props = {
  children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SimpleLayout;
