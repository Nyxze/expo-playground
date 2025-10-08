import { createContext } from "react";

export interface TimeProvider {
  now(): Date
}

class ScaledClock implements TimeProvider {
  startTime: number
  constructor(private timeScale: number,
  ) {
    this.timeScale = timeScale;
    this.startTime = Date.now();
  }

  now(): Date {
    const elapsed = Date.now() - this.startTime;
    return new Date(this.startTime + elapsed * this.timeScale);
  }

}
const TIME_SCALE = 1
const clock = new ScaledClock(TIME_SCALE)
export const TimeContext = createContext(clock)


export default function TimeProvider({ children }) {
  return (
    <TimeContext.Provider value={clock}>
      {children}
    </TimeContext.Provider>
  );
}