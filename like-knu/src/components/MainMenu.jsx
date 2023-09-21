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
    getCafeteria();
  },[]);

  return (
    <MenuContainer>
      <Title>식단</Title>
      <SwiperContainer
        slidesPerView="auto"
      >
        {
          cafeteria.map((c) => (
            <Slide key={c.cafeteriaId}>
              <TitleBox text={c.cafeteriaName} margin_top="8px"/>
              <MenuSlide menu={c.menu} />
            </Slide>
          ))
        }
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
  // width: 100%;

  display: flex;
  flex-direction: column;

  .content {
    color: #fff;
    text-align: center;
  }
`
const SwiperContainer=styled(Swiper)`

`

