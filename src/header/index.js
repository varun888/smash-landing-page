import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from 'reactstrap';
import { FullHeader } from './style'
import "./style.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header_start">
      <FullHeader>
        <Navbar color="light" className="navbar_header" light expand="md">
          {/* <NavbarBrand href="/"></NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <img className="logo_header" src="/images/logo-header.svg" />

              <Container>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">HOME</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">SERVICES</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">PORTFOLIO</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">PRICING</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">ABOUT</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">TEAM</NavLink>
                </NavItem>
                <NavItem className="navlink_header">
                  <NavLink href="/components/">CONTACT</NavLink>
                </NavItem>
              </Container>
            </Nav>
            <Button className="button_header">DOWNLOAD</Button>
          </Collapse>
        </Navbar>
      </FullHeader>
    </div>
  );
}

export default Header;