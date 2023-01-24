import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Logo from "../img/klogo1.jpg";
import Burger from './Burger';

function NavigationBar() {
  const [fruit, setFruit] = useState();
    
  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Container> */}
        <img src={Logo} className="kitty-logo" alt="React Logo" />
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {/* <Nav>
          <ul>
               <li>
                    <NavLink to="/" exact activeClassName="active">
                       Home
                    </NavLink>
                 </li>
                 <li>
                     <NavLink to="/about" activeClassName="active" exact>
                         About
                     </NavLink>
                 </li>
                 <li>
                     <NavLink to="/contact" activeClassName="active" exact>
                         Contact
                     </NavLink>
                 </li>
                 <li>
                     <NavLink to="/blog" activeClassName="active">
                         Blog
                     </NavLink>
                 </li>
             </ul>
          </Nav> */}
          <Burger />
        {/* </Container> */}
        {/* <select className="dropdown m-2" style = {{background:"#f2f2f2",width:"200px"}}
    aria-label="Floating label select example"
    onChange={handleChange}>
        <option defaultValue="default" disabled>
       -- Select country --
    </option>
        {getCountry()}
      </select> */}
      {/* <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success me-2">Search</Button>
          </Form> */}
      </Navbar>
     
      <select id="fruits" defaultValue="Select fruit"
              onChange={(e) => setFruit(e.target.value)}>
        <option value="Apple">Apple</option>
        <option value="Pear">Pear</option>
        <option value="Pineapple">Pineapple</option>
      </select>
      <h1>Selected Fruit: {fruit}</h1>
    </>
  );
}

export default NavigationBar;
