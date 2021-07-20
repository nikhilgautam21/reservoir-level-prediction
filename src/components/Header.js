import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Header() {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item header>
          <h2> Reservior Level Prediction </h2>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
