import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CardData} from './data/CardData'
import styled from "styled-components";

const Container = styled.div`
  width: 750px;
  height: 400px;
  position: relative;
  .slick-dots {
    position: absolute;
    top: 0;
  }
  
  .slick-dots li {
    width: 88px;
    margin: 0 2px;
    transition: width 0.3s ease-in-out;
  }
`

const SliderImg = styled.img`
  width: 750px;
  height: 400px;
  object-fit: cover;
`

const Custom = styled.div`
  height: 8px;
  width: 60px;
  background-color: #e5e7e9;
  border-radius: 4px;
  position: relative;
`

const TimeBeaches = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 110px;
  background-color: #22a6d6;
  position: absolute;
  bottom: 0;
  transform: translate(25%, 50%);
  padding: 0 40px;
`
const Time = styled.div`
  align-self: center;
  h1, h4 {
    color: #fff;
  }
`

const SliderBeaches = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <Custom>
                {/*<Loading></Loading>*/}
            </Custom>
        )
    };
    return (
        <Container>
            <Slider {...settings}>
                {CardData.map((item, index) => (
                 <div>
                     <SliderImg src={item.image}></SliderImg>
                 </div>
                ))}
            </Slider>
            <TimeBeaches>
                <Time>
                    <h1>000</h1>
                    <h4>DAYS</h4>
                </Time>
                <Time>
                    <h1>000</h1>
                    <h4>HOURS</h4>
                </Time>
                <Time>
                    <h1>000</h1>
                    <h4>MINUTES</h4>
                </Time>
                <Time>
                    <h1>000</h1>
                    <h4>SECONDS</h4>
                </Time>
            </TimeBeaches>
        </Container>
    )
}

export default SliderBeaches