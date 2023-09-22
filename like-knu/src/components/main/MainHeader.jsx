import styled from "styled-components"
import colors from "constants/colors"

function DropDown() {

}
export default function MainHeader() {
  return (
    <Wrapper>
      <TitleButton>
        <Title>
          천안캠
        </Title>
      </TitleButton>
    </Wrapper>
  )
}
const TitleButton = styled.button`
  display: flex;
  flex-direction: row;
`
const Title = styled.ul`
`
const Wrapper = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: row;
  height: 6.4rem;
`
