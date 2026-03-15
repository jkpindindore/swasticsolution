import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Page } from '../types';

interface RouterContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Page;
    if (hash && ['home', 'about', 'products', 'industries', 'blog', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
}
