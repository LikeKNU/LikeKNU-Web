import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from 'pages/MainPage';
import NoticePage from 'pages/NoticePage';
import CalendarPage from 'pages/CalendarPage';
import Test from 'pages/Test';
import BusPage from 'pages/BusPage';
import MenuPage from 'pages/MenuPage';
import SettingPage from "./pages/SettingPage";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollNoticePage from "./pages/InfiniteScrollNoticePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/main/:campus" element={<MainPage />} />
      <Route path="/bus" element={<BusPage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/infinite" element={<InfiniteScrollNoticePage />} />
    </Routes>
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
