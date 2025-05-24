import React, {useState} from 'react';
import {DateRangePicker} from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {Button} from "@mui/material";
import {format} from "date-fns";
import {useData} from "../../context/context.jsx";
const DatePicker = () => {
    const [openDate,setOpenDate] = useState(false);
    const {date,setDate} = useData();
    const handlerChange= (ranges) => {
        setDate(ranges.selection)
    }
    const handlerClick = () => {
        setOpenDate(!openDate);
    }


    return (
        <div className={" z-20 "}>
            <Button variant="contained" onClick={handlerClick}>{`${format(date.startDate, "MMM/dd/yyyy")} - ${format(date.endDate, "MMM/dd/yyyy")}`}</Button>
            {
                openDate &&
            <DateRangePicker
                className="absolute right-0 top-16 shadow-xl"
                ranges={[date]}
                onChange={handlerChange}/>
            }
        </div>
    );
};

export default DatePicker;