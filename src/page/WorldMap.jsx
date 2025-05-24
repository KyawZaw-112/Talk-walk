import React, {useEffect} from 'react';


const WorldMap = () => {
    useEffect(()=>{
        document.title = "World Map";
    },[])
    return (
        <section className={"w-[90%] top-90 flex justify-center items-center absolute z-10"}>
            World Map
        </section>
    );
};

export default WorldMap;