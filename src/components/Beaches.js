import {Button} from "./Button";
import styled from "styled-components";
import SliderBeaches from "./SliderBeaches";
import { IoIosBoat} from 'react-icons/io'
import {GiTowerBridge, GiEarthAmerica} from 'react-icons/gi'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
`

const Buytour = styled.div`
  margin-right: 4rem;
`

const Country = styled.div`
  font-size: 1.2rem;
  opacity: 0.5;
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 2rem;
`

const Note = styled.div`
  width: 330px;
  margin-top: 2rem;
  font-size: 1rem;
  opacity: 0.5;
  
`

const Price = styled.div`
  display: flex;
  margin-top: 2rem;
`

const InitialPrice = styled.div`
  text-decoration-line: line-through;
  opacity: 0.5;
  font-size: 2rem;
  margin-right: 1rem;
`

const CurentPrice = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
`

const Person = styled.div`
  display: flex;
  align-self: flex-end;
`

const ButtonLink = styled.div``

const Tours = styled.div`
  display: flex;
  margin: 8rem 12rem;
  justify-content: space-between;
`

const ToursItem = styled.div`
  width: 350px;
  display: flex;
`

const ToursIcon1 = styled(GiEarthAmerica)`
  font-size: 5rem;
  width: 50%;
  opacity: 0.6;
`

const ToursIcon2 = styled(IoIosBoat)`
  font-size: 5rem;
  width: 50%;
  opacity: 0.6;
`

const ToursIcon3 = styled(GiTowerBridge)`
  font-size: 5rem;
  width: 50%;
  opacity: 0.6;
`

const ToursContent = styled.div`
  margin-left: 1rem;
  p {
   margin: 1.2rem 0;
    opacity: 0.6;
  }
  h2 {
    font-weight: bold;
  }
`

const ToursLink = styled.div`
  color: #454ebd;
  cursor: pointer;
`

const Beaches = () => {
    return (
        <>
            <Container>
                <Buytour>
                    <Country>NORTH AMERICA</Country>
                    <Header>THE BEST BEACHES</Header>
                    <Note>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin rhoncus urna dictum neque molestie ultricies mauris ac.
                    </Note>
                    <Price>
                        <InitialPrice>800</InitialPrice>
                        <CurentPrice>500 $</CurentPrice>
                        <Person>/ FOR PERSON</Person>
                    </Price>
                    <ButtonLink to='/'><Button>BOOK NOW</Button></ButtonLink>
                </Buytour>
                <SliderBeaches />
            </Container>
            <Tours>
                <ToursItem>
                    <ToursIcon1 />
                    <ToursContent>
                        <h2>WORLD TOURS</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <ToursLink to='/'>VIEW MORE</ToursLink>
                    </ToursContent>
                </ToursItem>
                <ToursItem>
                    <ToursIcon2 />
                    <ToursContent>
                        <h2>WORLD TOURS</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <ToursLink to='/'>VIEW MORE</ToursLink>
                    </ToursContent>
                </ToursItem>
                <ToursItem>
                    <ToursIcon3 />
                    <ToursContent>
                        <h2>WORLD TOURS</h2>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
                        <ToursLink to='/'>VIEW MORE</ToursLink>
                    </ToursContent>
                </ToursItem>
            </Tours>
        </>
    )
}

export default Beaches