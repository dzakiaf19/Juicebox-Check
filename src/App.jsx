import React, { useState } from "react";
import Welcome from "./components/Welcome";
import GettingReady from "./components/GettingReady";
import Chat from "./components/Chat";

function App() {
    const [currentComponent, setCurrentComponent] = useState("welcome");
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3; // Jumlah slide di GettingReady

    // Fungsi navigasi ke langkah berikutnya
    const goToNext = () => {
        setTimeout(() => {
            if (currentComponent === "welcome") {
                setCurrentComponent("next");
            } else if (currentComponent === "next") {
                setCurrentComponent("form");
            }
        }, 500);
    };

    // Fungsi untuk tombol kembali
    const goBack = () => {
        if (currentComponent === "form") {
            setCurrentComponent("next");
            setCurrentSlide(totalSlides - 1);
        } else if (currentComponent === "next") {
            if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            } else {
                setCurrentComponent("welcome");
            }
        }
    };

    // Tentukan komponen mana yang ditampilkan
    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case "welcome":
                return <Welcome onNext={goToNext} />;
            case "next":
                return (
                    <GettingReady
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        onNext={() => setCurrentComponent("form")}
                    />
                );
            case "form":
                return <Chat onNext={goToNext} />;
            default:
                return <Welcome onNext={goToNext} />;
        }
    };

    const showBackButton = currentComponent !== "welcome";

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white flex flex-col">
            {/* Header */}
            <header className="relative flex justify-center items-center p-6 bg-transparent">
                {showBackButton && (
                    <button
                        onClick={goBack}
                        className="absolute left-5 flex items-center justify-center w-9 h-9 rounded-full bg-[#1F2231] hover:bg-[#2a2e3f] transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                <img src="/assets/logo.png" alt="Juicebox logo" className="w-28 md:w-36" />

                <button className="absolute right-7 text-white text-3xl hover:text-purple-400 transition-colors">
                    ⟳
                </button>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center md:mt-3 mt-17 w-full">
                {renderCurrentComponent()}
            </main>
        </div>
    );
}

export default App;
