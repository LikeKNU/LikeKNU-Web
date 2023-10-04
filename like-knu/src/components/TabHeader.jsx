import styled from "styled-components";
import colors from "constants/colors";
import {noticeTab, busTab, cafeteriaTab} from "constants/tabName";
import {getCampus} from "utils/DeviceManageUtil";
import {PageHeader} from "components/styles/PageHeader";
export default function TabHeader({pageName}) {
  let tabNames = [];

  switch (pageName) {
    case "공지사항" :
      tabNames=noticeTab;
      console.log(tabNames);
      break;
    case "버스" :
      tabNames=busTab;
      console.log(tabNames);
      break;
    case "식단" :
      tabNames=cafeteriaTab.filter(tabName => tabName.NAMES === getCampus());
      console.log(tabNames);
      break;
  }
  return (
      <PageHeader>
        <div>{pageName}</div>
        <Tab>

        </Tab>
      </PageHeader>
  )
}
const Tab = styled.div`
  width: 100%;
  height: 28px;
  background-color: skyblue;
  margin-top: 12px;
`