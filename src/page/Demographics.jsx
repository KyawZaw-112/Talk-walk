import React, {useEffect} from 'react';
import LineChartData from "../compontents/ui/LineChartData.jsx";
import BarChartData from "../compontents/ui/BarChartData.jsx";

const Demographics = () => {
    useEffect(() => {
        document.title = "Demographics";
    }, []);
    return (
        <div className={"top-90 w-[90%] bg-white   left-24  absolute px-5 py-4 flex  flex-col gap-5"}>
            <p className={"text-xl font-bold font-outfit text-[#0fa7e6]"}>Eagle AI Dashboard</p>
            <LineChartData />
            <BarChartData />
        </div>
    );
};

export default Demographics;