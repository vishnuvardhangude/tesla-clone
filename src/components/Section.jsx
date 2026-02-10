import React from 'react'
import styled from 'styled-components';
import {motion, useScroll} from "framer-motion";
import { useState, useEffect } from "react";


function Section(props) {

  const { scrollY } = useScroll();
  console.log(scrollY);
  const [lastScroll, setLastScroll] = useState(0);
  // console.log(lastScroll, setLastScroll);
  const [direction, setDirection] = useState("down");
  // console.log(direction, setDirection);

  // Modern scroll direction detection
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setDirection(latest > lastScroll ? "down" : "up");
      setLastScroll(latest);
    });
  }, [lastScroll, scrollY]);

  const yOffset = direction === "down" ? -50 : 50;
  

  return (
    <Wrap bgImage={props.bkgImg}>
      <ItemText>
        <motion.div
          initial={{ opacity: 0, y: yOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // amount = fraction of element visible
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>{props.title}</h1>
          <p>{props.description}</p>

        </motion.div>
      </ItemText>
      <Buttons>
        <motion.div
          initial={{ opacity: 0, y: yOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // amount = fraction of element visible
          transition={{ duration: 1, ease: "easeOut", delay:0.3}}
        >
      <ButtonGroup>
        
        <LeftButton>{props.leftbtnTxt}</LeftButton>
        {props.rightbtnTxt && 
          <RightButton>{props.rightbtnTxt}</RightButton> 
        }
      </ButtonGroup>
      </motion.div>
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