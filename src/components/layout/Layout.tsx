
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log("Layout component renderizado");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow pt-20 bg-black">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
