import React from "react";
import PropTypes from "prop-types";

const Hexagon = ({ isExiting = false, size = "large" }) => {
    const baseSize = {
        small: "w-[50px] h-[50px] md:w-[90px] md:h-[90px]",
        medium: "w-[140px] h-[140px] md:w-[200px] md:h-[250px]",
        large: "w-[340px] h-[340px] md:w-[400px] md:h-[450px]",
    };

    const exitSize = {
        small: baseSize.small,
        medium: baseSize.small,
        large: baseSize.medium,
    };

    return (
        <svg
            viewBox="0 0 400 400"
            className={`origin-center transition-all duration-700 ease-in-out ${isExiting ? exitSize[size] : baseSize[size]
                } opacity-100`}
        >
            <defs>
                <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
                    <path d="M200,20 Q215,20 240,35 L340,100 Q355,110 355,130 L355,270 Q355,290 340,300 L240,365 Q215,380 200,380 Q185,380 160,365 L60,300 Q45,290 45,270 L45,130 Q45,110 60,100 L160,35 Q185,20 200,20 Z" />
                </clipPath>
            </defs>
            <image
                href="/assets/hexagon.png"
                width="100%"
                height="100%"
                clipPath="url(#blobClip)"
                preserveAspectRatio="xMidYMid slice"
                transform="rotate(180, 200, 200)"
            />
        </svg>
    );
};

Hexagon.propTypes = {
    isExiting: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Hexagon;
