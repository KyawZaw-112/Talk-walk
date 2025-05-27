import React, {useEffect} from 'react';
import {useData} from "../../context/context.jsx";
import TrendNewsCard from "./TrendNewsCard.jsx";

const TrendNews = () => {
    const {fetchArticleDataRssFeed, rssArticles, date, search} = useData()
    useEffect(() => {
        fetchArticleDataRssFeed()
    }, [date, search])

    return (
        <div className={"flex flex-col w-[50vw] gap-y-2"}>
            <h1 className={"text-xl font-bold font-outfit"}>
                Trend News
            </h1>
            {
                rssArticles?.map(rssArticle => (
                    <>

                    <TrendNewsCard article={rssArticle}/>
                    </>
                ))
            }
        </div>
    );
};

export default TrendNews;