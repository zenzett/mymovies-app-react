import React, { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full overflow-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
