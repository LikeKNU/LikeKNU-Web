import React from 'react'
import styled from 'styled-components'

export default function BottomNav() {
  return (
    <Wrapper>
      <ButtonItem>버튼1</ButtonItem>
      <ButtonItem>버튼2</ButtonItem>
      <ButtonItem>버튼3</ButtonItem>
      <ButtonItem>버튼4</ButtonItem>
      <ButtonItem>버튼5</ButtonItem>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
`
const ButtonItem = styled.div`
`