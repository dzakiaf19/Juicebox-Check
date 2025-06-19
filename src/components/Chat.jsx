import React, { useState } from "react";
import StepHeading from "./StepHeading";
import Hexagon from "./Hexagon";

const Chat = ({ onNext }) => {
    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validateStep = () => {
        const newErrors = {};

        if (step === 0) {
            if (!name.trim()) {
                newErrors.name = "Please enter your first name";
            } else if (name.trim().length < 2) {
                newErrors.name = "Name must be at least 2 characters";
            }
        }

        if (step === 1) {
            if (!email.trim()) {
                newErrors.email = "Please enter your email address";
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.trim())) {
                    newErrors.email = "Please enter a valid email address";
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const next = () => {
        if (!validateStep()) return;

        if (step < 2) {
            setStep(step + 1);
        } else {
            onNext?.();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") next();
    };

    const stepContent = (() => {
        switch (step) {
            case 0:
                return {
                    title: "Let's start with the basics. Type in your first name.",
                    placeholder: "First name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    error: errors.name,
                    type: "text"
                };
            case 1:
                return {
                    title: "How should we contact you? Type in your email address.",
                    placeholder: "Email address",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    error: errors.email,
                    type: "email"
                };
            case 2:
                return {
                    title: `Thanks, ${name}! Now it's time to get a reality check.`,
                    subtitle: "This will take 2-3 minutes.",
                    showInput: false
                };
            default:
                return {};
        }
    })();

    return (
        <div className="flex flex-col items-center text-center space-y-6 px-4">
            {/* Hexagon */}
            <div className="relative flex justify-center w-full max-w-[320px] md:max-w-[400px] mx-auto">
                <Hexagon size="small" />
            </div>

            {/* Heading */}
            <StepHeading text={stepContent.title} />

            {/* Subtitle */}
            {stepContent.subtitle && (
                <p className="text-base text-gray-300 mt-2">{stepContent.subtitle}</p>
            )}

            {/* Input/CTA */}
            <div className="w-full max-w-[768px] space-y-4">
                <div className="fixed bottom-7 left-0 right-0 flex justify-center px-4">
                    {step === 2 ? (
                        <button
                            className="w-full max-w-md bg-white text-black py-3 rounded-lg font-semibold text-center transition-all duration-200 hover:bg-gray-100"
                        >
                            Continue
                        </button>
                    ) : (
                        <div className="w-full max-w-md space-y-1">
                            {stepContent.error && (
                                <p className="text-red-400 text-sm px-1">{stepContent.error}</p>
                            )}
                            <div className="flex items-center bg-gray-800 rounded-3xl border px-3 py-2 space-x-2 border-gray-600">
                                <input
                                    type={stepContent.type}
                                    placeholder={stepContent.placeholder}
                                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-base"
                                    value={stepContent.value}
                                    onChange={stepContent.onChange}
                                    onKeyDown={handleKeyPress}
                                    autoFocus
                                />
                                <button
                                    onClick={next}
                                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-colors duration-200 hover:opacity-80"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
