import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StickyInquiry } from './components/StickyInquiry';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Industries } from './pages/Industries';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'industries':
        return <Industries />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyInquiry />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
