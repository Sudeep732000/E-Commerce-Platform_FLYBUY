import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
  }
  return (
      <Carousel {...settings}>
        <Wrap>
          <img src="/image/banner.jpeg" alt="img"/>
        </Wrap>
        <Wrap>
          <img src="http://dslv9ilpbe7p1.cloudfront.net/zkE2zpwxYAFHwq5G4pPvbw_store_banner_image.png" alt="img"/>
        </Wrap>
        <Wrap>
          <img src="https://bretonmart.com/wp-content/uploads/2020/04/4.png" alt="img"/>
        </Wrap>
        <Wrap>
          <img src="/image/banner1.jpeg" alt="img"/>
        </Wrap>
      </Carousel>
  )
}

export default ImgSlider
const Carousel = styled(Slider)`
  box-sizing:border-box;
  margin-top:10px;
  ul li button{
    &:before{
      font-size:10px;
      color:black;
    }
  }
  li.slick-active button:before {
    color:black;
    opacity:1;
  }
  .slick-list{
    overflow:initial;
  }
  button{
    z-index:1;
  }
`
const Wrap = styled.div`
  cursor:pointer;
  position:relative;
  border-raduis:5px;
  img{
    border:5px solid transparent;
    border-radius:6px;
    width:100%;
    height:100%;
    box-sizing:border-box;
    &:hover{
      border: 4px solid rgb(110, 231, 245);
      transition-duration:300ms;
    }
  }
`

