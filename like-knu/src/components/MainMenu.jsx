import styled from "styled-components"
import CardContainer from "./CardContainer"
import colors from "constants/colors"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import { useState, useEffect } from "react"
import MenuSlide from "./MenuSlide"
import { menu } from "api/main"
import "swiper/css"

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
      <SwiperContainer>
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
          <div>안녕하세요111</div>
        </Slide>
        <Slide>
          <div>안녕하세요222</div>
        </Slide>
        <Slide>
          <div>안녕하세요333</div>
        </Slide>
      </SwiperContainer>
    </MenuContainer>
  )
}
const MenuContainer = styled(CardContainer)`
  width: 100%;
`
const Title = styled.div`
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 700;
`
const Slide=styled(SwiperSlide)`
  background-color: red;
  width: 50px;
`
const SwiperContainer=styled(Swiper)`
  height: 200px;
  .swiper-wrapper {
    width: 50px;
  }
  .swiper-slide div {
    width: 50px;
    margin: 0;
  }
`

