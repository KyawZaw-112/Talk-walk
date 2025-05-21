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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    `https://ai.oigetit.com/AI71/Histogram?json=%7B%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22UAE%22%7D`
                );

                //
                //
                // Transform the data into the format required by Recharts
                const transformedData = data.map(item => ({
                    date: ` ${item.pubdate}`,
                    Negative: `${item.volume_neg.toString().slice(0, 3)}`,
                    Positive: `${item.volume_pos.toString().slice(0, 3)}`,
                    Neutral: `${item.volume_neu.toString().slice(0, 3)}`,
                    Sentiment: `${parseFloat(item.sentiment * 100).toFixed()}%`,
                    // Volume: `${item.volume * 6}`,
                    Volume:`${item.volume}`,
                    Volume_Num:`${item.volume.toString().slice(0, 2) * 17}`,
                }));

                setData(transformedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search, date]);

    return (
        <div className={"shadow-xl px-5 py-4 w-[1300px] mx-auto border-t-2 border-gray-100 rounded-lg"}>

                <Typography variant="h6" gutterBottom>
                    Sentiment in Real-Time of "{search.length === 0 ? "UAE" : search}"
                </Typography>
            {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                        <CircularProgress/>
                    </Box>
                )
                :
                (

                    <BarChart
                        width={1300}
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
                        <YAxis dataKey={"Volume_Num"}  />
                        <Tooltip/>
                        <Legend fill={"circle"}/>
                        <Bar dataKey="Negative" fill="#f00" activeBar={<Rectangle fill="red" stroke="red"/>}/>
                        <Bar dataKey="Positive" fill="#0f0" activeBar={<Rectangle fill="#0f0" stroke="0f0"/>}/>
                        <Bar dataKey="Neutral" fill="#FFCA58" activeBar={<Rectangle fill="#FFCA58" stroke="#FFCA58"/>}/>
                        <Bar dataKey="Volume"  fill="none" />
                    </BarChart>
                )
            }
        </div>

    );
}

export default BarChartData;
