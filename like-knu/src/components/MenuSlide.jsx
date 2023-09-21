import { useState } from "react"
import styled from "styled-components"
import colors from "constants/colors";
export default function MenuSlide(props) {
  const {menu} = props;
  return (
    <Wrapper>
      {
        menu.map((menu) => {
          return(<div key={menu.menuId} className="text">{menu.menuName}</div>)
        })
      }
    </Wrapper>
  )
}

const Wrapper=styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: ${colors.black};
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .text {
    margin-bottom: 4px;
  }


`