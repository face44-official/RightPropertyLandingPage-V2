import BlogListFilter from "../components/blog/blog-list-filter"
import BodyText from "../components/ui/body-text"
import { TitleBig } from "../components/ui/title"
import blogHeroWoman from "@/assets/v3/blog/blog_hero_woman.webp"
import blogMailImage from "@/assets/v3/blog/blog_mail_image.webp"
export default function BlogPage() {
    return (
        <div className="overflow-hidden">
            <div className="pl-[5rem] min-h-[100vh]  flex gap-[13.8125rem] items-center justify-center rp-container" >

                <div className="max-w-[46.75rem]">
                    <TitleBig className="mb-[2rem]">Insights for Smarter Property Sales</TitleBig>
                    <BodyText>
                        Explore the latest ideas, trends, and strategies in real estate sales, marketing, and technology—curated by the Right Property team.
                    </BodyText>
                </div>
                <div className="relative">
                    <img src={blogHeroWoman} className="w-[24.375rem] h-auto" alt="blog hero woman" />
                    <svg className="absolute top-[9rem] -left-[7.0625rem] w-[10.4375rem] h-auto" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1387_12979)">
                            <path d="M83.5015 166.456C129.294 166.456 166.417 129.314 166.417 83.4976C166.417 37.6809 129.294 0.539062 83.5015 0.539062C37.7085 0.539062 0.585938 37.6809 0.585938 83.4976C0.585938 129.314 37.7085 166.456 83.5015 166.456Z" fill="white" />
                            <path d="M83.5015 166.456C129.294 166.456 166.417 129.314 166.417 83.4976C166.417 37.6809 129.294 0.539062 83.5015 0.539062C37.7085 0.539062 0.585938 37.6809 0.585938 83.4976C0.585938 129.314 37.7085 166.456 83.5015 166.456Z" fill="url(#paint0_linear_1387_12979)" fill-opacity="0.1" />
                            <path d="M83.5015 166.456C129.294 166.456 166.417 129.314 166.417 83.4976C166.417 37.6809 129.294 0.539062 83.5015 0.539062C37.7085 0.539062 0.585938 37.6809 0.585938 83.4976C0.585938 129.314 37.7085 166.456 83.5015 166.456Z" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M152.606 37.6484C156.07 59.8689 135.452 88.6082 83.5012 88.6082C31.5504 88.6082 10.8675 59.9664 14.3309 37.7459" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M0.617188 86.0493C0.617188 103.473 36.4307 134.963 83.5003 134.963C130.559 134.963 166.383 103.408 166.383 85.9844" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M40.7109 12.421C81.0485 7.52644 139.277 40.6947 153.541 127.92" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M126.291 12.427C85.9539 7.54328 27.7257 40.7007 13.4609 127.926" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M0.972656 75.3494C2.60694 56.1934 36.4074 20.2422 83.4661 20.2422" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M165.958 75.3494C164.324 56.1934 130.524 20.2422 83.4648 20.2422" stroke="#53B5EE" stroke-width="1.06369" />
                            <path d="M83.5 0.539062V166.456" stroke="#53B5EE" stroke-width="1.06369" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1387_12979" x1="1.42468" y1="47.9779" x2="150.589" y2="175.435" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BADEF3" />
                                <stop offset="1" stop-color="#53B5EE" />
                            </linearGradient>
                            <clipPath id="clip0_1387_12979">
                                <rect width="167" height="167" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <img src={blogMailImage} className="-top-[0.375rem] left-[18.75rem] absolute w-[12.6875rem] h-auto" alt="blog mail image" />
                    <svg className="z-[-1] absolute -left-[45.25rem] -top-[21.25rem] w-[84.75rem] h-auto" viewBox="0 0 1356 1428" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M870.663 115.609C937.527 118.809 1113.52 168.939 1146.46 274.655C1188.75 410.391 940.131 582.233 799.367 661.299L1 1136.74" stroke="url(#paint0_linear_1387_12932)" stroke-width="0.747453" />
                        <circle cx="862.5" cy="92.5" r="237.5" fill="url(#paint1_radial_1387_12932)" />
                        <circle cx="521.5" cy="730.5" r="237.5" fill="url(#paint2_radial_1387_12932)" />
                        <path d="M1681 610.79C1496.08 536.418 797.96 352.918 1195.61 1427.38" stroke="url(#paint3_linear_1387_12932)" stroke-width="0.747453" />
                        <defs>
                            <linearGradient id="paint0_linear_1387_12932" x1="350" y1="904" x2="1421.1" y2="521.968" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#53B5EE" stop-opacity="0" />
                                <stop offset="0.663159" stop-color="#53B5EE" />
                                <stop offset="1" stop-color="#53B5EE" stop-opacity="0" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_1387_12932" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(862.5 92.5) rotate(90) scale(237.5)">
                                <stop offset="0.475962" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_1387_12932" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(521.5 730.5) rotate(90) scale(237.5)">
                                <stop offset="0.475962" stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                            <linearGradient id="paint3_linear_1387_12932" x1="1091" y1="770.5" x2="1179.37" y2="237.567" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#53B5EE" stop-opacity="0" />
                                <stop offset="1" stop-color="#53B5EE" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="z-[-1] absolute -top-[15.8125rem] -left-[42.0625rem] w-[101.625rem] h-auto" viewBox="0 0 1626 971" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1140.5" cy="485.5" r="485.5" fill="url(#paint0_radial_2149_5283)" fill-opacity="0.72" />
                        <circle cx="485.5" cy="485.5" r="485.5" fill="url(#paint1_radial_2149_5283)" fill-opacity="0.72" />
                        <defs>
                            <radialGradient id="paint0_radial_2149_5283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1140.5 485.5) rotate(90) scale(485.5)">
                                <stop stop-color="#C5E6FF" />
                                <stop offset="0.259615" stop-color="#C8E5FF" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_2149_5283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(485.5 485.5) rotate(90) scale(485.5)">
                                <stop stop-color="#C5E6FF" />
                                <stop offset="0.259615" stop-color="#C8E5FF" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
            </div>
            <div className="rp-container px-[5rem]">
                <BlogListFilter onFilterChange={(searchTerm, category) => {
                    console.log(searchTerm, category)
                }} />
            </div>

        </div>
    )
}