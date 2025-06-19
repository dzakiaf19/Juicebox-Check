import React, { useEffect, useState } from "react";

const StepHeading = ({ text, fontSize = "text-xl md:text-3xl" }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, [text]);

    const words = text.split(" ");

    return (
        <div className={`flex flex-wrap justify-center font-bold leading-snug font-sans ${fontSize}`}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`word-animation ${animate ? "animate" : ""}`}
                    data-delay={index}
                >
                    {word}&nbsp;
                </span>
            ))}
        </div>
    );
};

export default StepHeading;
