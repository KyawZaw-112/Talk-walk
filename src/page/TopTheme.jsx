import React, {useEffect} from 'react';
import Theme from "../compontents/Theme.jsx";

const TopTheme = () => {
    useEffect(() => {
        document.title = "Top Theme";
    },[])
    return (
        <div className={"top-90 w-[90%] bg-white   left-24  absolute px-5 py-4 flex  flex-col gap-5 "}>
            <Theme />
        </div>
    );
};

export default TopTheme;