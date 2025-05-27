import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const PieChartData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchSentimentData = async () => {
            try {
                const response = await axios.get(
                    `https://ai.oigetit.com/AI71/Country?json=%7B%22StartDate%22:%222024-09-01%22,%22EndDate%22:%222024-10-01%22,%22Query%22:%22UAE%22%7D`
                );

                const apiData = Array.isArray(response.data) ? response.data : [];

                const cleaned = apiData
                    .filter(item => item.country && typeof item.sentiment === 'number')
                    .map(item => ({
                        country: item.country,
                        sentiment: item.sentiment,
                    }));

                const top5 = cleaned
                    .sort((a, b) => b.sentiment - a.sentiment)
                    .slice(0, 5)
                    .map(item => ({
                        name: item.country,
                        value: `${parseFloat(item.sentiment.toFixed(1))} %`,
                    }));

                setData(top5);
            } catch (error) {
                console.error("Error fetching sentiment data:", error);
            }
        };

        fetchSentimentData();
    }, []);

    console.log(data)

    return (
        <div className={"shadow-xl h-[500px] px-3 py-5"}>
            <h3 className={"text-xl font-bold font-outfit"}>Top 5 Countries by Sentiment</h3>
            <PieChart width={500} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={150}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (

                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartData;
