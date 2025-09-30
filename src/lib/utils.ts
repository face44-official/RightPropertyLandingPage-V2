import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//interpolate color
export function interpolateColor(startColor: string, endColor: string, progress: number) {
  return `rgba(${startColor.split(',').map((color, index) => {
    return Math.round(parseInt(color) + (parseInt(endColor.split(',')[index]) - parseInt(color)) * progress)
  }).join(',')})`
}