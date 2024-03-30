import Joyride, { CallBackProps } from 'react-joyride';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMount } from 'react-use';
import { Page, Paragraph, theme } from '@gilbarbara/components';

import { useAppContext } from './context';
import Header from './Header';

export default function MultiRouteWrapper() {
  const {
    setState,
    state: { run, stepIndex, steps },
  } = useAppContext();
  const navigate = useNavigate();

  useMount(() => {
    setState({
      steps: [
        {
          target: '#home',
          content: (
            <>
              <Paragraph bold size="large">
                This is the OpenMRS home page
              </Paragraph>
              <Paragraph>
                When you click "next", it will  navigate to Order basket, and continue the
                tour.
              </Paragraph>
            </>
          ),
          disableBeacon: true,
        },
        {
          target: '#routeA',
          content: (
            <>
              <Paragraph bold size="large">
                This is Order Basket
              </Paragraph>
              <Paragraph>
                The loader that appeared in the page was a simulation of a real page load, and now
                the tour is active again & navigate to Visits
              </Paragraph>
            </>
          ),
        },
        {
          target: '#routeB',
          content: (
            <>
              <Paragraph bold size="large">
                This is Visit list
              </Paragraph>
              <Paragraph>
                Yet another loader simulation and now we reached the last step in our Patient list Tour!
              </Paragraph>
            </>
          ),
        },
        {
          target: '#routeC',
          content: (
            <>
              <Paragraph bold size="large">
                This is Patient list
              </Paragraph>
              <Paragraph>
                The loader that appeared in the page was a simulation of a real page load, and now
                the tour is active again click buttons to Navigate
              </Paragraph>
            </>
          ),
        },
      ],
    });
  });

  const handleCallback = (data: CallBackProps) => {
    const { action, index, lifecycle, type } = data;

    if (type === 'step:after') {
        if (index === 0 /* or step.target === '#home' */) {
            if (action === 'prev' && index === 0) {
                setState({ run: false });
                navigate('/');
            } else {
                setState({ run: false });
                navigate('/a');
            }
        } else if (index === 1) {
            if (action === 'next') {
                setState({ run: false });
                navigate('/b');
            } else {
                setState({ run: false });
                navigate('/');
                setState({ run: true, stepIndex: 0 });
            }
        } else if (index === 2) {
            if (action === 'next') {
                setState({ run: false });
                navigate('/c');
            } else {
                setState({ run: false });
                navigate('/a');
            }
        } else if (index === 3) {
            if (action === 'next') {
                setState({ run: false });
                navigate('/');
                setState({ run: true, stepIndex: 0 });
            } else {
                setState({ run: false });
                navigate('/b');
            }
        }
    } else if (action === 'reset' || lifecycle === 'complete') {
        setState({ run: false, stepIndex: 0, tourActive: false });
    }
};

  return (
    <Page>
      <Header />
      <Outlet />
      <Joyride
        callback={handleCallback}
        continuous
        run={run}
        showProgress
        showSkipButton
        stepIndex={stepIndex}
        steps={steps}
        styles={{
          options: {
            arrowColor: theme.white,
            backgroundColor: theme.white,
            primaryColor: '#005d5d',
            textColor: theme.black,
          },
        }}
      />
    </Page>
  );
}
