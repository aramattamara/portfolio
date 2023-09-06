import React from "react";
import "./index.css";
import Footer from "./components/Footer.jsx";
import FixedSidebar from "./components/FixedSidebar.jsx";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <FixedSidebar/>
                    <BrowserRouter>
                        <main className="pt-4 lg:py-24 lg:w-1/2">
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </main>

                    </BrowserRouter>
            </div>
            <Footer/>
        </div>
    )
}