import styled from "styled-components";
import colors from "../../constants/colors";
export function NoticeItem(props) {
  const {title, date, link} = props;
  console.log(title);
  console.log(date);
  console.log(link);
  return (
    <Wrapper>
      <NoticeLink href={"https://www.youtube.com/"} className={"notice_link"}>
        <Text>{title}</Text>
      </NoticeLink>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const NoticeLink = styled.a`
  color: ${colors.black};

  font-size: 1.3rem;
  font-weight: 400;
`
const Text = styled.div`

  
`
