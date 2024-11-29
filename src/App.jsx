import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import "../src/App.css";
import { useState } from "react";
import PostListProvider from "./store/postStorage";
import Spinner from "./component/Spinner";
import BackToTop from "./component/BackToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid d-flex">
      <BackToTop></BackToTop>
      <Sidebar></Sidebar>
      <div className="container-fluid d-block">
        <Header></Header>
        <PostListProvider>
          <Outlet />
        </PostListProvider>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
