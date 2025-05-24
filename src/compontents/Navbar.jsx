import React from 'react';

const Navbar = () => {

    return (
        <nav className={"bg-[#345199] fixed w-[99vw] h-[64px] flex items-center justify-between px-7 z-30"}>
            <div className={"flex items-center gap-2 justify-between w-1/4"}>
                <p className="uppercase w-full font-outfit text-[16px] text-white font-semibold">Updated Logo</p>
                <div className={"flex items-center justify-between w-[15rem]"}>
                    <div>
                    <p  className={"text-[12px] font-outfit text-white "}>Usama</p>
                    <p  className={"text-[12px] font-outfit text-white "}>Free Search</p>
                    </div>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.08313 1.35391C0.646621 0.808277 1.0351 0 1.73385 0H6.26615C6.9649 0 7.35338 0.808276 6.91687 1.35391L4.65072 4.18659C4.31712 4.6036 3.68288 4.6036 3.34928 4.18659L1.08313 1.35391Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className={"flex items-center gap-4"}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20C11.4478 20 11 19.5522 11 19V12C11 11.4478 11.4478 11 12 11H19C19.5522 11 20 11.4478 20 12V19C20 19.5522 19.5522 20 19 20H12ZM13 18H18V13H13V18ZM1 20C0.447754 20 0 19.5522 0 19V12C0 11.4478 0.447754 11 1 11H8C8.55225 11 9 11.4478 9 12V19C9 19.5522 8.55225 20 8 20H1ZM2 18H7V13H2V18ZM12 9C11.4478 9 11 8.55225 11 8V1C11 0.447754 11.4478 0 12 0H19C19.5522 0 20 0.447754 20 1V8C20 8.55225 19.5522 9 19 9H12ZM13 7H18V2H13V7ZM1 9C0.447754 9 0 8.55225 0 8V1C0 0.447754 0.447754 0 1 0H8C8.55225 0 9 0.447754 9 1V8C9 8.55225 8.55225 9 8 9H1ZM2 7H7V2H2V7Z" fill="white"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.2098 20.4997V15.4997C17.1494 12.1844 14.4447 9.52832 11.1288 9.52832C7.81287 9.52832 5.10815 12.1844 5.04773 15.4997L5.04785 20.4997C5.04895 21.2028 4.86182 21.8934 4.50586 22.4997L17.7528 22.4997C17.3965 21.8935 17.209 21.2029 17.2098 20.4997ZM21.2642 24.4994H0.994141C0.636841 24.4994 0.306763 24.3087 0.128174 23.9994C-0.0505371 23.69 -0.0505371 23.3087 0.128174 22.9994C0.306763 22.69 0.636841 22.4994 0.994141 22.4994C1.52808 22.5031 2.04175 22.2944 2.42188 21.9193C2.802 21.5442 3.01758 21.0334 3.021 20.4994L3.02112 15.4994C3.09168 11.0718 6.70105 7.51953 11.1292 7.51953C15.5573 7.51953 19.1666 11.0718 19.2371 15.4994V20.4994C19.2405 21.0334 19.4559 21.5442 19.8362 21.9193C20.2163 22.2944 20.73 22.5031 21.264 22.4994C21.6213 22.4993 21.9515 22.6899 22.1301 22.9993C22.3088 23.3087 22.3088 23.6899 22.1303 23.9993C21.9517 24.3087 21.6215 24.4993 21.2642 24.4994ZM13.7593 27.9991C13.2069 28.9255 12.2079 29.493 11.1293 29.493C10.0507 29.493 9.05164 28.9255 8.49927 27.9991C8.31958 27.688 8.32068 27.3044 8.50195 26.9943C8.68323 26.6842 9.01697 26.4951 9.37622 26.4991H12.8832C13.2422 26.4955 13.5756 26.6846 13.7567 26.9947C13.9377 27.3047 13.9387 27.6881 13.7592 27.9991H13.7593Z" fill="white"/>
                    <circle cx="18.9102" cy="7.5" r="4" fill="#2492EB"/>
                    <circle cx="18.9102" cy="7.5" r="5.5" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
                <svg width="70" height="46" viewBox="0 0 70 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <circle cx="23" cy="23" r="23" fill="#06152B"/>
                    <mask id="mask0_2050_8158" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
                        <circle cx="23" cy="23" r="23" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_2050_8158)">
                        <rect x="-3.99414" y="-1.31055" width="55.9667" height="48.3" fill="url(#pattern0_2050_8158)"/>
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M62.9161 25.7292L68.1451 20.5372C68.5322 20.1517 69.1582 20.1517 69.5452 20.5372C69.7302 20.7205 69.8344 20.9702 69.8344 21.2307C69.8344 21.4912 69.7302 21.7409 69.5452 21.9242L63.6172 27.8102C63.2284 28.1913 62.6061 28.1913 62.2173 27.8102L56.2892 21.9242C56.1041 21.7409 56 21.4912 56 21.2307C56 20.9702 56.1041 20.7205 56.2892 20.5372C56.6763 20.1517 57.3022 20.1517 57.6892 20.5372L62.9161 25.7292Z" fill="white"/>
                    <defs>
                        <pattern id="pattern0_2050_8158" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_2050_8158" transform="scale(0.0136986 0.015873)"/>
                        </pattern>
                        <image id="image0_2050_8158" width="73" height="63" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;