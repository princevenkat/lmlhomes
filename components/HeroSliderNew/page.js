import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/components/HeroSliderNew/style.module.css";
import ReactPlayer from 'react-player'
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSliderNew() {

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }
    function handleClose() {
        setIsActive(false);
    }

    const texts = ['Homes', 'Happiness ', 'Lives ', 'Memories', 'Generations', 'Communities '];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    // const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);

        }, 3000);

        return () => {
            clearInterval(interval); // Clear the interval when the component unmounts
        };
    }, [texts.length]);

    // function handleVideoLoad() {
    //     setVideoLoaded(true)
    // };


    return (
        <section className={styles.HomeVideoSection}>
            {/* <ReactPlayer url='/assets/videos/homevideo.mp4' playing loop={true} controls={false} muted={true} playsinline={true} width="100%" height="100%" className={styles.backgroundVideo}/> */}

            <video autoPlay loop muted playsInline className={styles.backgroundVideo + ' deskOnly'}>
                <source src="/assets/videos/homevideo.mp4" type="video/mp4" />
            </video>

            <video autoPlay loop muted playsInline className={styles.backgroundVideo + ' mobOnly'}>
                <source src="/assets/videos/homevideoMob-old.mp4" type="video/mp4" />
            </video>

            <div className={styles.homeVideoContainer} >
                <h1 className={styles.animeTxt}>
                    Building
                    <span className={styles.animatedTxt}>
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={styles.animatedTxt}
                            key={currentTextIndex}
                        >
                            {texts[currentTextIndex]}
                        </motion.div>
                    </span>
                    Over Decades
                </h1>
            </div>

          
        </section>
    )
}
