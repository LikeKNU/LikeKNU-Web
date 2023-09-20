import {Swiper, SwiperSlide} from 'swiper/react'
import styled from 'styled-components'
export default function SwiperTest() {
  return (
    <Wrapper>
      <Swiper>
        <Slide>
          <div>안녕하세요 111 </div>
        </Slide>
        <Slide>
          <div>안녕하세요 222 </div>
        </Slide>
        <Slide>
          <div>안녕하세요 333 </div>
        </Slide>
      </Swiper>
    </Wrapper>

  )
}
const Slide=styled(SwiperSlide)`
  width: 50px;

  div {
    width: 50px;
  }
`
const Wrapper=styled.div`
  margin:5px;
  padding: 5px;
  background-color: red;

  .swiper-slide {
    background-color: orange;
  }
`
