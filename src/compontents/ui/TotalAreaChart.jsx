import React, {useEffect, useState} from 'react';
import {AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area} from "recharts"
import axios from "axios";
import {format} from "date-fns";
import {useData} from "../../context/context.jsx";
const TotalAreaChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {date,search} = useData();
    //`https://ai.oigetit.com/AI71/Histogram?json=%7B%22StartDate%22:%22%22,%22EndDate%22:%22%22,%22Query%22:%22${search}%22%7D`

    const fetchData = async () => {
        //
        try {
            const {data} = await axios.get(
            `https://ai.oigetit.com/AI71/Histogram?json=%7B%22StartDate%22:%222024-09-01%22,%22EndDate%22:%222024-10-01%22,%22Query%22:%22UAE%22%7D`
            );


            setData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    console.log(data)
    console.log(format);

    useEffect(() => {
        fetchData();
    }, [date, search]);
    return (
        <div>
            <AreaChart width={730} height={250} data={data}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FACCE5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="pubdate" />
                <YAxis dataKey="volume" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="volume" stroke="#FACCE5" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
};

export default TotalAreaChart;