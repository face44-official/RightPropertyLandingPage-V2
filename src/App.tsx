import ReactLenis from 'lenis/react';
import './styles/index.css'

import { useEffect, useState, Suspense, lazy } from 'react';
import ReactGA from 'react-ga4';
import Header from './view/components/header/header.tsx';
import WindowSizeProvider from './view/components/providers/window-size-provider.tsx';
import Router from './view/components/router.tsx';


// Lazy load non-critical components and GSAP
const LazyFooter = lazy(() => import('./view/components/footer/section'));
const LazyGSAP = lazy(() => import('./lib/gsap.tsx').then(module => ({ default: module.default })));

function App() {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  useEffect(() => {
    ReactGA.initialize('G-D169WBQW9L');
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [])
  useEffect(() => {

    // Defer GSAP loading until after initial render
    const gsapTimer = setTimeout(() => {
      setGsapLoaded(true);
    }, 100);



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



    return () => {
      clearTimeout(gsapTimer);
    };
  }, []);



  return (
    <ReactLenis root >
      <WindowSizeProvider>

        {gsapLoaded && (
          <Suspense fallback={null}>
            <LazyGSAP />
          </Suspense>
        )}
        <Header />
        <div className=''>
          <Router />
          <Suspense fallback={<div style={{ height: '200px' }} />}>
            <LazyFooter />
          </Suspense>
        </div>

      </WindowSizeProvider>
    </ReactLenis>
  )
}

export default App
