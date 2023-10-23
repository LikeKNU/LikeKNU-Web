import styled from "styled-components";
import colors from "../../constants/colors";
export function NotificationListItem() {
  return (
    <>
      <Detail>
        <div></div>
        <div></div>
      </Detail>
      <Title></Title>
    </>
  )
}
const Detail = styled.div`
  color: ${colors.gray350};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-bottom: 4px;
`

const Title = styled.span`
  font-size: 1.3rem;
  color: ${colors.black};
`