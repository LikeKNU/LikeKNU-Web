import React, { useEffect, useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppStoreImage from './assets/image/app-store.png';
import PlayStoreImage from './assets/image/play-store.png';
import colors from './constants/colors';
import { getCampus, isDarkMode } from './utils/DeviceManageUtil';

function App() {
  const location = useLocation();
  const [isBottomBar, setIsBottomBar] = useState(true);
  const [campus, setCampus] = useState(getCampus);
  const bodyTag = document.querySelector('body');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const backgroundColor = document.querySelector('meta[name="background-color"]');

  useEffect(() => {
    if (
      location.pathname.includes('/setting/') || location.pathname === '/calendar' ||
      location.pathname === '/notification' || location.pathname === '/notice/details'
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
  /*if (isiOS && !window.matchMedia('(display-mode: standalone)').matches) {
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
  }*/
  if (isAndroid) {
    return (
      <div style={{ width: '100%' }}
           onClick={() => window.open('https://play.google.com/store/apps/details?id=ac.knu.likeknu')}>
        <Image src={PlayStoreImage} />
      </div>
    )
  }

  /*initializeDevice();
  RouteChangeTracker();
  initializeDeviceColor();*/
  return (
    /*<>
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
      </Routes>
      {isBottomBar && <BottomNav isAndroid={isAndroid} selectedCampus={campus} />}
    </>*/
    <div style={{ width: '100%' }} onClick={() => window.open('https://apps.apple.com/app/id6499512208')}>
      <Image src={AppStoreImage} />
    </div>
  );
}

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
export default App;
