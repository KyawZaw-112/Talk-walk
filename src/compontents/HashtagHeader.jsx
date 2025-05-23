import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useData} from "../context/context.jsx";

const HashtagHeader = () => {
    const {setSearch,search} = useData();
    return (
        <div className={"absolute z-10 flex items-center justify-between gap-20 top-60 left-[98px] w-[90vw]"}>
            <div className={"w-1/2 flex items-center justify-center"}>
                <p className={"absolute text-[#E5007C] font-outfit tracking-widest z-10 left-4"}>
                    hashtag:
                </p>
                <input type="text"
                       onChange={e=>setSearch(e.target.value)}
                       value={search}
                       placeholder={search}
                       className={"relative focus:ring-0 bg-white border-b-2 border-b-[#E5007C]  w-full py-4 px-24 font-outfit text-[18px] ring-0 ring-red-400"}/>
            </div>
            <div className={"w-1/2 relative z-0 flex items-center justify-center shadow-lg"}>
                <p className={"absolute text-[#345199] w-[24px] font-outfit tracking-widest z-10 left-4"}>
                    <AddCircleIcon/>
                </p>
                <input type="text"
                       placeholder={"Compare"}
                       className={" focus:ring-0 bg-white  w-full py-4 px-16 placeholder:text-black font-outfit text-[18px] ring-0 ring-red-400"}/>
                <div className={"absolute right-3"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z"
                            stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            // onClick={}
                            d="M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50533 18.2589 8.71454Z"
                            stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z"
                            stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HashtagHeader;