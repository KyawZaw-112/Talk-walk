import React, {createContext, useContext, useState} from "react";
import axios from "axios";
import {format} from "date-fns";

const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [articles, setArticles] = useState([]);
    const [rssArticles, setRssArticles] = useState([]);
    const [search, setSearch] = useState("UAE");
    const [lineChartData, setLineChartData] = useState([]);
    const [happiness, setHappiness] = useState(0);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const [loading, setLoading] = useState(false);

    const fetchArticleData = async () => {
        try {

            const {data} = await axios.get(`https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7D`)
            setArticles(data)
            return data
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const fetchArticleDataRssFeed = async () => {
        try {
            const { data } = await axios.get(`https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7D`);
            const rssFeedNumberToFilter = 1306000;
            const filteredArticles = data?.result?.filter(article => article.rssfeed >= rssFeedNumberToFilter);
            setRssArticles(filteredArticles);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchLineChartData = async () => {
        const {api} = await axios.get(`https://ai.oigetit.com/AI71/Histogram?json=%7b%22StartDate%22:%22${Date.now()}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7d`)
        setLineChartData(api)
    }

    //
    return (
        <DataContext.Provider
            value={{
                articles,
                fetchArticleData,
                setSearch,
                search,
                fetchLineChartData,
                lineChartData,
                date,
                setDate,
                happiness,
                setHappiness,
                loading,
                fetchArticleDataRssFeed,
                rssArticles,
            }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);