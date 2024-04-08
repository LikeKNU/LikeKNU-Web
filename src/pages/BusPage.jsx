import { Header, PageHeader } from 'components/styles/PageHeader';
import PageLayout from 'layouts/PageLayout';
import { useState } from 'react';
import CityBus from '../components/bus/CityBus';
import Shuttle from '../components/bus/Shuttle';
import { TabHeader } from '../components/common/TabHeader';
import { PAGE_NAME } from '../constants/pageName';
import { busTab } from '../constants/tabName';

export default function BusPage() {
  const [category, setCategory] = useState(0);

  return (
    <PageLayout>
      <Header>
        <PageHeader>{PAGE_NAME.BUS}</PageHeader>
        <TabHeader
          names={busTab}
          category={category}
          setCategory={setCategory}
        />
      </Header>
      {category === 0 && <CityBus></CityBus>}
      {category === 1 && <Shuttle></Shuttle>}
    </PageLayout>
  );
}
