import React, { useState } from "react";
import Hexagon from "./Hexagon";
import StepHeading from "./StepHeading";
import NextButton from "./NextButton";

const GettingReady = ({ currentSlide, setCurrentSlide, onNext }) => {
    const [isExiting, setIsExiting] = useState(false);

    const slides = [
        {
            heading: "Professionals around the world shared how they feel about technology and I've listened. Now it's your turn.",
            buttonText: "Continue",
            buttonStyle: "outline"
        },
        {
            heading: "I'll ask you a handful of meaningful questions and compare your responses with people in your industry.",
            buttonText: "Continue",
            buttonStyle: "outline"
        },
        {
            heading: "You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!",
            buttonText: "Get started",
            buttonStyle: "filled"
        }
    ];

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setIsExiting(true);
            setTimeout(() => {
                if (onNext) onNext();
            }, 700);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className="flex flex-col items-center text-center space-y-6 px-4">
            {/* Hexagon */}
            <div className="relative flex justify-center w-full max-w-[320px] md:max-w-[400px] mx-auto">
                <Hexagon isExiting={isExiting} size="medium" />
            </div>

            {/* Heading */}
            <div className="w-full max-w-[768px] space-y-4">
                <StepHeading text={slides[currentSlide].heading} fontSize="text-xl md:text-3xl" />

                {/* Indicator */}
                <div className="flex justify-center space-x-2 pb-8">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>

                {/* Button */}
                <div className="fixed bottom-10 left-0 right-0 flex justify-center px-4">
                    <NextButton
                        text={slides[currentSlide].buttonText}
                        variant={slides[currentSlide].buttonStyle}
                        color={currentSlide < slides.length - 1 ? "white" : "white"}
                        onClick={nextSlide}
                    />
                </div>
            </div>
        </div>
    );
};

export default GettingReady;
