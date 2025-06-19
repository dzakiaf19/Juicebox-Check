import React from "react";
import PropTypes from "prop-types";

const colorStyles = {
    purple: {
        filled: "bg-purple-400 text-black hover:bg-purple-300",
        outline: "border-2 border-purple-400 text-purple-400 hover:border-purple-300",
    },
    white: {
        filled: "bg-white text-black hover:bg-gray-100",
        outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    },
    default: {
        filled: "bg-white text-gray-900 hover:bg-gray-100",
        outline: "border-2 border-gray-600 text-white hover:border-gray-400",
    },
};

const NextButton = ({ text = "Continue", variant = "outline", color = "default", onClick, isLoading = false }) => {
    const baseClass = "py-3 rounded-lg px-6 transition-all duration-200 transform hover:scale-105 w-60 font-sans";
    const styleClass = colorStyles[color]?.[variant] || colorStyles.default[variant];

    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`${baseClass} ${styleClass} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {isLoading ? "Loading..." : text}
        </button>
    );
};

NextButton.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.oneOf(["outline", "filled"]),
    color: PropTypes.oneOf(["default", "purple", "white"]),
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default NextButton;
