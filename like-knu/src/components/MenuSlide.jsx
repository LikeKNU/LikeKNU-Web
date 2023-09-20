import { useState } from "react"
import styled from "styled-components"

export default function MenuSlide(props) {
  const {menu} = props;
  return (
    <Wrapper>
      {
        menu.map((menu) => {
          return(<div key={menu.menuId}>{menu.menuName}</div>)
        })
      }
    </Wrapper>
  )
}

const Wrapper=styled.div`
  background-color: purple;
  margin-bottom: 10px;
`