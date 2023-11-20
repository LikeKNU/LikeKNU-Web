import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bus" element={<BusPage />} />
        <Route path="/notice" element={<InfiniteScrollNoticePage />} />
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
      {isBottomBar && <BottomNav />}
    </>

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
  );
}

export default App;
