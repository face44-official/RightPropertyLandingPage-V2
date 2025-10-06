export default function HeroRoad({ className }: { className: string }) {
    return (
        <img 
            src="/hero-road.svg" 
            alt="Hero road decoration"
            className={className}
            fetchPriority="high"
            decoding="async"
            width="998"
            height="1938"
        />
    )
}
