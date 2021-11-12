import styled from "styled-components";
import {FaLeaf} from 'react-icons/fa'
import {Link} from "react-router-dom";

const Content = styled(Link)`
  display: flex;
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  transform: translate(-20px, -20px);
  text-decoration: none;
`

const Icon = styled(FaLeaf)`
  background-color: #525252;
  font-size: 22px;
  color: #fff;
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 100%;
  align-self: flex-end;
  transform: translateX(10px);
  z-index: 999;
`

const ContentRight = styled.div`
 p {
   height: 14px;
   width: 51px;
   background-color: #f76570;
   color: #fff;
   font-size: 9px;
   font-weight: bold;
   text-align: center;
   line-height: 14px;
   position: absolute;
   top: 0;
 }
`

const Price = styled.div`
  display: flex;
  background-color: #525252;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  justify-content: center;
  position: relative;

  h6 {
    align-self: center;
    transform: translateY(6px);
    color: #fff;
  }

  h1 {
    align-self: center;
    color: #fff;
  }
`

const BuyNow = () => {
    return (
        <Content to='/'>
            <Icon />
            <ContentRight>
                <Price>
                    <h6>$</h6>
                    <h1>54</h1>
                    <p>BUY NOW</p>
                </Price>
            </ContentRight>
        </Content>
    )
}

export default BuyNow