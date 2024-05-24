"use client";

import { useCountDown } from "@/utils/Hooks/useCountDown";
import React from "react";

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const timeLeft = useCountDown(targetDate);

  if (timeLeft === null) {
    return null;
  }

  return (
    <div>
      {timeLeft.days ||
      timeLeft.hours ||
      timeLeft.minutes ||
      timeLeft.seconds ? (
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-col justify-center items-center px-7 py-6  bg-white rounded-full">
            <span className="text-base font-semibold text-secondary leading-6">
              {timeLeft.days}
            </span>
            <span className="text-xs font-normal leading-4 capitalize">
              Days
            </span>
          </div>
          <div className="flex flex-col justify-center items-center px-7 py-6  bg-white rounded-full">
            <span className="text-base font-semibold text-secondary leading-6">
              {timeLeft.hours}
            </span>
            <span className="text-xs font-normal leading-4 capitalize">
              Hours
            </span>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-6  bg-white rounded-full">
            <span className="text-base font-semibold text-secondary leading-6">
              {timeLeft.minutes}
            </span>
            <span className="text-xs font-normal leading-4 capitalize">
              minutes
            </span>
          </div>
          <div className="flex flex-col justify-center items-center px-5 py-6  bg-white rounded-full">
            <span className="text-base font-semibold text-secondary leading-6">
              {timeLeft.seconds}
            </span>
            <span className="text-xs font-normal leading-4 capitalize">
              seconds
            </span>
          </div>
        </div>
      ) : (
        <span className="flex flex-col justify-center items-center px-5 py-6  bg-white rounded-full ">
          <span className="text-base font-semibold text-secondary leading-6">
            Times up!
          </span>
        </span>
      )}
    </div>
  );
};
