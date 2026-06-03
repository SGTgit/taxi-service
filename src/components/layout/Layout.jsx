import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="relative bg-[#fffaf3] text-[#0d1b2a] transition-colors duration-500 dark:bg-[#060f1e] dark:text-white">
      <div className="noise-overlay" />
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Layout;

