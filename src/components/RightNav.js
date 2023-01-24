import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    const [selectValue, setState] = useState("");
    var varOptions = [
        { value: 1, label: "Myanmar" },
        { value: 2, label: "Algeria" },
        { value: 3, label: "Argentina" },
        { value: 4, label: "American" },
        { value: 5, label: "Japan" },
        { value: 6, label: "India" },
      ];
    function getCountry(){
        return varOptions.map((country,k)=>{
            return <option key={k} value={country.value}>
                {country.label}
            </option>;
        });
    }

    function handleChange(e) {
        setState({selectValue: e.target.value});
    }
  return (
    // <Ul open={open}>
    //   <li>Home</li>
    //   <li>About Us</li>
    //   <li>Contact Us</li>
    //   <li>Sign In</li>
    //   <li>Sign Up</li>
    // </Ul>
    <Nav>
    <Ul open={open}>
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
          <li>
          <select className="d-flex dropdown m-2" style = {{background:"#f2f2f2",width:"200px"}}
    aria-label="Floating label select example"
    onChange={handleChange}>
        <option defaultValue="default" disabled>
       -- Select country --
    </option>
        {getCountry()}
      </select>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              // className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </li>  
        
       </Ul>
       
    </Nav>
  )
}

export default RightNav
