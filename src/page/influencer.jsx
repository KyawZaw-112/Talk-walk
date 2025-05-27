'use strict'
import React, {useEffect} from 'react';
import {useData} from "../context/context.jsx";
import DataTable from "../compontents/ui/DataTable.jsx";
import AllNews from "../compontents/ui/AllNews.jsx";
import TrendNews from "../compontents/ui/TrendNews.jsx";
import {ScaleLoader} from "react-spinners";

const Influencer = () => {
    const {search, loading} = useData();
    useEffect(() => {
        document.title = "Influencer";
    }, []);
    return (
        <div
            className={`top-90 w-[90%] bg-white shadow-xl  left-24  absolute px-5 py-4 flex flex-row   gap-5 ${loading && "h-[400px] justify-center"}`}>
            {
                loading && (
                    <ScaleLoader
                        color={"#345199"}
                        height={100}
                        margin={6}
                        radius={2}
                        width={10}
                    />
                )
            }
            <AllNews/>
            <TrendNews/>

        </div>
    );
};

export default Influencer;