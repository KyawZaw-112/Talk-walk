// LineChartComponent.jsx
import React, { useEffect, useState } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { Card, CardContent, Typography, CircularProgress, Box } from "@mui/material";
import {useData} from "../../context/context.jsx";
import axios from "axios";
import {format} from "date-fns";

const LineChartComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [negativeBtn, setNegativeBtn] = useState(true);
    const {search,date,} = useData();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    `https://ai.oigetit.com/AI71/Histogram?json=%7b%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7d`
                );
                // Transform the data into the format required by Recharts
                const transformedData = data.map(item => ({
                    date: ` ${item.pubdate}`,
                    Negative:`${item.volume_neg.toString().slice(0, 2)}`,
                    Positive:`${item.volume_pos.toString().slice(0, 2)}`,
                    Neutral: `${item.volume_neu.toString().slice(0, 2)}`,
                    Sentiment:`${parseFloat(item.sentiment * 100).toFixed()}%`,
                    Volume:`${item.volume.toString().slice(0, 3 )}`,
                    Volume_Num:`${item.volume.toString().slice(0, 2 )}`
                    // Volume:item.volume_pos+item.volume_neg+item.volume_neu
                }));

                setData(transformedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search,date]);

    return (
        <Card sx={{ width: 1300, margin: "auto", mt: 4, p: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Sentiment in Real-Time of "{search.length === 0 ? "UAE" : search}"
                </Typography>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="Volume_Num" />
                            <Tooltip />
                            <Legend content={"Volume"} />
                            <Line type="monotone" dataKey="Positive" stroke="#0f0" strokeWidth={2} />
                            <Line type="monotone" dataKey="Negative" stroke="#f00" strokeWidth={2} />
                            <Line type="monotone" dataKey="Neutral" stroke="#FFCA58" strokeWidth={2} />
                            <Line type="monotone"   dataKey="Sentiment" stroke="none" strokeWidth={0} />
                            <Line type="monotone"   dataKey="Volume" stroke="none" strokeWidth={0} />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    );
};

export default LineChartComponent;
