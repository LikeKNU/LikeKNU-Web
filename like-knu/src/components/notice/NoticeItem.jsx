import styled from "styled-components";
export function NoticeItem(props) {
  const {title, date, link} = props;
  console.log(title);
  console.log(date);
  console.log(link);
  return (
    <Wrapper>
      <div>{title}</div>
      <div>{date}</div>
      <div>{link}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div``