import React, { useState } from "react";
import Content from "../../components/ContentHomepage/Content";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Home = () => {
  const [pages, setPages] = useState("");

  const loginPage = () => {
    setPages("login");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {pages === "login" ? (
        <Login homePage={setPages} />
      ) : pages === "signup" ? (
        <SignUp />
      ) : (
        <div>
          <Header loginPage={loginPage} />
          <Content />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
