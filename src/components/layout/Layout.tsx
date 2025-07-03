import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="body__container">
      <Header />
      <main className="container" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;