import styled from "styled-components";
import {ReactComponent as BeforeIcon} from "assets/icon/navigate_before_black_24dp.svg";
import {ReactComponent as NextIcon} from "assets/icon/navigate_next_black_24dp.svg";
import Pagination from "react-js-pagination";
import "./NoticePagination.css";
export default function NoticePagination({totalElements, currentPage, setPage}) {
  console.log(currentPage);
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={10}
      totalItemsCount={totalElements}
      pageRangeDisplayed={5}
      prevPageText={<StyledBeforeIcon />}
      nextPageText={<StyledNextIcon />}
      onChange={setPage}
      hideFirstLastPages={true}
      >
    </Pagination>
  )
}
const StyledBeforeIcon = styled(BeforeIcon)`
  fill: #979797;
  width: 22px;
  height: 22px;
`
const StyledNextIcon = styled(NextIcon)`
  fill: #979797;
  width: 22px;
  height: 22px;`

