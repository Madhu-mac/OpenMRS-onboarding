import { Box, Button, H2 } from '@gilbarbara/components';

import { useAppContext } from '../context';

export default function Home() {
  const {
    setState,
    state: { run },
  } = useAppContext();

  const handleClickStart = () => {
    setState({ run: true, tourActive: true });
  };

  return (
    <Box>
      <H2 align="center" color="#005d5d">
        <img
          alt="homie"
          id="home"
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/OpenMRS_logo_699.png"
          width={150}
        />
      </H2>
      {!run && (
        <Box padding="xl" textAlign="center">
          <Button bg="#005d5d" onClick={handleClickStart}>
            Start exploring
          </Button>
        </Box>
      )}
    </Box>
  );
}
