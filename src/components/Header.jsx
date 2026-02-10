import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model Y</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
          
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={ () => setBurgerStatus(false)} />
            </CloseWrapper>
            <li> <a href="#">Existing Inventory</a></li>
            <li> <a href="#">Used Inventory</a></li>
            <li> <a href="#">Trade-In</a></li>
            <li> <a href="#">Cyber Truck</a></li>
            <li> <a href="#">Roadster</a></li>
            <li> <a href="#">Semi</a></li>
            <li> <a href="#">Existing Inventory</a></li>
            <li> <a href="#">Existing Inventory</a></li>
            <li> <a href="#">Existing Inventory</a></li>
          </BurgerNav>
        </RightMenu>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  justify-content: space-between;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px){
    display: None;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

// const RightMenu = styled(Menu)``

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`;

const CustomMenu = styled (MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: None;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateAxis(0)':'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgb(115, 115, 115);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;