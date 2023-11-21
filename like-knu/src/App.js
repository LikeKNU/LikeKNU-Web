import React, {useEffect, useState} from "react";
import "./App.css";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "pages/MainPage";
import CalendarPage from "pages/CalendarPage";
import Test from "pages/Test";
import BusPage from "pages/BusPage";
import MenuPage from "pages/MenuPage";
import SettingPage from "./pages/SettingPage";
import InfiniteScrollNoticePage from "./pages/InfiniteScrollNoticePage";
import BottomNav from "./components/globals/BottomNav";
import NotificationPage from "./pages/NotificationPage";
import SettingNotificationPage from "./pages/SettingNotificationPage";
import SettingAboutPage from "./pages/SettingAboutPage";
import {initializeDevice} from "./api/initializer";

function App() {
  const location = useLocation();
  const [isBottomBar, setIsBottomBar] = useState(true);
  useEffect(() => {
    if (
      location.pathname.includes("/setting") ||
      location.pathname === "/notification"
    ) {
      setIsBottomBar(false);
    } else {
      setIsBottomBar(true);
    }
  }, [location]);

  if (window.matchMedia('(display-mode: standalone)').matches) {
    // PWA로 설치된 상태
    initializeDevice();
    return (
      <>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/bus" element={<BusPage/>}/>
          <Route path="/notice" element={<InfiniteScrollNoticePage/>}/>
          <Route path="/calendar" element={<CalendarPage/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
          <Route
            path="/setting/notificationTag"
            element={<SettingNotificationPage/>}
          />
          <Route path="/setting/about" element={<SettingAboutPage/>}/>
          <Route path="/notification" element={<NotificationPage/>}/>
          <Route path="*" element={<Test/>}/>
        </Routes>
        {isBottomBar && <BottomNav/>}
      </>);
  } else {
    // PWA로 설치되지 않은 상태
    const isAndroid = /Android/.test(navigator.userAgent);
    const isiOS = /(iPhone|iPad|iPod)/.test(navigator.userAgent);

    if (isAndroid) {
      alert('Android');
    } else if (isiOS) {
      alert('iOS');
    } else {
      alert('Others');
    }

    return (
      <>
        <h1>PWA를 설치해 주세요!</h1>
      </>
    )
  }

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
