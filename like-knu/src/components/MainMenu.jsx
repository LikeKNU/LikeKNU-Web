import styled from "styled-components"
import CardContainer from "./CardContainer"
import colors from "constants/colors"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from "react"
import MenuSlide from "./MenuSlide"
import { menu } from "api/main"
import "swiper/css"
import TitleBox from "./TitleBox"

export default function MainMenu() {
  const [cafeteria, setCafeteria]=useState([]);

  const getCafeteria = async() => {
    const res = await menu();
    setCafeteria(res);
  }
  useEffect( () => {
    // getCafeteria();
  },[]);

  return (
    <MenuContainer>
      <Title>식단</Title>
      <SwiperContainer
        slidesPerView="auto"
      >
        {/* {
          cafeteria.map((c) => (
            <SwiperSlide key={c.cafeteriaId}>
              <MenuSlide menu={c.menu} />
              {
                console.log(c.menu)
              }
              <div>안녕하세요!</div>
            </SwiperSlide>
          ))
        } */}
        <Slide>
          {/* <div className="title">학생식당</div> */}
          <TitleBox text="학생식당" margin_top="8px"/>
          <div className="content">안녕하세요111</div>
        </Slide>
        <Slide>
          {/* <div className="title">학생식당</div> */}

          <TitleBox text="학생식당" margin_top="8px"/>
          <div className="content">안녕하세요222</div>
        </Slide>
        <Slide>
          {/* <div className="title">학생식당</div> */}

          <TitleBox text="학생식당" margin_top="8px"/>
          <div className="content">안녕하세요222</div>
        </Slide>
        <Slide>
          {/* <div className="title">학생식당</div> */}

          <TitleBox text="학생식당" margin_top="8px"/>
          <div className="content">안녕하세요222</div>
        </Slide>
      </SwiperContainer>
    </MenuContainer>
  )
}
const MenuContainer = styled(CardContainer)`
  display:flex;
  flex-direction: column;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
`
const Slide=styled(SwiperSlide)`
  background-color: red;
  width: 100%;

  .content {
    color: #fff;
    text-align: center;
  }
  .title { 
    color: #fff;
    text-align:center;
    margin: 5px;
    border: 1px solid #000;
  }
`
const SwiperContainer=styled(Swiper)`

`

