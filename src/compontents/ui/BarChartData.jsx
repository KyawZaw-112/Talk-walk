import React, {useEffect, useState} from 'react';
import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import axios from "axios";
import {format} from "date-fns";
import {useData} from "../../context/context.jsx";
import {Box, Card, CircularProgress, Typography,CardContent} from "@mui/material";

const BarChartData = () => {

    const {date, search} = useData();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    `https://ai.oigetit.com/AI71/Histogram?json=%7B%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22UAE%22%7D`
                );


                const transformedData = data.map(item => ({
                    date: ` ${item.pubdate}`,
                    Negative: item.volume_neg,
                    Positive: item.volume_pos,
                    Neutral: item.volume_neu,
                    Volume:item.volume,
                    Volume_Num:item.volume + 20,
                }));

                setData(transformedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };


    const CustomTooltip = ({payload,active,label}) => {
        if (active && payload && payload.length) {
            const dataPoint = payload[0].payload;
            return (
                <div className="custom-tooltip bg-white p-2 shadow rounded">
                    <p className="label font-bold">{`Date: ${label}`}</p>
                    {payload.map((entry, index) => (
                        <div>
                        <p key={index} style={{ color: entry.fill }}>{`${entry.name}: ${entry.value}`}</p>
                        <p className={"text-green-400"}>Positive : {dataPoint.Positive}</p>
                        <p className={"text-yellow-600"}>Neutral : {dataPoint.Neutral}</p>
                        <p className={"text-red-500"}>Negative : {dataPoint.Positive}</p>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }

    useEffect(() => {
        fetchData();
    }, [search, date]);


    return (
        <div className={"shadow-xl px-5 py-4 w-[1200px] mx-auto border-t-2 border-gray-100 rounded-lg"}>

                <Typography variant="h6" gutterBottom>
                    Media Mentions of "{search.length === 0 ? "UAE" : search}"
                </Typography>
            {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                        <CircularProgress/>
                    </Box>
                )
                :
                (

                    <BarChart
                        width={1100}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2"/>
                        <XAxis dataKey="date"/>
                        <YAxis dataKey="Volume_Num"  />
                        <Tooltip content={<CustomTooltip/>}/>
                        <Legend/>
                        {/*<Bar dataKey="Negative" fill="#f00" activeBar={<Rectangle fill="red" stroke="red"/>}/>*/}
                        {/*<Bar dataKey="Positive" fill="#0f0" activeBar={<Rectangle fill="#0f0" stroke="0f0"/>}/>*/}
                        {/*<Bar dataKey="Neutral" fill="#FFCA58" activeBar={<Rectangle fill="#FFCA58" stroke="#FFCA58"/>}/>*/}
                        <Bar dataKey="Volume" fill="#6989DD" />
                    </BarChart>
                )
            }
        </div>

    );
}

export default BarChartData;
