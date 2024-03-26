import { useState } from 'react';
import { useMount } from 'react-use';
import { Box, BoxCenter, H2, Loader } from '@gilbarbara/components';

import { useAppContext } from '../context';

export default function RouteA() {
  const [showLoader, setLoader] = useState(true);
  const {
    setState,
    state: { tourActive },
  } = useAppContext();

  useMount(() => {
    if (tourActive) {
      setTimeout(() => {
        setLoader(false);
        setState({ run: true, stepIndex: 2 });
      }, 1200);
    }
  });

  return (
    <Box>
      <H2 align="center" color="#005d5d">
        <span id="routeB">Visit list</span>
      </H2>
      {tourActive && showLoader && (
        <BoxCenter height={200}>
          <Loader color="#005d5d" size={100} />
        </BoxCenter>
      )}
    </Box>
  );
}
