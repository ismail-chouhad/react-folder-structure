import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <SideBar />
      {children}
    </>
  );
};

export default MainLayout;
