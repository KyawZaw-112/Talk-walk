import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import {format} from "date-fns";
import {useData} from "../context/context.jsx";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
countries.registerLocale(enLocale);



const MapChart = () => {
    const [sentimentMap, setSentimentMap] = useState({});
const {date,search} = useData()
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://ai.oigetit.com/AI71/Country?json=%7B%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7D`)
            const data = Array.isArray(response.data) ? response.data : [];
            const newMap = {};
            console.log(data)
            data.forEach((item) => {
                const iso2 = item.country;
                const sentimentRaw = item.sentiment || 0;
                if (iso2) newMap[iso2] = sentimentRaw;
            });
            setSentimentMap(newMap);
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        fetchData();
    }, [date,search]);

    const getColor = (value) => {
        if (value >= 6) return "#4CAF50";
        if (value >= 2) return "#FFC107";
        if (value >= -1) return "#F44336";
        return "red";
    };

    const LegendItem = ({ color, label }) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                border: "1px solid #000"
            }} />
            <span style={{ fontSize: "14px" }}>{label}</span>
        </div>
    );


    return (
        <div style={{ width: "800px", height: "680px" }} className={"shadow-xl rounded-lg px-6 py-4"}>
            <p className={"text-xl font-bold font-outfit"}>World Map</p>
        <ComposableMap projection="geoEqualEarth" >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                        const countryName = geo.properties.name;
                        const isoA2 = countries.getAlpha2Code(countryName, "en");
                        const sentiment = sentimentMap[isoA2] || 0;
                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={getColor(sentiment)}
                                stroke="#fff"

                            />
                        );
                    })
                }
            </Geographies>

        </ComposableMap>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                gap: "20px"
            }}>
                <LegendItem color="#4CAF50" label="Positive (70 % – 100 % )" />
                <LegendItem color="#FFC107" label="Neutral (40 % – 69 %)" />
                <LegendItem color="#F44336" label="Negative (1 % – 39 % )" />
            </div>
        </div>

    );
};

export default MapChart;
