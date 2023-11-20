import PageLayout from "../layouts/PageLayout";
import SettingTabList from "./SettingTabList";
import { BackHeader } from "../components/BackHeader";
import styled from "styled-components";
import colors from "../constants/colors";

export default function SettingPage() {
  return (
    <PageLayout>
      <BackHeader Title={"설정"} />
      {/*<SettingTabList />*/}
    </PageLayout>
  );
}
