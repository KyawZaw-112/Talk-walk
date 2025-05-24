import React, {useState} from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useLocation} from "react-router-dom";
import {useData} from "../context/context.jsx";
const Header = () => {
    const {setSearch,search} = useData()
    const location = useLocation();
    return (
        <section className={"absolute z-10 flex items-center justify-between top-36 left-[98px] w-[90vw]"}>
                <p className={"font-outfit text-[28px] capitalize"}>{location.pathname === "/" && "Key Metric"}{location.pathname.slice(1,20)}</p>
                <div className={"flex items-center gap-4 "}>
                    <FormControl variant="standard" >
                        <Input
                            className={"border-2 border-[#345199] text-white"}
                            value={search}
                            placeholder={"New Search"}
                            id="input-with-icon-adornment"
                            onChange={(e)=>setSearch(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon className={"text-[#345199]"} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard" >

                        <Input
                            className={"border-2 bg-[#345199] text-white"}
                            placeholder={"Saved Searches"}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon className={"text-[#fff]"} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <svg
                        onClick={()=>setSearch("")}
                        className={"cursor-pointer "}
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.023 9.34841H21.0156V9.34663M2.98438 19.6444V14.6517M2.98438 14.6517L7.97702 14.6517M2.98438 14.6517L6.16527 17.8347C7.15579 18.8271 8.41285 19.58 9.8646 19.969C14.2657 21.1483 18.7895 18.5364 19.9687 14.1353M4.03097 9.86484C5.21024 5.46374 9.73402 2.85194 14.1351 4.03121C15.5869 4.4202 16.8439 5.17312 17.8345 6.1655L21.0156 9.34663M21.0156 4.3558V9.34663" stroke="#345199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="1" height="34" viewBox="0 0 1 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="34" stroke="#345199"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5M7.5 11.25L10.5 14.25M10.5 14.25L13.5 11.25M10.5 14.25L10.5 1.5M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5" stroke="#345199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
        </section>
    );
};

export default Header;