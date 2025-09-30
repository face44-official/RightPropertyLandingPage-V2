interface BlogListItemProps {
    title: string;
    category: string;
    image: string;
}

export default function BlogListItem({ title, category, image }: BlogListItemProps) {
    return (
        <article>
            <div className="relative">
                <img src={image} className="w-[30.375rem] h-[21.1875rem] object-cover" alt={`${title} - ${category}`} />
                <div className="px-4 py-2.5 bg-white rounded-[30px] font-geist text-sm top-6 left-6 absolute">
                    {category}
                </div>
            </div>
            <div className="px-[2rem] py-[1.5rem] bg-white font-geist font-medium text-24 leading-[140%] -tracking-[0.01em] text-squid-ink">
                {title}
            </div>
        </article>
    )
}