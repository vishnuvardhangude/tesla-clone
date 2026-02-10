import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        bkgImg="model-s.jpg"
        leftbtnTxt="Custom Order"
        rightbtnTxt="Existing Inventory"
      />
      <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bkgImg="model-y.jpg"
        leftbtnTxt="Custom Order"
        rightbtnTxt="Existing Inventory"
      />
      <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bkgImg="model-3.jpg"
        leftbtnTxt="Custom Order"
        rightbtnTxt="Existing Inventory"
      />
      <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        bkgImg="model-x.jpg"
        leftbtnTxt="Custom Order"
        rightbtnTxt="Existing Inventory"
        
      />

      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back gaurentee"
        bkgImg="solar-panel.jpg"
        leftbtnTxt="Order now"
        rightbtnTxt="Learn More"
        
      />
      <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bkgImg="solar-roof.jpg"
        leftbtnTxt="Order now"
        rightbtnTxt="Learn More"
      />

      <Section 
        title="Accessories"
        // description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bkgImg="accessories.jpg"
        leftbtnTxt="Shop now"
        // rightbtnTxt="Learn More"
        isLast={true}
      />
      

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
 