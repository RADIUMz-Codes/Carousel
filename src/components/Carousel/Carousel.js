import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import classes from "./Carousel.module.css";
const imgArray = [
    "http://localhost:3000/assets/images/image1.jpg",
    "http://localhost:3000/assets/images/image2.jpg",
    "http://localhost:3000/assets/images/image3.jpg",
    "http://localhost:3000/assets/images/image4.jpg",
];
function Carousel() {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        // seinterval Implementaion
        const interval = setInterval(() => {
            // console.log(`hello ${idx+1}`)
            setIdx((idx + 1) % imgArray.length);
        }, 4000);

        // clear the interval
        return () => clearInterval(interval);
    }, [idx]);

    const handleClickLeft = () => {
        if (idx === 0) {
            //control -ve underflow
            setIdx(imgArray.length - 1);
        } else {
            setIdx(idx - 1);
        }
    };
    const handleClickRight = () => {
        // control +ve overflow
        setIdx((idx + 1) % imgArray.length);
    };
    return (
        <>
            <div
                className={classes.container}
                style={{ backgroundImage: `url('${imgArray[idx]}')` }}
            >
                <div className={classes.buttonLeft} onClick={handleClickLeft}>
                    <FaArrowLeft />
                </div>
                <div className={classes.buttonRight} onClick={handleClickRight}>
                    <FaArrowRight />
                </div>
            </div>
        </>
    );
}

export default Carousel;
