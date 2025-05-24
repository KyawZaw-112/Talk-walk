import React, {useEffect} from 'react';
import TotalAreaChart from "../compontents/ui/TotalAreaChart.jsx";

const KeyMetric = () => {
    useEffect(() => {
        document.title = "Key Metric";
    },[])
    return (
        <div className={"top-90 w-[90%] bg-white h-[100vh]   left-24  absolute px-5 py-4 flex  flex-col gap-5"}>
            {/*<TotalAreaChart/>*/}
        </div>
    );
};

export default KeyMetric;