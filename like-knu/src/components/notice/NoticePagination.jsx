import styled from "styled-components";
import {ReactComponent as BeforeIcon} from "assets/icon/navigate_before_black_24dp.svg";
import {ReactComponent as NextIcon} from "assets/icon/navigate_next_black_24dp.svg";

export function NoticePagination() {
  return (
    <Wrapper>
      <BeforeIcon />
      <NextIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: palevioletred;
  width: 100%;
  height: 50px;
`