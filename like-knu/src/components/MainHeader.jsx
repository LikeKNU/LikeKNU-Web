import styled from "styled-components"
import colors from "constants/colors"

export default function MainHeader() {
  return (
    <Wrapper>
      <Title>천안캠</Title>
    </Wrapper>
  )
}
const Title = styled.button`
`
const Wrapper = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: row;
`
