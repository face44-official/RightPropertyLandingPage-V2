import { useState } from "react"
import { BlueExploreButton } from "../blue-explore-button"
import { BlogFilterCombobox } from "../combobox/blog-filter-combobox"

interface BlogListFilterProps {

    onFilterChange: (searchTerm?: string, category?: string) => void
}
export default function BlogListFilter({ onFilterChange }: BlogListFilterProps) {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const handleFilterChange = () => {
        onFilterChange(searchTerm, category)
    }
    return (
        <div className="py-[2rem] pl-[2.5rem] pr-[2.5rem] pb-[2.5rem] bg-[#EDF7FC] flex gap-4 items-end">
            <div className="max-w-[55.1875rem] flex-5">
                <div className="font-geist-mono text-base font-medium text-primary-black mb-[0.75rem]">
                    SEARCH RESOURCES
                </div>
                <div>
                    <input onChange={(e) => setSearchTerm(e.target.value)} className="bg-white rounded-[80px] pl-6 w-full font-geist text-base -tracking-[0.01em] text-dark-grey h-[3rem]" type="text" placeholder="Search by title, keywords, or topics" />
                </div>
            </div>
            <div className="flex-1">
                <div className="font-geist-mono text-base font-medium text-primary-black mb-[0.75rem]">
                    CATEGORIES
                </div>
                <div>
                    <BlogFilterCombobox onChange={(e) => setCategory(e)} />
                </div>
            </div>
            <BlueExploreButton className="w-[12.375rem] h-[3rem] text-sm" title={"SEARCH RESOURCES"} onClick={handleFilterChange} />
        </div>
    )
}