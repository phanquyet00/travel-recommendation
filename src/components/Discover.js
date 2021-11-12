import {Button} from './Button'
import styled from "styled-components";
import discover1 from './image/discover1.jpg'
import discover2 from './image/discover2.jpg'
import {Link} from "react-router-dom";

const Content =styled.div`
  display: flex;
  width: 100%;
`

const Item =styled.div`
  &:nth-child(1) {
    background-image: url(${discover1});
  }
  &:nth-child(2) {
    background-image: url(${discover2});
  }
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 270px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
     text-align: center;
    color: #fff;
  }
  h1 {
    color: #fff;
    text-align: center;
    margin: 2rem 0;
  }
`

const LinkDiscover =styled(Link)`
  display: block;
  text-align: center;
  button {
    background: #fff;
    color: #000;
  }
`

const Discover = () => {
    return (
        <Content>
            <Item>
                <p>01.LAST MINUTE</p>
                <h1>DISCOVER CITIES</h1>
                <LinkDiscover to='/'><Button>DETAILS</Button></LinkDiscover>
            </Item>
            <Item>
                <p>01.LAST MINUTE</p>
                <h1>DISCOVER CITIES</h1>
                <LinkDiscover to='/'><Button>DETAILS</Button></LinkDiscover>
            </Item>
        </Content>
    )
}

export default Discover