'use strict'
import React, {useEffect} from 'react';
import {useData} from "../context/context.jsx";
import DataTable from "../compontents/ui/DataTable.jsx";

const Influencer = () => {
    const {search} = useData();
    console.log(search.length)
    return (
        <div className={"top-90 w-[90%] bg-white h-[100vh]   left-24  absolute px-5 py-4 flex  flex-col gap-5"}>
            <h1 className={"text-xl font-bold font-outfit "}>Real Time  News of {search.length === 0 ? "UAE" : search}</h1>
            <DataTable />
        </div>
    );
};

export default Influencer;