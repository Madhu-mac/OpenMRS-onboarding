import { NavLink } from 'react-router-dom';
import { Events, Pen, ShoppingCart } from '@carbon/icons-react';
import { Button, Container, H1, Spacer } from '@gilbarbara/components';

export default function Header() {
  const style = { textDecoration: 'none' };

  return (
    <Container verticalPadding>
      <Spacer distribution="center">
        <NavLink end style={style} to="/">
          {({ isActive }) => (
            <Button bg="#005d5d" invert={!isActive} size="sm">
              Home
            </Button>
          )}
        </NavLink>

        <NavLink style={style} to="/a">
          {({ isActive }) => (
            <Button bg="#005d5d" invert={!isActive} size="sm">
              <ShoppingCart />
            </Button>
          )}
        </NavLink>

        <NavLink style={style} to="/b">
          {({ isActive }) => (
            <Button bg="#005d5d" invert={!isActive} size="sm">
              <Pen />
            </Button>
          )}
        </NavLink>
        <NavLink style={style} to="/c">
          {({ isActive }) => (
            <Button bg="#005d5d" invert={!isActive} size="sm">
              <Events />
            </Button>
          )}
        </NavLink>
      </Spacer>

      <H1 align="center" mt="lg">
        ONBOARDING
      </H1>
    </Container>
  );
}
