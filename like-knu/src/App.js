import BusPage from 'pages/BusPage';
import CalendarPage from 'pages/CalendarPage';
import MainPage from 'pages/MainPage';
import MenuPage from 'pages/MenuPage';
import Test from 'pages/Test';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { initializeDevice } from './api/initializer';
import IosImage from './assets/image/ios_onboarding.png';
import OtherImage from './assets/image/other_onboarding.png';
import BottomNav from './components/globals/BottomNav';
import NoticePage from './pages/NoticePage';
import NotificationPage from './pages/NotificationPage';
import SettingAboutPage from './pages/SettingAboutPage';
import SettingNotificationPage from './pages/SettingNotificationPage';
import SettingPage from './pages/SettingPage';
import RouteChangeTracker from './RouteChangeTrancker';

function App() {
  const location = useLocation();
  const [isBottomBar, setIsBottomBar] = useState(true);
  useEffect(() => {
    if (
      location.pathname.includes('/setting') ||
      location.pathname === '/notification'
    ) {
      setIsBottomBar(false);
    } else {
      setIsBottomBar(true);
    }
  }, [location]);

  // PWA로 설치되지 않은 상태
  const isAndroid = /Android/.test(navigator.userAgent);
  const isiOS = /(iPhone|iPad|iPod)/.test(navigator.userAgent);
  if (isiOS && !window.matchMedia('(display-mode: standalone)').matches) {
    return (
      <>
        <Image src={IosImage} alt={'뭘봐'} />
      </>
    );
  } else if (!isAndroid && !isiOS) {
    return (
      <>
        <Image src={OtherImage} alt={'뭘봐'} />
      </>
    );
  }
  initializeDevice();
  RouteChangeTracker();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bus" element={<BusPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route
          path="/setting/notificationTag"
          element={<SettingNotificationPage />}
        />
        <Route path="/setting/about" element={<SettingAboutPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="*" element={<Test />} />
      </Routes>
      {isBottomBar && <BottomNav isAndroid={isAndroid} />}
    </>
  );
}

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
export default App;
