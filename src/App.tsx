import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getScreenSize } from './modules/helpers';
import MultiRoute from './MultiRoute';
import MultiRouteHome from './MultiRoute/routes/Home';
import MultiRouteA from './MultiRoute/routes/RouteA';
import MultiRouteB from './MultiRoute/routes/RouteB';
import MultiRouteC from './MultiRoute/routes/RouteC';
import NotFound from './NotFound';

const { NODE_ENV } = process.env;

function App() {
  const [breakpoint, setBreakpoint] = useState(getScreenSize());
  const debounceTimeout = useRef(0);

  const handleResize = useRef(() => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = window.setTimeout(() => {
      setBreakpoint(getScreenSize());
    }, 250);
  });

  useEffect(() => {
    const { current } = handleResize;

    window.addEventListener('resize', current);

    return () => {
      window.removeEventListener('resize', current);
    };
  });

  return ( 
  <div 
  style={{
        backgroundColor: 'white',
  }}>
      <BrowserRouter>
      <Routes>
        <Route element={<MultiRoute />} path="/">
            <Route element={<MultiRouteHome />} index />
          <Route element={<MultiRouteA />} path="a" />
          <Route element={<MultiRouteB />} path="b" />
          <Route element={<MultiRouteC />} path="c" />
        </Route>
         <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
