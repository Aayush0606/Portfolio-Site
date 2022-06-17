import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "@heroicons/react/solid/HomeIcon";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-scroll";
function NavbarComponent() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link
              className="text-red-300 text-decoration-none hover:cursor-pointer "
              to="about-component"
              spy={true}
              smooth={true}
              offset={-50}
              duration={250}
            >
              &lt;Aayush/&gt;
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <div className="flex gap-6">
                <Link
                  className="text-red-300 text-decoration-none hover:cursor-pointer"
                  to="about-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  HOME
                </Link>
                <Link
                  className="text-red-300 text-decoration-none hover:cursor-pointer"
                  to="skill-tech-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  TECH AND SKILLS
                </Link>
                <Link
                  className="text-red-300 text-decoration-none hover:cursor-pointer"
                  to="project-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  PROJECTS
                </Link>
                <Link
                  className="text-red-300 text-decoration-none hover:cursor-pointer"
                  to="contact-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  CONATACT ME
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
