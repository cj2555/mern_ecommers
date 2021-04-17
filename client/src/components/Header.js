import React from 'react'
import { Container, Navbar, Nav,Dropdown, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
 
const Header = () => {

  const userdata = useSelector(state => state.userLogin)
  const {userInfo}=userdata

    return (
        <div>

         
                <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
          <Container>  
            <LinkContainer to='/'>
                <Navbar.Brand>GIFT Shop</Navbar.Brand>
            </LinkContainer>
                  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to='/cart'>
                    <Nav.Link>
                        <i className="fas fa-shopping-cart mr-2"> </i>
                        CART</Nav.Link>
                </LinkContainer>
                {userInfo ? (

                  <NavDropdown  title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>

                )
                
                  
                  : (<LinkContainer to = '/login'>
                <Nav.Link>
                      <i className="fas fa-user mr-2"> </i>
                    SIGN IN
                    </Nav.Link>
                </LinkContainer>
                  )}
                
                 {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                 
                </NavDropdown>
              )}
                
                    </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
            

        </div>
    )
}

export default Header
