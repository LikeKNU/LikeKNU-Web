import BusPage from 'pages/BusPage';
import CalendarPage from 'pages/CalendarPage';
import MainPage from 'pages/MainPage';
import MenuPage from 'pages/MenuPage';
import Test from 'pages/Test';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { initializeDevice, initializeDeviceColor } from './api/initializer';
import BottomNav from './components/globals/BottomNav';
import colors from './constants/colors';
import NoticePage from './pages/NoticePage';
import NoticeRenderPage from './pages/NoticeRenderPage';
import NotificationPage from './pages/NotificationPage';
import SettingAboutPage from './pages/SettingAboutPage';
import SettingNotificationPage from './pages/SettingNotificationPage';
import SettingPage from './pages/SettingPage';
import RouteChangeTracker from './RouteChangeTrancker';
import { getCampus, isDarkMode } from './utils/DeviceManageUtil';

function App() {
  const location = useLocation();
  const [isBottomBar, setIsBottomBar] = useState(true);
  const [campus, setCampus] = useState(getCampus);

  useEffect(() => {
    const bodyTag = document.querySelector('body');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const backgroundColor = document.querySelector('meta[name="background-color"]');

    if (isDarkMode()) {
      bodyTag.style.backgroundColor = colors.DARK_GRAY;
      themeColor.setAttribute('content', colors.DARK);
      backgroundColor.setAttribute('content', colors.DARK);
    } else {
      bodyTag.style.backgroundColor = colors.WHITE;
      themeColor.setAttribute('content', colors.GRAY50);
      backgroundColor.setAttribute('content', colors.GRAY50);
    }
  }, []);

  useEffect(() => {
    if (
      location.pathname.includes('/setting') ||
      location.pathname === '/notification' || location.pathname === '/notice/details'
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
  initializeDeviceColor();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage setCampus={setCampus} selectedCampus={campus} />} />
        <Route path="/bus" element={<BusPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/setting/notificationTag" element={<SettingNotificationPage />} />
        <Route path="/setting/about" element={<SettingAboutPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notice/details" element={<NoticeRenderPage />}></Route>
        <Route path="*" element={<Test />} />
      </Routes>
      {isBottomBar && <BottomNav isAndroid={isAndroid} selectedCampus={campus} />}
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
