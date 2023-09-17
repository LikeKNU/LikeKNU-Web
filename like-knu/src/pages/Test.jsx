import React from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'
export default function Test() {
  return (
    <Background>
      안녕하세요!
    </Background>
  )
}

const Background = styled.div`
  background-color: ${colors.common};
`
