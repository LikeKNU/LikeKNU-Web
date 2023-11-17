import BusSelect from "../BusSelect";
import styled from "styled-components";
import PageContainer from "../../layouts/PageContainer";
const options = [
  { shuttleId: "a", shuttleName: "성한빈 → 석매튜" },
  { shuttleId: "b", shuttleName: "김지웅 → 한유진" },
  { shuttleId: "c", shuttleName: "김규빈 → 김태래" },
  { shuttleId: "e", shuttleName: "박건욱 → 리키" },
  { shuttleId: "f", shuttleName: "장하오 → 강채련" },
];
const parameter = ["shuttleId", "shuttleName"];

function Shuttle() {
  return (
    <Wrapper>
      <BusSelect options={options} value={parameter[0]} label={parameter[1]} />
    </Wrapper>
  );
}

const Wrapper = styled(PageContainer)``;
export default Shuttle;
