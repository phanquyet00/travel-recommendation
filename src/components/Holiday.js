import {Button} from "./Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import holiday from '../components/image/holiday.jpg'

const Container = styled.div`
  background-image: url(${holiday});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 250px;
`

const Text = styled.h1`
  color: #fff;
  font-size: 3rem;
  align-self: center;
  margin-right: 8rem;
`

const LinkHoliday = styled(Link)`
  align-self: center;
`

const Holiday = () => {
    return (
        <Container>
            <Text>Your <br /> Next Holiday</Text>
            <LinkHoliday to='/'><Button>VIEW ALL PACKAGES</Button></LinkHoliday>
        </Container>
    )
}

export default Holiday