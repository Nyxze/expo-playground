import { TimeContext } from "@/providers/time";
import { useContext } from "react";

export function getTime(): Date {
  const timeProvider = useContext(TimeContext);
  return timeProvider.now();
}