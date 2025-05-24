import React from 'react';
import {useData} from "../context/context.jsx";
import {Link} from "react-router-dom";

const Theme = () => {
    const {search, setSearch} = useData();
    return (
        <div>
            <div className={"mx-auto flex justify-center gap-4"}>
                <p onClick={() => {
                    setSearch("makeup")
                }}
                   className={"cursor-pointer font-outfit text-[#7FBBD3]"}>
                    <Link to={"/demographics"}>#makeup</Link>
                </p>
                <p onClick={() => {
                    setSearch("#makeup")
                }}
                   className={"cursor-pointer font-outfit text-[#7FBBD3]"}>
                    <Link to={"/demographics"}>#makeup</Link>
                </p>
            </div>
            <div className={"mx-auto flex justify-center gap-20"}>
                <p
                    onClick={() => setSearch("Usa")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-3xl">
                    <Link to={"/demographics"}>#Usa</Link>
                </p>
                <p
                    onClick={() => setSearch("Usa")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-3xl">
                    <Link to={"/demographics"}>#Usa</Link>
                </p>
                <p
                    onClick={() => setSearch("Usa")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-3xl">
                    <Link to={"/demographics"}>#Usa</Link>
                </p>
                <p
                    onClick={() => setSearch("Usa")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-3xl">
                    <Link to={"/demographics"}>#Usa</Link>
                </p>
                <p
                    onClick={() => setSearch("design")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                    <Link to={"/demographics"}>#design</Link>
                </p>
                <p
                    onClick={() => setSearch("design")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                    <Link to={"/demographics"}>#design</Link>
                </p>
                <p
                    onClick={() => setSearch("design")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                    <Link to={"/demographics"}>#design</Link>
                </p>
            </div>
            <div className={"mx-auto flex justify-center gap-20"}>
                <p
                    onClick={() => setSearch("travel")}
                    className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                    <Link to={"/demographics"}>#travel</Link>
                </p>
                <p
                    onClick={() => setSearch("travel")}
                    className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                    <Link to={"/demographics"}>#travel</Link>
                </p>
                <p
                    onClick={() => setSearch("travel")}
                    className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                    <Link to={"/demographics"}>#travel</Link>
                </p>
                <p
                    onClick={() => setSearch("fashion")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                    <Link to={"/demographics"}>#fashion</Link>
                </p>
                <p
                    onClick={() => setSearch("fashion")}
                    className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                    <Link to={"/demographics"}>#fashion</Link>
                </p>
                <p
                    onClick={() => setSearch("fashion")}
                    className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                    <Link to={"/demographics"}>#fashion</Link>
                </p>
            </div>
            <div className={"mx-auto flex gap-40"}>
                <div className={" flex justify-center gap-20"}>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                </div>
                <div>
                    <p
                        onClick={() => setSearch("girl")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#girl</Link>
                    </p>
                </div>
            </div>
            <div className={"flex justify-center gap-20"}>
                <p
                    onClick={() => setSearch("beautiful")}
                    className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                    <Link to={"/demographics"}>#beautiful</Link>
                </p>
                <div className="flex justify-center gap-5">
                    <p
                        onClick={() => setSearch("beautiful")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#beautiful</Link>
                    </p>
                    <p
                        onClick={() => setSearch("beautiful")}
                        className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                        <Link to={"/demographics"}>#beautiful</Link>
                    </p>
                    <p
                        onClick={() => setSearch("dance")}
                        className="cursor-pointer font-outfit text-black text-6xl">
                        <Link to={"/demographics"}>#dance</Link>
                    </p>
                    <p
                        onClick={() => setSearch("travel")}
                        className="cursor-pointer font-outfit text-black text-xl">
                        <Link to={"/demographics"}>#travel</Link>
                    </p>
                </div>
                <div className={"flex justify-center gap-10"}>
                    <p
                        onClick={() => setSearch("travel")}
                        className="cursor-pointer font-outfit text-black text-xl">
                        <Link to={"/demographics"}>#travel</Link>
                    </p>
                    <p
                        onClick={() => setSearch("travel")}
                        className="cursor-pointer font-outfit text-black text-xl">
                        <Link to={"/demographics"}>#travel</Link>
                    </p>
                </div>
            </div>
            <div className={"flex justify-center gap-20"}>
                <p
                    onClick={() => setSearch("girl")}
                    className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                    <Link to={"/demographics"}>#girl</Link>
                </p>
                <div className="flex justify-center gap-20">
                    <p
                        onClick={() => setSearch("photography")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#photography</Link>
                    </p><p
                        onClick={() => setSearch("photography")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#photography</Link>
                    </p><p
                        onClick={() => setSearch("photography")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#photography</Link>
                    </p>
                </div>
            </div>
            <div className={"flex justify-center gap-12 "}>
                <div className="flex justify-center">
                        <p
                            onClick={() => setSearch("brunette")}
                            className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                            <Link to={"/demographics"}>#brunette</Link>
                        </p>
                        <p
                            onClick={() => setSearch("brunette")}
                            className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                            <Link to={"/demographics"}>#brunette</Link>
                        </p>
                </div>
                <div className={"flex "}>
                    <p
                        onClick={() => setSearch("brunette")}
                        className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                        <Link to={"/demographics"}>#brunette</Link>
                    </p>
                    <p
                        onClick={() => setSearch("hot")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#hot</Link>
                    </p>
                    <p
                        onClick={() => setSearch("shorthair")}
                        className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                        <Link to={"/demographics"}>#shorthair</Link>
                    </p>

                </div>
                <div className={"flex justify-center "}>
                    <p
                        onClick={() => setSearch("shorthair")}
                        className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                        <Link to={"/demographics"}>#shorthair</Link>
                    </p>
                    <p
                        onClick={() => setSearch("shorthair")}
                        className="cursor-pointer font-outfit text-[#ADD4E3] text-4xl">
                        <Link to={"/demographics"}>#shorthair</Link>
                    </p>
                </div>
            </div>
            <div className={"flex justify-center gap-14"}>
                <p
                    onClick={() => setSearch("girl")}
                    className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                    <Link to={"/demographics"}>#girl</Link>
                </p>
                <div className="flex justify-center gap-10">
                    <p
                        onClick={() => setSearch("#frocks")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#frocks</Link>
                    </p>
                    <p
                        onClick={() => setSearch("#frocks")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#frocks</Link>
                    </p>
                    <p
                        onClick={() => setSearch("#frocks")}
                        className="cursor-pointer font-outfit text-[#1783AF] text-4xl">
                        <Link to={"/demographics"}>#frocks</Link>
                    </p>
                    <p
                        onClick={() => setSearch("model")}
                        className="cursor-pointer font-outfit text-[#000] text-3xl">
                        <Link to={"/demographics"}>#model</Link>
                    </p>
                </div>
                <div className={"flex justify-center gap-14 "}>
                    <p
                        onClick={() => setSearch("model")}
                        className="cursor-pointer font-outfit text-[#000] text-3xl">
                        <Link to={"/demographics"}>#model</Link>
                    </p>
                    <p
                        onClick={() => setSearch("model")}
                        className="cursor-pointer font-outfit text-[#000] text-3xl">
                        <Link to={"/demographics"}>#model</Link>
                    </p>
                </div>
            </div>
            <div className={"flex justify-center gap-12"}>
                <p
                    onClick={() => setSearch("girl")}
                    className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                    <Link to={"/demographics"}>#girl</Link>
                </p><p
                onClick={() => setSearch("girl")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#girl</Link>
            </p><p
                onClick={() => setSearch("girl")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#girl</Link>
            </p><p
                onClick={() => setSearch("girl")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#girl</Link>
            </p><p
                onClick={() => setSearch("girl")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#girl</Link>
            </p><p
                onClick={() => setSearch("girl")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#girl</Link>
            </p><p
                onClick={() => setSearch("short")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#short</Link>
            </p><p
                onClick={() => setSearch("short")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#short</Link>
            </p><p
                onClick={() => setSearch("short")}
                className="cursor-pointer font-outfit text-[#7FBBD3] text-xl">
                <Link to={"/demographics"}>#short</Link>
            </p>
            </div>
        </div>
    );
};

export default Theme;