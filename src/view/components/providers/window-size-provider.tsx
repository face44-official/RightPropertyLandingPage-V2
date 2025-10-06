import { useEffect, useState } from "react";
import useWindowSize from "@/view/hooks/use-window-size";

export default function WindowSizeProvider({ children }: { children: React.ReactNode }) {
    const { width, height } = useWindowSize();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // Defer initialization until after first paint (non-blocking for LCP)
        if (!initialized) {
            requestAnimationFrame(() => {
                setInitialized(true);
            });
            return;
        }

        // Only update CSS variables after initialization
        if (width > 0 && height > 0) {
            document.documentElement.style.setProperty('--window-width', width.toString());
            document.documentElement.style.setProperty('--window-height', height.toString());
        }
    }, [width, height, initialized]);
    
    return <>{children}</>;
}