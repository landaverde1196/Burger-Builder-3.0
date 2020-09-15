import React from "react";
import classes from "./Toolbar.module.css";
// import Logo from "../../Logo/Logo";
// import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { Navbar, Nav, Container } from "react-bootstrap";
import burgerLogo from "../../../assets/images/original.png";

const toolbar = (props) => (
  <header>
    <Container>
      <Navbar
        className={classes.Toolbar}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            src={burgerLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Burger"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" exact="true">
              Burger Builder
            </Nav.Link>
            {props.isAuth ? <Nav.Link href="/orders">Orders</Nav.Link> : null}
            {!props.isAuth ? (
              <Nav.Link href="/auth">Authenticate</Nav.Link>
            ) : (
              <Nav.Link href="/logout">Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
);
export default toolbar;

// const toolbar = (props) => (
//   <header className={classes.Toolbar}>
//     <DrawerToggle clicked={props.drawerToggleClicked} />
//     <div className={classes.Logo}>
//       <Logo />
//     </div>
//     <nav className={classes.DesktopOnly}>
//       <NavigationItems isAuthenticated={props.isAuth} />
//     </nav>
//   </header>
// );

// export default toolbar;
