'use strict'
import React, {useEffect} from 'react';
import {useData} from "../context/context.jsx";
import DataTable from "../compontents/ui/DataTable.jsx";
import AllNews from "../compontents/ui/AllNews.jsx";
import TrendNews from "../compontents/ui/TrendNews.jsx";

const Influencer = () => {
    const {search} = useData();
    useEffect(() => {
        document.title = "Influencer";
    },[]);
    return (
        <div className={"top-90 w-[90%] bg-white shadow-xl  left-24  absolute px-5 py-4 flex flex-row  items-center  gap-5"}>
            <AllNews />
        </div>
    );
};

export default Influencer;