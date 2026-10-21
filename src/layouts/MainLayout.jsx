import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black-900 flex flex-col">
            <Header />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;