import {PackagesData} from "./data/PackagesData";
import styled from "styled-components";
import {Button} from "./Button";
import {FaMapMarkerAlt} from 'react-icons/fa'

const Content = styled.div``

const HeaderNote = styled.div`
  text-align: center;
  p {
    margin: 2rem;
  }
`

const CandList = styled.div`
  display: flex;
  justify-content: center;
`

const CandItem = styled.div`
  width: 370px;
  margin: 4rem 2rem;
  border: 1px solid #ccc;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
`

const CandImg = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`

const Container = styled.div`
  margin: 0 2rem;
`

const Place = styled.div`
  padding: 1rem 0;
`

const City = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

const Country = styled.div`
  display: flex;
  margin-top: 0.2rem;
`

const IconPlace = styled(FaMapMarkerAlt)`
  opacity: 0.5;
`

const Continents = styled.div`
  opacity: 0.6;
  margin-left: 0.4rem;
`

const EventPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

const EventNumber = styled.div`
    display: flex;
`

const Event = styled.div`
    width: 60px;
`

const Number = styled.div`
  background-color: green;
  width: 30px;
  text-align: center;
  border-radius: 8px;
  align-self: flex-end;
`

const Price = styled.div`
  display: flex;
`

const OldPrice = styled.div`
  opacity: 0.5;
  font-size: 1.5rem;
  text-decoration: line-through;
  align-self: flex-end;
`

const NewPrice = styled.div`
  margin-left: 8px;
  font-size: 2rem;
`

const Note = styled.div`
  margin: 1rem 0;
  opacity: 0.5;
`

const PlaceLink = styled.div`
  margin-bottom: 2rem;
`

const Packages = () => {
    return (
        <Content>
            <HeaderNote>
                <p>PROMOTIONS</p>
                <h1>OUR PACKAGES</h1>
            </HeaderNote>
            <CandList>
                {PackagesData.map((item, index) => (
                    <CandItem>
                        <CandImg src={item.image} />
                        <Container>
                            <Place>
                                <City>{item.city}</City>
                                <Country>
                                    <IconPlace />
                                    <Continents>{item.continents}</Continents>
                                </Country>
                            </Place>
                            <EventPrice>
                                <EventNumber>
                                    <Event>{item.event}</Event>
                                    <Number> + {item.number}</Number>
                                </EventNumber>
                                <Price>
                                    <OldPrice>{item.oldprice}</OldPrice>
                                    <NewPrice>{item.newprice} $</NewPrice>
                                </Price>
                            </EventPrice>
                            <Note>{item.text}</Note>
                            <PlaceLink><Button>DETAILS</Button></PlaceLink>
                        </Container>
                    </CandItem>
                ))}
            </CandList>
        </Content>
    )
}

export default Packages