import { useLocation } from 'react-router-dom';
import { BackHeader } from '../components/BackHeader';
import { Header } from '../components/styles/PageHeader';
import { PAGE_NAME } from '../constants/pageName';

const NoticeRenderPage = () => {
  const location = useLocation();
  const { url, previousPath, category } = location.state || {
    url: 'https://www.kongju.ac.kr/kongju/12499/subview.',
    previousPath: '/',
    category: 0
  };

  return <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header style={{ flex: 1 }}>
      <BackHeader title={PAGE_NAME.NOTICE} path={previousPath} category={category} />
    </Header>
    <iframe src={url} width="100%" style={{ border: 'none', backgroundColor: '#FFFFFF', flex: 1, marginTop: '65px' }} />
  </div>
};

export default NoticeRenderPage;
