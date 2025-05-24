// LineChartComponent.jsx
import React, {useEffect, useState} from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import {Card, CardContent, Typography, CircularProgress, Box} from "@mui/material";
import {useData} from "../../context/context.jsx";
import axios from "axios";
import {format} from "date-fns";
import DataModal from "../DataModal.jsx";

const LineChartComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [negativeBtn, setNegativeBtn] = useState(true);
    const [selectedDate, setSelectedDate] = useState(null);
    const [articles, setArticles] = useState([]);
    const [loadingArticles, setLoadingArticles] = useState(false);
    const [showHappyOnly, setShowHappyOnly] = useState(false);
    const {search, date,} = useData();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        console.log(open)
    };
    const handleClose = () => setOpen(false);
    const fetchData = async () => {
        //
        try {
            const {data} = await axios.get(
                `https://ai.oigetit.com/AI71/Histogram?json=%7b%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7d`
            );
            const transformedData = data.map(item => ({
                date: ` ${item.pubdate}`,
                Negative: item.volume_neg,
                Positive: item.volume_pos,
                Neutral: item.volume_neu,
                Volume: item.volume,
                Sentiment: item.sentiment,
                // Volume:item.volume_pos+item.volume_neg+item.volume_neu
            }));

            setData(transformedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [date, search]);

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length > 0) {
            const dataPoint = payload[0].payload;

            return (
                <div style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.15)"
                }}>
                    <p style={{fontWeight: 600}}>{`Date: ${label}`}</p>
                    <p style={{color: "#FFCA58", margin: 0}}>Neutral: <strong>{dataPoint.Neutral}</strong></p>
                    <p style={{color: "#0f0", margin: 0}}>Positive: <strong>{dataPoint.Positive}</strong></p>
                    <p style={{color: "#f00", margin: 0}}>Negative: <strong>{dataPoint.Negative}</strong></p>
                    <p style={{color: "#555", margin: "5px 0 0"}}>Total Volume: <strong>{dataPoint.Volume}</strong></p>
                    <div className={"flex"}>
                        Sentiment:
                        {
                            parseInt(dataPoint.Sentiment) >= 2 ? (
                                    <p className={"text-green-400"}>Very Positive</p>
                                )
                                :
                                parseInt(dataPoint.Sentiment) >= 1 && parseInt(dataPoint.Sentiment) <= 2 ? (
                                        <p className={"text-green-400"}>Positive</p>
                                    )
                                    :
                                    parseInt(dataPoint.Sentiment) <= -0.2 ? (
                                            <p className={"text-red-500"}>Very Negative</p>
                                        )
                                        :
                                        parseInt(dataPoint.Sentiment) < -0.1 && parseInt(dataPoint.Sentiment) <= -0.2 ? (
                                                <p className={"text-red-500"}>Negative</p>
                                            ) :
                                            null
                        }

                    </div>
                </div>
            );
        }
        return null;
    };


    return (
        <>
            <Card sx={{width: 1200, height:500, margin: "auto", mt: 4, p: 2}} className={"select-none"}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Sentiment in Real-Time of "{search.length === 0 ? "UAE" : search}"
                    </Typography>
                    {loading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                            <CircularProgress/>
                        </Box>
                    ) : (
                        <ResponsiveContainer height={400}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="date"/>
                                <YAxis dataKey={"Volume"}/>
                                <Tooltip content={<CustomTooltip/>}/>
                                <Legend/>
                                <Line
                                    dataKey="Positive"
                                    stroke="#0f0"
                                    strokeWidth={2}
                                    dot={(props) => {
                                        const { cx, cy, r, stroke, strokeWidth, fill, index } = props;

                                        return (
                                            <circle
                                                key={`dot-${index}`}
                                                cx={cx}
                                                cy={cy}
                                                r={ 6}
                                                stroke={stroke}
                                                strokeWidth={strokeWidth}
                                                fill={fill}
                                                onClick={async () => {
                                                    setLoadingArticles(true);
                                                    const clickedDate = data[index].date.trim();
                                                        setSelectedDate(clickedDate);
                                                    try {
                                                        const {data} = await axios.get(
                                                          `https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%22${clickedDate}%22,%22EndDate%22:%22${clickedDate}%22,%22Query%22:%22${search.length === 0 ? "UAE" : search}%22%7D`
                                                        );
                                                        const articlesArray = Array.isArray(data) ? data : data.result || [];
                                                        const happyArticles = articlesArray.filter(article => article.happiness > 1);
                                                        setArticles(happyArticles);
                                                        setOpen(true);
                                                    } catch (error) {
                                                        console.error("Failed to fetch articles:", error);
                                                    } finally {
                                                        setLoadingArticles(false);
                                                    }
                                                }}
                                                style={{ cursor: "pointer" }}
                                            />
                                        );
                                    }}
                                />
                                <Line
                                    dot={(props) => {
                                        const { cx, cy, r, stroke, strokeWidth, fill, index } = props;

                                        return (
                                            <circle
                                                key={`dot-${index}`}
                                                cx={cx}
                                                cy={cy}
                                                r={ 6}
                                                stroke={stroke}
                                                strokeWidth={strokeWidth}
                                                fill={fill}
                                                onClick={async () => {
                                                    setLoadingArticles(true);
                                                    const clickedDate = data[index].date.trim();
                                                    setSelectedDate(clickedDate);
                                                    try {
                                                        const {data} = await axios.get(
                                                            `https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%22${clickedDate}%22,%22EndDate%22:%22${clickedDate}%22,%22Query%22:%22${search.length === 0 ? "UAE" : search}%22%7D`
                                                        );
                                                        const articlesArray = Array.isArray(data) ? data : data.result || [];
                                                        const happyArticles = articlesArray.filter(article => article.happiness < 0);
                                                        console.log(articlesArray.map(a => a.happiness));
                                                        setArticles(happyArticles);
                                                        setOpen(true);
                                                        console.log(happyArticles)
                                                    } catch (error) {
                                                        console.error("Failed to fetch articles:", error);
                                                    } finally {
                                                        setLoadingArticles(false);
                                                    }
                                                }}
                                                style={{ cursor: "pointer" }}
                                            />
                                        );
                                    }}
                                    type="monotone" dataKey="Negative" stroke="#f00" strokeWidth={2}/>
                                <Line
                                    dot={(props) => {
                                        const { cx, cy, r, stroke, strokeWidth, fill, index } = props;

                                        return (
                                            <circle
                                                key={`dot-${index}`}
                                                cx={cx}
                                                cy={cy}
                                                r={ 6}
                                                stroke={stroke}
                                                strokeWidth={strokeWidth}
                                                fill={fill}
                                                onClick={async () => {
                                                    setLoadingArticles(true);
                                                    const clickedDate = data[index].date.trim();
                                                    setSelectedDate(clickedDate);
                                                    try {
                                                        const {data} = await axios.get(
                                                            `https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%22${clickedDate}%22,%22EndDate%22:%22${clickedDate}%22,%22Query%22:%22${search.length === 0 ? "UAE" : search}%22%7D`
                                                        );
                                                        const articlesArray = Array.isArray(data) ? data : data.result || [];
                                                        const happyArticles = articlesArray.filter(article => article.happiness === 0 && article.happiness <= 1);
                                                        console.log(articlesArray.map(a => a.happiness));
                                                        setArticles(happyArticles);
                                                        setOpen(true);
                                                        console.log(happyArticles)
                                                    } catch (error) {
                                                        console.error("Failed to fetch articles:", error);
                                                    } finally {
                                                        setLoadingArticles(false);
                                                    }
                                                }}
                                                style={{ cursor: "pointer" }}
                                            />
                                        );
                                    }}
                                    type="monotone" dataKey="Neutral" stroke="#FFCA58" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>
            <DataModal loading={loadingArticles} open={open} handleClose={handleClose}  articles={articles} selectedDate={selectedDate} />
        </>
    );
};

export default LineChartComponent;
