"use client";
import React, { useEffect, useState } from "react";

interface TimeCounterProps {
  targetDate: string;
}

const TimeCounter: React.FC<TimeCounterProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      return { days, hours, minutes };
    }

    return { days: 0, hours: 0, minutes: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="time">
      {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m
    </div>
  );
};

export default TimeCounter;
