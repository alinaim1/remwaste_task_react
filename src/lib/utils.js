import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge class names utility
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
