import styled from "styled-components";
import colors from "../../constants/colors";

export function NotificationListItem({head, subHead, body, url}) {
  return (
    <Wrapper onClick={() => window.open(url, "_blank")}>
      <Detail>
        <div>{head}</div>
        <div>{subHead}</div>
      </Detail>
      <Title>{body}</Title>
    </Wrapper>
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

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`
