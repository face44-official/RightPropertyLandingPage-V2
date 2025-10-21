import ReactLenis from 'lenis/react';
import './styles/index.css'

import { useEffect, Suspense, lazy } from 'react';
import ReactGA from 'react-ga4';
import Header from './view/components/header/header.tsx';
import WindowSizeProvider from './view/components/providers/window-size-provider.tsx';
import Router from './view/components/router.tsx';
import GSAP from './lib/gsap.tsx';
import { BrowserRouter } from "react-router";

// Lazy load non-critical components and GSAP
const LazyFooter = lazy(() => import('./view/components/footer/section'));

function App() {
  useEffect(() => {
    ReactGA.initialize('G-D169WBQW9L');
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [])
  useEffect(() => {
    // Defer non-critical CSS
    const loadSwiper = () => {
      // Use dynamic imports with proper typing
      Promise.all([
        import('swiper/css' as any),
        import('swiper/css/pagination' as any),
        import('./styles/index.scss')
      ]);
    };
    loadSwiper();
  }, []);



  return (
    <ReactLenis root >
      <WindowSizeProvider>
        <GSAP />
        <div className=''>
          <BrowserRouter>
            <Header />
            <Router />
            <Suspense fallback={<div style={{ height: '200px' }} />}>
              <LazyFooter />
            </Suspense>
          </BrowserRouter>
        </div>

      </WindowSizeProvider>
    </ReactLenis>
  )
}

export default App
