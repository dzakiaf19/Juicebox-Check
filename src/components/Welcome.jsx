import React, { useState, useEffect } from "react";
import Hexagon from "./Hexagon";
import NextButton from "./NextButton";

const Welcome = ({ onNext }) => {
    const [animateTexts, setAnimateTexts] = useState(false);
    const [animateHeading, setAnimateHeading] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const headingText = "Compare your thoughts on technology with current industry opinions.";
    const words = headingText.split(" ");

    useEffect(() => {
        const textTimer = setTimeout(() => setAnimateTexts(true), 500);
        const headingTimer = setTimeout(() => setAnimateHeading(true), 1500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(headingTimer);
        };
    }, []);

    return (
        <div className="flex flex-col items-center text-center space-y-6 px-4">
            {/* Hexagon Image + Floating Text */}
            <div className="relative flex justify-center w-full max-w-[320px] md:max-w-[400px] mx-auto">
                <Hexagon isExiting={isExiting} size="large" />

                {/* Floating Mini Text */}
                <p className={`slide-text-1 ${animateTexts ? "animate" : ""} ${isExiting ? "slide-out-left" : ""}`}>
                    WA businesses feel confident about future growth
                </p>
                <p className={`slide-text-2 ${animateTexts ? "animate" : ""} ${isExiting ? "slide-out-right" : ""}`}>
                    AI can't replace creativity
                </p>
                <p className={`slide-text-3 ${animateTexts ? "animate" : ""} ${isExiting ? "slide-out-left" : ""}`}>
                    Sales measure true success
                </p>
                <p className={`slide-text-4 ${animateTexts ? "animate" : ""} ${isExiting ? "slide-out-right" : ""}`}>
                    Human connection drives WA business
                </p>
                <p className={`slide-text-5 ${animateTexts ? "animate" : ""} ${isExiting ? "slide-out-left" : ""}`}>
                    The primary barrier to digital transformation is financial investment
                </p>
            </div>

            {/* Heading & CTA */}
            <div className="w-full max-w-[1000px] space-y-4">
                <div className="flex flex-wrap justify-center text-xl md:text-3xl font-bold leading-snug font-sans">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={`word-animation ${word === "technology" ? "gradient-word" : ""} ${animateHeading ? "animate" : ""
                                } ${isExiting ? "out" : ""}`}
                            data-delay={index}
                        >
                            {word}&nbsp;
                        </span>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="fixed bottom-10 left-0 right-0 flex justify-center px-4">
                    <NextButton
                        color="purple"
                        text="Get a reality check"
                        variant="filled"
                        onClick={() => {
                            setIsExiting(true);
                            setTimeout(() => {
                                onNext();
                            }, 300);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
