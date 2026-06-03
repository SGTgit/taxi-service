import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Layout from './components/layout/Layout.jsx';
import StructuredData from './components/ui/StructuredData.jsx';
import ErrorBoundary from './components/ui/ErrorBoundary.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import PackagesPage from './pages/PackagesPage.jsx';
import PriceCalculatorPage from './pages/PriceCalculatorPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import PackageDetailPage from './pages/PackageDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          {/* LocalBusiness JSON-LD — global, appears on every page */}
          <StructuredData />
          <ErrorBoundary>
            <Layout>
              <Routes>
              <Route path="/"            element={<HomePage />} />
              <Route path="/about"       element={<AboutPage />} />
              <Route path="/services"    element={<ServicesPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/packages"    element={<PackagesPage />} />
              <Route path="/calculator"  element={<PriceCalculatorPage />} />
              <Route path="/gallery"     element={<GalleryPage />} />
              <Route path="/contact"     element={<ContactPage />} />
              <Route path="/book"           element={<BookingPage />} />
              <Route path="/packages/:id"   element={<PackageDetailPage />} />
              <Route path="*"               element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
