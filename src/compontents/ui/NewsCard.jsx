import React, {useState} from 'react';
import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton, Modal, Skeleton,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom"
import moment from "moment";
import {useData} from "../../context/context.jsx";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};


const NewsCard = ({article}) => {
    const {date,loading} = useData()
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(true);
    const [fullThumb, setFullThumb] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlerThumbUp = () => {
        setFullThumb(!fullThumb);
    }
    const handlerHide = () => {
        setHide(!hide);
    }

    console.log(article)
    return (
        <>

        <Card sx={{width: 320, height: 500}}
              className={"scale-100 hover:scale-105 transition-all duration-300 delay-200"}>
            <Link to={`/influencer/article/${article.id}`} >
                {
                    loading ? (
                        <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />

                    ) : (
                <CardMedia
                    component="img"
                    height="200px"
                    className={"rounded-lg h-[200px] "}
                    image={article.imagelink === "-" ? "https://vgrmdrwryouzzvualgdz.supabase.co/storage/v1/object/sign/vd/meme.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBlNDRlMTIyLWQ2NDktNGM2ZC1iM2RkLTNlNThhODkwMzg0MCJ9.eyJ1cmwiOiJ2ZC9tZW1lLnBuZyIsImlhdCI6MTc0ODEwNTQ1NSwiZXhwIjozMTU1MzQ4MTA1NDU1fQ.MCdj4pFsRcMBcSV9SU_iYhFIXSkinipdZxVBNa_joXY" : article.imagelink}
                    alt="Paella dish"
                />
                    )
                }

            </Link>
            <CardContent>
                {
                    loading ? (
                        <Skeleton sx={{ height: 50 }} animation="wave"  />
                    ) : (


                <div className={"flex justify-between"}>
                    <div className={"flex gap-3 items-center "}>
                        <div className={"flex"}>
                            <svg-icon-sprite _ngcontent-serverapp-c15="" _nghost-serverapp-c12=""
                                             className="badge__big-icon">
                                <svg className="icon" width="40" height="40"
                                     viewBox="0 0 43 51">
                                    <path
                                        d="M21.5151 50.6589C21.2656 50.6589 21.009 50.6018 20.7809 50.4878C8.57057 44.4004 0.986328 32.0618 0.986328 18.2761V8.11866C0.986328 7.64108 1.18591 7.17775 1.54232 6.85699C1.89872 6.54336 2.36204 6.38654 2.83962 6.44356C3.82329 6.55761 4.83547 6.61464 5.84053 6.61464C13.1183 6.61464 18.222 3.79193 19.4979 1.01199C19.7687 0.413235 20.3604 0.0283203 21.009 0.0283203H22.0212C22.6699 0.0283203 23.2615 0.413235 23.5323 1.01199C24.8083 3.79193 29.9048 6.61464 37.1826 6.61464C38.1876 6.61464 39.1998 6.55761 40.1906 6.44356C40.661 6.39367 41.1315 6.54336 41.4879 6.85699C41.8443 7.17775 42.0439 7.64108 42.0439 8.11866V18.2761C42.0439 32.0618 34.4596 44.4004 22.2493 50.4878C22.0212 50.6018 21.7646 50.6589 21.5151 50.6589ZM4.31513 9.95056V18.2761C4.31513 30.4865 10.8872 41.4423 21.5151 47.0806C32.143 41.4423 38.708 30.4865 38.708 18.2761V9.95056C38.2019 9.97908 37.6958 9.9862 37.1826 9.9862C30.2826 9.9862 24.3022 7.67672 21.5151 4.07705C18.728 7.67672 12.7405 9.9862 5.84053 9.9862C5.33444 9.9862 4.82835 9.97908 4.31513 9.95056Z"
                                        fill={parseFloat(article.trusted * 100) <= 65 ? "#eda54c" : "#56B94E"}></path>
                                    <path
                                        d="M33.7628 11.6309L32.6308 12.3752C26.6838 16.283 20.5973 24.3698 17.5657 30.9448C17.0928 30.309 16.9532 30.0997 16.4957 29.4019C14.6427 26.9905 12.2856 24.9281 11.1691 24.1605L9.42456 24.8661L9.47884 24.9591C10.6884 26.2307 12.7973 29.0375 15.984 35.2402C16.1779 35.5039 16.3872 35.7675 16.6276 36.0156C17.2478 36.6514 17.8914 36.7909 18.3178 36.7909C19.5351 36.7909 20.2484 35.8683 20.7447 34.7828C23.9313 23.4084 31.4755 15.5696 34.7397 12.8869L33.7628 11.6309Z"
                                        fill={parseFloat(article.trusted * 100) <= 65 ? "#eda54c" : "#56B94E"}></path>
                                </svg>
                            </svg-icon-sprite>
                            <p className={`font-outfit text-3xl ${parseFloat(article.trusted * 100) <= 65 ? "text-[#eda54c]" : "text-[#12F92F]"} font-black `}>{parseFloat(100 * article.trusted).toFixed()}%</p>
                        </div>
                        <p className={"text-xs text-gray-500 font-semibold w-[40px]"}>Reliability Score</p>
                    </div>

                </div>
                    )
                }

                {
                    loading ? (
                    <Skeleton sx={{height:150}} animation={"wave"} />
                    ) :(
                <Link to={`/influencer/article/${article.id}`} >
                    <p className={"font-outfit font-bold  text-lg h-42  "}>{article?.title}</p>
                </Link>
                    )
                }
            </CardContent>
            <CardActions>

                <div className={"flex flex-row justify-between items-center w-full"}>
                    {loading ? (
                        <Skeleton sx={{height:20,width:"100%"}} animation={"wave" } />
                    ) : (
                    <>
                    <div className={"flex items-baseline gap-1"}>
                        <p className={"text-xs font-thin font-outfit text-gray-400"}>{article?.feed.slice(0, 13)}...</p>
                        .
                        <p className={"text-xs font-thin font-outfit text-gray-400 "}>
                            {moment.utc(date.startDate).local().startOf('hours').fromNow()}
                        </p>
                    </div>
                    <div className={"relative"}>
                        <IconButton onClick={handlerThumbUp}>
                            {fullThumb ? (
                                <ThumbUpAltIcon className={"text-blue-500"}/>
                            ) : (
                                <ThumbUpOffAltIcon/>
                            )}
                        </IconButton>
                        <Link to={`/influencer/article/${article.id}`}>
                            <ChatBubbleOutlineOutlinedIcon className={"text-gray-500"}/>
                        </Link>
                            {
                                hide === false &&
                                (
                                    <div className={"flex gap-2 items-center w-[100px] absolute  h-[30px]  -top-10 right-2 z-20"}>
                                        <FacebookShareButton
                                            url={article.urllink}>
                                            <FacebookIcon className={"w-[30px] h-[30px]"}/>
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url={article.urllink}>
                                            <TwitterIcon className={"w-[30px] h-[30px]"}/>
                                        </TwitterShareButton>
                                        <LinkedinShareButton url={article.urllink}>
                                            <LinkedinIcon className={"w-[30px] h-[30px]"} />
                                        </LinkedinShareButton>
                                    </div>
                                )
                            }
                        <IconButton
                            onClick={handlerHide}
                        >
                            <ShareOutlinedIcon/>
                        </IconButton>
                    </div>
                    </>
                    )}
                </div>
            </CardActions>
        </Card>
        </>

    );
};

export default NewsCard;