import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default Navigation;