import React, { useState } from 'react'
import styled from 'styled-components'
import colors from 'constants/colors'

function Dropdown() {
  return(
    <div>
      <li>천안</li>
      <li>신관</li>
      <li>예산</li>
    </div>
  )
}
export default function Test() {
  const [view, setView] = useState(false);

  return (
    <Background>
      <ul onClick={() => setView(!view)}>
        안녕하세요
        {view && <Dropdown />}
      </ul>
    </Background>
  )
}

const Background = styled.div`
  background-color: ${colors.common};
`
