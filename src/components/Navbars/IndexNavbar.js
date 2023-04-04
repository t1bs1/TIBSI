import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Button,
} from "reactstrap";

export default function IndexNavbar() {
  const [color, setColor] = React.useState("navbar-transparent");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand" className="navbar-brand-text">
            <span>TIBSI • </span>
            The Investream Business Solutions Inc.
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by ASTRO-IT OJT-Software Engineer
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          {collapseOpen && (
            <Button
              className="close ml-auto text-white"
              aria-label="Close"
              onClick={closeCollapse}
            >
              <span aria-hidden={true}>&times;</span>
            </Button>
          )}
        </div>
        <Collapse navbar isOpen={collapseOpen} onExited={closeCollapse}>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/components">
                <i className="fa fa-home" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register-page">
                <i className="fa fa-info-circle" />
                About
              </NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                <i className="fa fa-briefcase" />
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/it-services">
                  <i className="fa fa-laptop" />
                  IT Services
                </DropdownItem>
                <DropdownItem tag={Link} to="/accounting-services">
                  <i className="fa fa-dollar-sign" />
                  Accounting Services
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink tag={Link} to="/profile-page">
                <i className="fa fa-phone" />
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}  
