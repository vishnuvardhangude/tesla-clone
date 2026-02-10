import React from 'react'
import styled from 'styled-components';

function Section(props) {

        //   title="Model S"
        // description="Order Online for Touchless Delivery"
        // bkgImg="model-s.jpg"
        // leftbtnTxt="Custom Order"
        // rightbtnTxt="Existing Inventory"

  return (
    <Wrap bgImage={props.bkgImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>{props.leftbtnTxt}</LeftButton>
        {props.rightbtnTxt && 
          <RightButton>{props.rightbtnTxt}</RightButton> 
        }
      </ButtonGroup>
      {!props.isLast && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizantal
  background-image: ${props => `url("/images/${props.bgImage}")`};

`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`

const LeftButton= styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 1.0;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton=styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow=styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons=styled.div``