import React from 'react';
import Navbar from "./compontents/Navbar.jsx";
import Aside from "./compontents/Aside.jsx";
import Filter from "./compontents/Filter.jsx";
import Header from "./compontents/Header.jsx";
import HashtagHeader from "./compontents/HashtagHeader.jsx";
import {Routes,Route} from "react-router-dom";
import Demographics from "./page/Demographics.jsx";
import KeyMetric from "./page/KeyMetric.jsx";
import WorldMap from "./page/WorldMap.jsx";
import TopTheme from "./page/TopTheme.jsx";
import Influencer from "./page/influencer.jsx";
import {DataContextProvider} from "./context/context.jsx";
import NewsDetail from "./compontents/ui/NewsDetail.jsx";

const App = () => {
    return (
        <DataContextProvider>

        <div className={"relative  w-full h-full  bg-[#606060]/15"}>
            <Navbar />
            <Filter />
            <Aside />
            <Header />
            <HashtagHeader />
            <Routes>
                <Route path={"/"} element={<KeyMetric />} />
                <Route path={"/world-map"} element={<WorldMap />} />
                <Route path={"/influencer"} element={<Influencer />} />
                <Route path={"/top-theme"} element={<TopTheme />} />
                <Route path={"/demographics"} element={<Demographics />} />
                <Route path={"/influencer/article/:id"} element={<NewsDetail />} />
            </Routes>
        </div>
        </DataContextProvider>
    );
};

export default App;