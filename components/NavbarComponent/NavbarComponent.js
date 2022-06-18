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
              className="text-[#fca5a5] hover:text-pink-400 text-2xl no-underline hover:cursor-pointer font-quantico "
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
                  className="text-[#fca5a5] hover:text-pink-400 text-lg no-underline  hover:cursor-pointer font-quantico "
                  to="about-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  HOME
                </Link>
                <Link
                  className="text-[#fca5a5] hover:text-pink-400 text-lg no-underline  hover:cursor-pointer font-quantico"
                  to="skill-tech-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  TECH AND SKILLS
                </Link>
                <Link
                  className="text-[#fca5a5] hover:text-pink-400 text-lg no-underline  hover:cursor-pointer font-quantico"
                  to="project-component"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={250}
                >
                  PROJECTS
                </Link>
                <Link
                  className="text-[#fca5a5] hover:text-pink-400 text-lg no-underline  hover:cursor-pointer font-quantico"
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
