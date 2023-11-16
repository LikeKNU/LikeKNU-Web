import styled from "styled-components";
import colors from "../constants/colors";
function Tab({ pageNames }) {
  return (
    <TabList>
      {pageNames.map((tabName, index) => (
        <TabItem key={index}>{tabName}</TabItem>
      ))}
    </TabList>
  );
}
const TabList = styled.div`
  width: 100%;
  height: 34px;
  background-color: skyblue;

  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 1px solid ${colors.GRAY100};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;
const TabItem = styled.div`
  color: ${colors.BLACK};
  line-height: 34px;
  text-align: center;
  font-size: 1.6rem;
  background-color: orange;
  padding-right: 8px;
  padding-left: 8px;
`;
export default Tab;
