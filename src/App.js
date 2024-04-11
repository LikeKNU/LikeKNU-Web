import { SpeedInsights } from '@vercel/speed-insights/react'
import BusPage from 'pages/BusPage';
import CalendarPage from 'pages/CalendarPage';
import MainPage from 'pages/MainPage';
import MenuPage from 'pages/MenuPage';
import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { NavermapsProvider } from 'react-naver-maps';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { initializeDevice, initializeDeviceColor } from './api/initializer';
import IosImage from './assets/image/ios_onboarding.png';
import OtherImage from './assets/image/other_onboarding.png';
import BottomNav from './components/common/BottomNav';
import colors from './constants/colors';
import CampusMapPage from './pages/CampusMapPage';
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
  const bodyTag = document.querySelector('body');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const backgroundColor = document.querySelector('meta[name="background-color"]');
  const naverMapClientId = process.env.REACT_APP_NAVER_MAP_CLIENT_ID;

  useEffect(() => {
    if (
      location.pathname.includes('/setting/') || location.pathname === '/calendar' ||
      location.pathname === '/notification' || location.pathname === '/notice/details'
      || location.pathname === '/campusMap'
    ) {
      setIsBottomBar(false);
    } else {
      setIsBottomBar(true);
    }

    let lightColor;
    let darkColor;
    if (location.pathname === '/') {
      lightColor = colors.GRAY50;
      darkColor = colors.DARK;
    } else {
      lightColor = colors.WHITE;
      darkColor = colors.DARK_GRAY;
    }

    if (isDarkMode()) {
      bodyTag.style.backgroundColor = darkColor;
      themeColor.setAttribute('content', darkColor);
      backgroundColor.setAttribute('content', darkColor);
    } else {
      bodyTag.style.backgroundColor = lightColor;
      themeColor.setAttribute('content', lightColor);
      backgroundColor.setAttribute('content', lightColor);
    }
  }, [location]);

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
      <NavermapsProvider ncpClientId={naverMapClientId}>
        <Suspense fallback="Loading...">
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
            <Route path="/campusMap" element={<CampusMapPage />} />
          </Routes>
        </Suspense>
      </NavermapsProvider>
      {isBottomBar && <BottomNav isAndroid={isAndroid} selectedCampus={campus} />}
      <SpeedInsights />
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
