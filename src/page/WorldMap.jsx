import React, {useEffect} from 'react';
import MapData from "../compontents/MapData.jsx";
import BarChartData from "../compontents/ui/BarChartData.jsx";
import PieChartData from "../compontents/ui/PieChartData.jsx";

const WorldMap = () => {
    useEffect(() => {
        document.title = "World MapData";
    }, [])
    return (
        <section className={"w-[90%] top-90 flex-row flex justify-center gap-10  left-24 absolute z-10 py-10"}>
            <MapData/>
            <PieChartData/>
        </section>
    );
};

export default WorldMap;