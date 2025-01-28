import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomMail() {
  return Math.random().toString(36).substring(3);
}

export function mailTime(date: Date) {
  const currentTime = moment();
  const day = 1 * 60 * 60 * 1;
  const isPassed = currentTime.unix() - new Date(date).getTime() / 1000 <= day;
  return isPassed
    ? moment(date).fromNow()
    : moment(date).format("DD/MM/YY HH:mm");
}

export function delay(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export function getDomainList() {
  return (process.env.DOMAIN_LIST ?? "@not.set.yet").split("|");
}
