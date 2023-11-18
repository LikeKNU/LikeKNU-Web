import BusSelect from "../BusSelect";
import styled from "styled-components";
import PageContainer from "../../layouts/PageContainer";
import { useEffect, useState } from "react";
import { shuttleBusesRoutes } from "../../api/bus";
import { getCampus } from "../../utils/DeviceManageUtil";
import Campus from "../../constants/campus";

const parameter = ["shuttleId", "shuttleName"];

function Shuttle() {
  const [routes, setRoutes] = useState([]);
  let campus = getCampus();
  const keys = Object.keys(Campus);
  campus = keys.find((key) => Campus[key] === campus);

  const getRoutes = async () => {
    const res = await shuttleBusesRoutes(campus);
    setRoutes(res);
  };
  useEffect(() => {
    getRoutes();
  }, []);
  return (
    <Wrapper>
      <BusSelect options={routes} value={parameter[0]} label={parameter[1]} />
    </Wrapper>
  );
}

const Wrapper = styled(PageContainer)``;
export default Shuttle;
