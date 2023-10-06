import styled from "styled-components";
import {ReactComponent as BeforeIcon} from "assets/icon/navigate_before_black_24dp.svg";
import {ReactComponent as NextIcon} from "assets/icon/navigate_next_black_24dp.svg";
import Pagination from "react-js-pagination";

export default function NoticePagination({totalPage, currentPage, setPage}) {
  console.log(totalPage);
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={5}
      totalItemsCount={totalPage}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}>

    </Pagination>
  )
}

const Wrapper = styled.div`
  background-color: palevioletred;
  width: 100%;
  height: 50px;
`
const PageList = styled.div``
const PageButton = styled.div`
  width: 15px;
  height: 15px;
  background-color: aquamarine;
`