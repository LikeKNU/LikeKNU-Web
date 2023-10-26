import PageLayout from "../layouts/PageLayout";
import SettingTabList from "./SettingTabList";
import {BackHeader} from "../components/BackHeader";

export default function SettingPage() {
  return (
    <PageLayout>
        <BackHeader Title={"설정"} />
        <SettingTabList/>
    </PageLayout>
  )
}
