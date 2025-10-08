import { TimeContext, TimeProvider } from "@/providers/time";
import { useContext } from "react";

export function useClock(): TimeProvider {
  return useContext(TimeContext);
}