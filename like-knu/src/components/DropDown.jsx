import styled from "styled-components"
import Campus from "constants/Campus"
import colors from "constants/colors"

export default function DropDown() {
  return (
      <Wrapper>
        <CampusItem>{Campus.SINGWAN}</CampusItem>
        <Line />
        <CampusItem>{Campus.CHEONAN}</CampusItem>
        <Line />
        <CampusItem>{Campus.YESAN}</CampusItem>
      </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  list-style: none;
  margin-top: 10px;
  z-index: 10;
  position: absolute;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid ${colors.gray200};
`
const CampusItem = styled.li`
  margin: 8px 40px;
  font-size: 1.8rem;
  font-weight: 500;
`
const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: ${colors.gray100};
`