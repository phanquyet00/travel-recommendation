import {CardData} from "./data/CardData";
import styled from "styled-components";
import {Button} from './Button'
import {Link} from "react-router-dom";

const CandContainer = styled.div`
  margin-top: 4rem;
`

const CandNote = styled.p`
  text-align: center;
  font-size: 1.2rem;
`

const CandHeader = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
`

const CandList= styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  list-style: none;
`

const CandItem= styled.li`
  margin: 2rem auto;
  position: relative;
  width: 370px;
  height: 370px;
`

const CandImg= styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CandCountry = styled.p`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 4rem 1rem;
`
const CandPackages = styled.p`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 200;
  margin: 2.5rem 1rem;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #14b9d5;
  ${CandItem}:hover & {
    opacity: 1;
  }
  button {
    background-color: #fff;
    display: flex;
    margin: auto;
    color: #000;
  }
  display: flex;
`

const Cake = styled.div`
  align-self: center;
  justify-content: center;
  margin-left: 5rem;
`

const OverlayHeader = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
`

const OverlayCity = styled(Link)`
  text-align: center;
  color: #fff;
  display: block;
  text-decoration: none;
  margin-bottom: 0.6rem;
`

const Cand = () => {
    return (
        <CandContainer>
            <CandNote>OUR PROPOSALS</CandNote>
            <CandHeader>OUR DESTINATIONS</CandHeader>
            <CandList>
                {CardData.map((item, index) => (
                    <CandItem>
                        <CandImg src={item.image} />
                        <CandCountry>{item.country}</CandCountry>
                        <CandPackages>{item.packages}</CandPackages>
                        <Overlay>
                            <Cake>
                                <OverlayHeader>PACKAGES</OverlayHeader>
                                <OverlayCity>{item.city1}</OverlayCity>
                                <OverlayCity>{item.city2}</OverlayCity>
                                <OverlayCity>{item.city3}</OverlayCity>
                                <Button>VIEW DESTINATION</Button>
                            </Cake>
                        </Overlay>
                    </CandItem>
                ))}
            </CandList>
        </CandContainer>
    )
}

export default Cand