import styled from "styled-components";
import {Link} from "react-router-dom";

const Container =styled.ul`
  position: absolute;
  list-style: none;
`

const Item =styled.li`

`

const LinkItem =styled(Link)`
  width: 200px;
  height: 50px;
  display: block;
  padding-left: 12px;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  background-color: #fff;
  line-height: 50px;
  color: #424141;
  font-weight: bold;
  box-shadow: 0px 8px 12px 1px rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: #e8e8e8;
  }
`

const DropDown = ({clone}) => {
    return (
        <Container>
            <Item>
                <LinkItem to='/' onClick={() => clone(false)}>SEARCH 1</LinkItem>
            </Item>
            <Item>
                <LinkItem to='/' onClick={() => clone(false)}>SEARCH 2</LinkItem>
            </Item>
            <Item>
                <LinkItem to='/' onClick={() => clone(false)}>SEARCH 3</LinkItem>
            </Item>
        </Container>
    )
}

export default DropDown