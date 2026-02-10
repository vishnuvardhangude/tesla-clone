import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
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
  // align-items: center;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

// const RightMenu = styled(Menu)``

const RightMenu = styled.div`

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`