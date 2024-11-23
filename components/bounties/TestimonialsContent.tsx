"use client"
import React, { useState, useEffect, PropsWithChildren } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
        name: "John Smith",
        designation: "Marketing Director at XYZ Corp"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
        name: "Sarah Johnson",
        designation: "Product Manager at ABC Inc"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
        name: "Michael Chen",
        designation: "Director at Tech Solutions"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
        name: "Emma Williams",
        designation: "CEO at Innovation Co"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
        name: "David Lee",
        designation: "Lead Designer at Design Hub"
    }
];

const MessageBox: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="relative">
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
        >
            <path
                d="M60,0 
           H340
           C385,0 400,15 400,60
           V120
           C400,165 385,180 340,180
           H100
           C90,180 85,182 80,186
           L60,200
           L40,186
           C35,182 30,180 20,180
           C15,180 0,165 0,120
           V60
           C0,15 15,0 60,0
           Z"
                fill="#191A23"
                stroke="#318949"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
        <div className="relative z-10 px-6 sm:px-20 py-10 sm:py-20">
            {children}
        </div>
    </div>
);

const MessageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (!isMouseOver) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 4000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isMouseOver]);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % testimonials.length
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full bg-[#3E3E3E] flex items-center justify-center px-4 py-6 sm:py-20 rounded-[3rem]">
            <div className="max-w-4xl w-full">
                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <div key={index} className="min-w-full px-4">
                                <div className="h-[350px] flex flex-col">
                                    <MessageBox>
                                        <p className="text-white text-sm sm:text-lg leading-relaxed mb-4">
                                            {item.message}
                                        </p>
                                    </MessageBox>
                                    <div className="ml-8 mt-4">
                                        <h3 className="text-[#0AD372] font-semibold sm:text-xl">
                                            {item.name}
                                        </h3>
                                        <p className="text-[#FFFFFF] sm:text-xl">
                                            {item.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrevious}
                            className="text-gray-400 hover:text-[#0AD372] transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={36} />
                        </button>
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#0AD372]' : 'bg-white'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className="text-gray-400 hover:text-[#0AD372] transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={36} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageCarousel;