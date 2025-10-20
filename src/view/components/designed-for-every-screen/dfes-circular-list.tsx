import dfesKiosk from "@/assets/v3/experience/dfes/dfes_kiosk.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
export default function DfesCircularList() {

    useEffect(() => {
        // placeCircles()
        placeItemsInCircle(500, 175)
        setTimeout(() => {
            makeCirclegraphBigger()
        }, 1000)
        setTimeout(() => {
            placeItemsInLine()
        }, 2000);
    }, [])
    const placeCircles = () => {
        document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
            const circles = ciclegraph.querySelectorAll('.circle')
            let angle = 360 - 90;
            const dangle = 360 / circles.length;
            const gap = 0; // px gap between items (change if you want spacing)
            const itemW = circles[0].offsetWidth;
            const mid = Math.floor(circles.length / 2); // for 7 -> 3 (0-based)

            for (let i = 0; i < circles.length; ++i) {
                let circle = circles[i]
                angle += dangle
                circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
            }
        })

    }

    const placeItemsInCircle = (circleGraphWidth: number, circleSize: number) => {
        const container = document.querySelector(".ciclegraph");
        const items = gsap.utils.toArray(container!.querySelectorAll(".circle")) as HTMLElement[];
        const total = items.length;
        const radius = circleGraphWidth / 2;
        const step = 360 / total;
        let angle = 65; // start from top
        const tl = gsap.timeline();
        const setCircleGraphSize = gsap.to(container, {
            '--dfes-circlegrah-size': `${circleGraphWidth}px`,
            '--dfes-circlegraph-circle-size': `${circleSize}px`,
            duration: 1,
            ease: "power2.inOut",
        });
        tl.add(setCircleGraphSize, 0);
        items.forEach((item) => {
            angle += step;
            const moveItem = gsap.to(item, {
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
                duration: 1,
                ease: "power2.inOut",

            });
            tl.add(moveItem, 0);
        });
        return tl;
    }
    const placeItemsInLine = () => {
        const container = document.querySelector(".ciclegraph");
        const containerBefore = document.querySelector(".ciclegraph:before");
        const items = gsap.utils.toArray(container!.querySelectorAll(".circle")) as HTMLElement[];
        const total = items.length;
        const gap = 80; // each item 120px apart
        const mid = Math.floor(total / 2);
        items.forEach((item, i) => {
            const offset = i - mid;
            gsap.to(item, {
                x: offset * gap,
                y: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        });
        const tl = gsap.timeline();
        tl.add(gsap.to(container, {
            width: ((items.length - 1) * gap) + (items.length * 170),
            height: 0.5,
            backgroundColor: "#77C5F2",
            duration: 1,
            borderRadius: "0",
            border: 0,
            y: 300,
            ease: "power2.inOut",
        }), 0);
        tl.add(gsap.to(containerBefore, {
            borderRadius: "0",
            duration: 1,
            ease: "power2.inOut",
        }), 0);
    }
    const makeCirclegraphBigger = () => {
        const container = document.querySelector(".ciclegraph");
        const items = gsap.utils.toArray(container!.querySelectorAll(".circle")) as HTMLElement[];
        const total = items.length;
        const tl = placeItemsInCircle(2500, 250);
        tl.add(gsap.to(container, {
            y: 1500,
            duration: 1,
            ease: "power2.inOut",
        }), "<");


    }
    return (
        <div className="min-h-screen w-full relative">
            <div>
                <span>Designed for</span><span> </span><span>Every Screen</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="ciclegraph">
                    <div className="circle w-[150px] h-[203px]">1<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">2<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">3<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">4<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">5<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">6<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                    <div className="circle w-[150px] h-[203px]">7<img src={dfesKiosk} className="w-full h-full" alt="dfesKiosk" /></div>
                </div>
            </div>

        </div>

    )
}