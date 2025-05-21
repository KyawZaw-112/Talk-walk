import React,{createContext,useContext,useState} from "react";
import axios from "axios";
import {format} from "date-fns";
const DataContext =  createContext();

export const DataContextProvider = ({children}) => {

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");
    const [lineChartData, setLineChartData] = useState([]);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const fetchArticleData = async () => {
        const {data} = await axios.get(`https://ai.oigetit.com/AI71/Articles?json=%7B%22StartDate%22:%222024-09-01%22,%22EndDate%22:%222024-10-01%22,%22Query%22:%22${search}%22%7D`)
        setArticles(data)
    }

    const fetchLineChartData = async () => {
        const {api} = await axios.get(`https://ai.oigetit.com/AI71/Histogram?json=%7b%22StartDate%22:%22${format(date.startDate, "yyyy-MM-dd")}%22,%22EndDate%22:%22${format(date.endDate, "yyyy-MM-dd")}%22,%22Query%22:%22${search}%22%7d`)
        const data = await api.json();
        setLineChartData(data)
    }

    //
    return(
        <DataContext.Provider
            value={{
                articles,
                fetchArticleData,
                setSearch,
                search,
                fetchLineChartData,
                lineChartData,
                date,
                setDate
            }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);