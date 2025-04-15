import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LawyerBookingPage from './pages/LawyerBookingPage';
import LegalHelpPage from './pages/LegalHelpPage';

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;

  const getPage = () => {
    switch (pathname) {
      case '/booking':
        return <LawyerBookingPage />;
      case '/legal-help':
        return <LegalHelpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {getPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;