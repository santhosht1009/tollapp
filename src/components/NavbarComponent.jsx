import React, { useState } from 'react';
import { NavLink as ReactLink} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
     <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                className="px-5"
            >
                <NavbarBrand tag={ReactLink} to="/">
                   TollApp
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >

                        <NavItem>
                            <NavLink tag={ReactLink} to="/" >
                               Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/destination" >
                               DestinationOrigin
                            </NavLink>
                        </NavItem>
                     



                    </Nav>


                    <Nav navbar>

                       
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/" >
                                            Login
                                        </NavLink>
                                    </NavItem>
                                 


                    </Nav>





                </Collapse>
            </Navbar>
    </div>
  );
}

export default NavbarComponent;