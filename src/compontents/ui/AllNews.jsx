import React, {useEffect} from 'react';
import {useData} from "../../context/context.jsx";
import NewsCard from "./NewsCard.jsx";

const AllNews = () => {
    const {search, articles,date, fetchArticleData,loading} = useData()
    useEffect(() => {
        fetchArticleData();
    }, [search,date])

    console.log(articles)
    return (
        <>
            <div className={"flex flex-col gap-5"}>
                <h1 className={`text-xl font-bold font-outfit ${loading && "hidden"}`}>Real Time News
                    of {search.length === 0 ? "UAE" : search}</h1>
                <div className={`flex flex-wrap gap-4`}>

                {
                    articles?.result?.map(article => (
                            <div key={article.id}>
                                <NewsCard article={article}/>
                            </div>
                        )
                    )
                }
                </div>
            </div>

        </>
    );
};

export default AllNews;