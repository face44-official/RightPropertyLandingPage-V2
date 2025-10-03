import MarketingPowerhouseSection from "../components/marketing/marketing-powehouse-section";
import { TitleBig } from "../components/ui/title";
import TwoColumnTextImageBlock from "../components/ui/two-column-text-image-block";
import automated from "@/assets/v3/automated.png"
import BinarySection, { BinaryBlockImage } from "../components/binary-section";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import MarketingEverythingConnects from "../components/marketing/marketing-everything-connects";
import OneColumnTitleImageDescription from "../components/ui/one-column-title-image-description";
import whatBuyerSeeVideo from "@/assets/v3/marketing/what-buyer-see.webm";
import readyMadeTemplatesVideo from "@/assets/v3/marketing/ready-made-templates.webm";
import emailVideo from "@/assets/v3/marketing/email-video.webm";
import { MarketingSplitTextSection } from "../components/marketing/marketing-splittext-section";
import MarketingHeroSection from "../components/marketing/marketing-hero-section";
import HeroSubPagesMobileRoad from "../components/hero/hero-sub-pages-mobile-road";
export default function MarketingPage() {
    return <main className="overflow-hidden">
        <HeroSubPagesMobileRoad firstMaskTop="2rem" secondMaskTop="0rem" />
        <main id="sales-page" className="relative z-[20] pt-[14.56rem] lg:pt-[12.25rem] flex flex-col justify-center">
            <TitleBig className="w-[54.5rem] lg:w-full lg:px-4 !mb-[3.75rem] lg:!mb-[1.875rem] rp-container text-center">Marketing That Connects Directly to Sales.</TitleBig>
            <MarketingHeroSection />
            <MarketingSplitTextSection />
            <MarketingPowerhouseSection />
            <TwoColumnTextImageBlock className="pb-[24.1875rem]" title="What Buyers See in Person, They See Online." description="Bring your immersive presentations to the web. From site plans to media galleries, the website reflects your project in a professional, interactive format—ready to convert." image={<TheySeeOnlineImage />} variant={"image-left"} />
            <OneColumnTitleImageDescription className="pb-[32.8125rem] lg:pb-[16.25rem]" title="Ready-Made Templates. Full Creative Control." description="Choose from ready-to-use templates or fully customize your campaign pages with a powerful but intuitive CMS. Keep your brand consistent and your setup hassle-free." image={<ReadyMadeTemplatesVideo />} />
            <TwoColumnTextImageBlock className="lg:pb-[7.5rem]" title="Create and Send Campaigns Without Leaving the Platform." description="Engage prospects with beautifully designed emails and automation tools—all built in. Whether launching a campaign or nurturing leads, you’re in control." image={<EmailVideo />} variant={"image-right"} />
            <div className="lg:px-4 relative rp-container py-[25.75rem] lg:pt-0 lg:py-[7.5rem]">
                <BinarySection className="" subHeader="Did you know?" title="Automated where it matters" description="We simplify the complex. Many steps you'd expect to handle manually are fully automated behind the scenes." image={<BinaryBlockImage path={automated} />} />
                <svg className="absolute lg:hidden left-1/2 z-[-1]" width="1445" height="1049" viewBox="0 0 1445 1049" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="722.5" cy="524.14" rx="722.5" ry="524.14" fill="url(#paint0_radial_1312_2947)" />
                    <defs>
                        <radialGradient id="paint0_radial_1312_2947" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(722.5 524.14) rotate(90) scale(524.14 722.5)">
                            <stop stop-color="#E7DFF2" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            </div>
            <MarketingEverythingConnects />
            <ScheduleADemoSection />
        </main>
    </main>
}


const TheySeeOnlineImage = () => {
    return (
        <div className="relative">
            <svg className="w-[5.25rem] absolute -top-[6.315rem] left-[5.6875rem] lg:-top-[3.375rem] lg:left-[3.375rem]" viewBox="0 0 144 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 151.972L8.34538 1L142.806 37.5048L130.803 141.748L1 151.972Z" fill="url(#paint0_linear_1312_5368)" fill-opacity="0.1" />
                <path d="M1 151.972L8.34538 1L142.806 37.5048L130.803 141.748L1 151.972Z" fill="#EFF6FF" />
                <path d="M1 151.972L8.34538 1L142.806 37.5048L130.803 141.748L1 151.972Z" stroke="#53B5EE" />
                <path d="M39.5095 105.876L1.22656 151.751L130.808 141.749L119.904 102.841C116.436 90.4667 100.16 87.6594 92.747 98.1568L87.5175 105.562C82.8173 112.218 73.0495 112.515 67.9536 106.157C60.6914 97.0961 46.9496 96.9601 39.5095 105.876Z" fill="url(#paint1_linear_1312_5368)" fill-opacity="0.1" stroke="#53B5EE" />
                <ellipse cx="79.6825" cy="64.1763" rx="15.7809" ry="16.8922" transform="rotate(-10.4415 79.6825 64.1763)" fill="url(#paint2_linear_1312_5368)" fill-opacity="0.1" stroke="#53B5EE" />
                <defs>
                    <linearGradient id="paint0_linear_1312_5368" x1="1.71722" y1="36.2681" x2="143.199" y2="142.125" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1312_5368" x1="1.88196" y1="94.7715" x2="70.7659" y2="190.407" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1312_5368" x1="64.0613" y1="56.9437" x2="94.0498" y2="80.8949" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                </defs>
            </svg>
            <svg className="lg:hidden absolute  left-[32.5625rem] -bottom-[4.5625rem]" width="154" height="136" viewBox="0 0 154 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.47 134.292L153 1L11.1524 3.06433L0.999817 76.7297L126.47 134.292Z" fill="url(#paint0_linear_1312_5372)" fill-opacity="0.1" />
                <path d="M126.47 134.292L153 1L11.1524 3.06433L0.999817 76.7297L126.47 134.292Z" fill="#EFF6FF" />
                <path d="M126.47 134.292L153 1L11.1524 3.06433L0.999817 76.7297L126.47 134.292Z" stroke="#53B5EE" stroke-width="1.18219" />
                <path d="M87.4219 37.0859L47.8037 47.6945L81.6371 67.7044L87.4219 37.0859Z" fill="url(#paint1_linear_1312_5372)" fill-opacity="0.1" stroke="#53B5EE" stroke-width="1.18219" />
                <defs>
                    <linearGradient id="paint0_linear_1312_5372" x1="152.231" y1="39.1108" x2="30.9519" y2="157.347" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1312_5372" x1="87.1575" y1="43.8001" x2="57.9157" y2="82.8289" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                </defs>
            </svg>


            <video autoPlay muted loop playsInline src={whatBuyerSeeVideo} className="w-[46.625rem] lg:w-full lg:h-auto h-[40.625rem] object-cover" />
        </div>
    )
}

const ReadyMadeTemplatesVideo = () => {
    return (
        <div className="relative">
            <video autoPlay muted loop playsInline src={readyMadeTemplatesVideo} className="w-full h-auto object-cover" />
        </div>
    )
}

const EmailVideo = () => {
    return (
        <div className="relative overflow-visible">
            <div className="z-[-1] w-[1521px] lg:w-[807px] h-[1521px] lg:h-[715px] -left-[761px] lg:-left-[372px] -top-[351px] lg:-top-[240px] absolute" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}>

            </div>
            <svg className="lg:w-[50.4375rem] lg:h-auto -left-[80rem] lg:-left-[23.25rem] lg:-top-[15.375rem] -top-[18rem] absolute z-[-1]" width="2249" height="1757" viewBox="0 0 2249 1757" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1164.5 1C1253.96 5.28018 1489.41 72.3479 1533.48 213.783C1590.07 395.382 1257.44 625.285 1069.12 731.065L1.00019 1367.15" stroke="url(#paint0_linear_1312_3006)" />
                <path d="M2248.63 663.493C2001.23 563.992 1067.23 318.493 1599.23 1755.99" stroke="url(#paint1_linear_1312_3006)" />
                <g clip-path="url(#clip0_1312_3006)">
                    <path d="M1666.32 670.171L1635.54 672.471C1636.59 672.041 1637.64 671.631 1638.68 671.241L1665.77 669.211L1666.32 670.171Z" fill="url(#paint2_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1671.6 679.37L1613.3 683.73C1613.92 683.33 1614.55 682.96 1615.17 682.59L1671.05 678.41L1671.6 679.37Z" fill="url(#paint3_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1676.89 688.569L1598.11 694.459C1598.57 694.079 1599.03 693.709 1599.5 693.359L1676.34 687.609L1676.89 688.569Z" fill="url(#paint4_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1682.17 697.772L1586.45 704.932C1586.81 704.562 1587.18 704.202 1587.55 703.842L1681.62 696.812L1682.17 697.772Z" fill="url(#paint5_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1679.33 706.582L1678.76 707.622L1577.08 715.232L1577.98 714.152L1679.33 706.582Z" fill="url(#paint6_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1673.97 716.582L1673.41 717.622L1569.42 725.402C1569.65 725.042 1569.9 724.692 1570.15 724.342L1673.97 716.582Z" fill="url(#paint7_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1668.61 726.57L1668.05 727.62L1563.06 735.46C1563.26 735.11 1563.46 734.77 1563.67 734.42L1668.61 726.57Z" fill="url(#paint8_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1663.25 736.57L1662.69 737.61L1557.78 745.45C1557.95 745.1 1558.12 744.75 1558.3 744.41L1663.25 736.57Z" fill="url(#paint9_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1657.9 746.562L1657.34 747.613L1553.43 755.382C1553.56 755.032 1553.7 754.682 1553.84 754.342L1657.9 746.562Z" fill="url(#paint10_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1652.54 756.562L1651.98 757.603L1563.41 764.233L1558.88 763.562L1652.54 756.562Z" fill="url(#paint11_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1647.18 766.562L1646.62 767.603L1606.64 770.592L1602.11 769.923L1647.18 766.562Z" fill="url(#paint12_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1557.79 783.84L1541 785.1C1541.21 784.74 1541.42 784.39 1541.64 784.04L1554.62 783.07L1557.79 783.84Z" fill="url(#paint13_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1580.42 791.74L1535.62 795.09C1535.78 794.74 1535.95 794.39 1536.12 794.05L1580.09 790.77L1580.42 791.74Z" fill="url(#paint14_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1583.51 801.101L1531.36 805.001C1531.48 804.661 1531.62 804.311 1531.76 803.971L1583.19 800.121L1583.51 801.101Z" fill="url(#paint15_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1586.61 810.472L1528.03 814.852C1528.13 814.512 1528.23 814.162 1528.34 813.822L1586.29 809.492L1586.61 810.472Z" fill="url(#paint16_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1589.71 819.832L1525.54 824.632C1525.61 824.292 1525.68 823.952 1525.76 823.612L1589.39 818.852L1589.71 819.832Z" fill="url(#paint17_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1592.81 829.203L1523.8 834.363C1523.85 834.023 1523.9 833.683 1523.95 833.343L1592.49 828.223L1592.81 829.203Z" fill="url(#paint18_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1595.91 838.562L1522.81 844.022C1522.81 843.682 1522.85 843.352 1522.88 843.022L1595.58 837.582L1595.91 838.562Z" fill="url(#paint19_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1599 847.923L1522.5 853.643V852.643L1598.68 846.953L1599 847.923Z" fill="url(#paint20_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1602.1 857.292L1522.9 863.213C1522.87 862.883 1522.85 862.543 1522.82 862.213L1601.78 856.312L1602.1 857.292Z" fill="url(#paint21_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1601.94 865.891L1600.53 867.001L1523.99 872.731C1523.93 872.401 1523.88 872.061 1523.84 871.731L1601.94 865.891Z" fill="url(#paint22_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1588.42 876.5L1587.01 877.61L1525.76 882.19C1525.68 881.86 1525.61 881.53 1525.54 881.2L1588.42 876.5Z" fill="url(#paint23_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1574.9 887.109L1573.48 888.219L1528.24 891.599C1528.14 891.269 1528.04 890.939 1527.95 890.619L1574.9 887.109Z" fill="url(#paint24_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1561.38 897.723L1559.98 898.823L1531.44 900.953C1531.31 900.633 1531.19 900.303 1531.07 899.983L1561.38 897.723Z" fill="url(#paint25_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1547.87 908.32L1546.45 909.43L1535.37 910.25C1535.21 909.93 1535.07 909.61 1534.92 909.29L1547.87 908.32Z" fill="url(#paint26_linear_1312_3006)" fill-opacity="0.3" />
                    <path d="M1683.14 699.461L1679.33 706.581L1678.76 707.621L1673.97 716.581L1673.41 717.621L1668.61 726.571L1668.05 727.621L1663.25 736.571L1662.69 737.611L1657.9 746.561L1657.34 747.611L1652.54 756.561L1651.98 757.601L1647.18 766.561L1646.62 767.601L1642.21 775.831L1606.64 770.591L1602.11 769.921L1563.41 764.231L1558.88 763.561L1550.81 762.371C1551.64 759.991 1552.51 757.661 1553.43 755.381C1553.56 755.031 1553.7 754.681 1553.84 754.341C1555.08 751.291 1556.4 748.321 1557.78 745.451C1557.95 745.101 1558.12 744.751 1558.3 744.411C1559.8 741.331 1561.4 738.341 1563.06 735.461C1563.26 735.111 1563.46 734.771 1563.67 734.421C1565.5 731.301 1567.41 728.291 1569.42 725.401C1569.65 725.041 1569.9 724.691 1570.15 724.341C1572.37 721.161 1574.69 718.131 1577.08 715.231L1577.98 714.151C1580.71 710.901 1583.54 707.831 1586.45 704.931C1586.81 704.561 1587.18 704.201 1587.55 703.841C1590.97 700.481 1594.5 697.361 1598.11 694.461C1598.57 694.081 1599.03 693.711 1599.5 693.361C1604.01 689.801 1608.63 686.601 1613.3 683.731C1613.92 683.331 1614.55 682.961 1615.17 682.591C1621.94 678.541 1628.79 675.191 1635.54 672.471C1636.59 672.041 1637.64 671.631 1638.68 671.241C1647.15 668.051 1655.41 665.851 1663.09 664.551L1665.77 669.211L1666.32 670.171L1671.05 678.411L1671.6 679.371L1676.34 687.611L1676.89 688.571L1681.62 696.811L1682.17 697.771L1683.14 699.461Z" fill="url(#paint27_linear_1312_3006)" fill-opacity="0.1" stroke="#53B5EE" />
                    <path d="M1604.33 864.02L1601.94 865.89L1600.53 867L1588.42 876.5L1587.01 877.61L1574.9 887.11L1573.48 888.22L1561.38 897.72L1559.98 898.82L1547.87 908.32L1546.45 909.43L1538.15 915.94C1537.17 914.04 1536.24 912.15 1535.37 910.25C1535.21 909.93 1535.07 909.61 1534.92 909.29C1533.65 906.5 1532.49 903.72 1531.44 900.95C1531.31 900.63 1531.19 900.3 1531.07 899.98C1530.02 897.17 1529.08 894.38 1528.24 891.6C1528.14 891.27 1528.04 890.94 1527.95 890.62C1527.12 887.79 1526.39 884.98 1525.76 882.19C1525.68 881.86 1525.61 881.53 1525.54 881.2C1524.92 878.36 1524.4 875.53 1523.99 872.73C1523.93 872.4 1523.88 872.06 1523.84 871.73C1523.43 868.87 1523.11 866.02 1522.9 863.21C1522.87 862.88 1522.85 862.54 1522.82 862.21C1522.62 859.32 1522.52 856.47 1522.5 853.64V852.64C1522.5 849.73 1522.61 846.85 1522.81 844.02C1522.81 843.68 1522.85 843.35 1522.88 843.02C1523.09 840.09 1523.4 837.2 1523.8 834.36C1523.85 834.02 1523.9 833.68 1523.95 833.34C1524.39 830.38 1524.92 827.47 1525.54 824.63C1525.61 824.29 1525.68 823.95 1525.76 823.61C1526.43 820.62 1527.19 817.7 1528.03 814.85C1528.13 814.51 1528.23 814.16 1528.34 813.82C1529.26 810.79 1530.27 807.85 1531.36 805C1531.48 804.66 1531.62 804.31 1531.76 803.97C1532.96 800.89 1534.25 797.92 1535.62 795.09C1535.78 794.74 1535.95 794.39 1536.12 794.05C1537.67 790.9 1539.3 787.91 1541 785.1C1541.21 784.74 1541.42 784.39 1541.64 784.04C1542.39 782.82 1543.16 781.63 1543.93 780.48L1554.62 783.07L1557.79 783.84L1579.55 789.12L1580.09 790.77L1580.42 791.74L1583.19 800.12L1583.51 801.1L1586.29 809.49L1586.61 810.47L1589.39 818.85L1589.71 819.83L1592.49 828.22L1592.81 829.2L1595.58 837.58L1595.91 838.56L1598.68 846.95L1599 847.92L1601.78 856.31L1602.1 857.29L1604.33 864.02Z" fill="url(#paint28_linear_1312_3006)" fill-opacity="0.1" stroke="#53B5EE" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1312_3006" x1="1240.5" y1="212.874" x2="1238.38" y2="0.159154" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#53B5EE" />
                        <stop offset="1" stop-color="#53B5EE" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1312_3006" x1="1631" y1="1713.5" x2="1240.17" y2="710.595" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#53B5EE" stop-opacity="0" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1312_3006" x1="1635.83" y1="671.323" x2="1651.05" y2="649.907" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1312_3006" x1="1613.85" y1="681.857" x2="1637.28" y2="643.599" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1312_3006" x1="1598.85" y1="692.047" x2="1628.33" y2="641.519" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1312_3006" x1="1587.35" y1="702.073" x2="1621.87" y2="641.435" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1312_3006" x1="1578.04" y1="712.186" x2="1614.76" y2="647.502" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1312_3006" x1="1570.4" y1="722.296" x2="1607.79" y2="656.252" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1312_3006" x1="1564.05" y1="732.33" x2="1601.71" y2="665.709" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1312_3006" x1="1558.77" y1="742.323" x2="1596.38" y2="675.766" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1312_3006" x1="1554.41" y1="752.277" x2="1591.82" y2="686.257" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_1312_3006" x1="1559.76" y1="761.532" x2="1591.77" y2="703.283" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_1312_3006" x1="1602.53" y1="769.173" x2="1620.11" y2="739.874" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_1312_3006" x1="1541.16" y1="784.385" x2="1550.98" y2="772.281" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint14_linear_1312_3006" x1="1536.04" y1="793.568" x2="1555.53" y2="763.46" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint15_linear_1312_3006" x1="1531.85" y1="803.283" x2="1553.58" y2="768.676" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint16_linear_1312_3006" x1="1528.58" y1="812.965" x2="1552.21" y2="774.477" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint17_linear_1312_3006" x1="1526.14" y1="822.596" x2="1551.44" y2="780.738" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint18_linear_1312_3006" x1="1524.45" y1="832.201" x2="1551.17" y2="787.444" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint19_linear_1312_3006" x1="1523.5" y1="841.754" x2="1551.39" y2="794.569" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint20_linear_1312_3006" x1="1523.22" y1="851.287" x2="1552.09" y2="802.083" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint21_linear_1312_3006" x1="1523.57" y1="860.783" x2="1553.28" y2="809.91" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint22_linear_1312_3006" x1="1524.57" y1="870.322" x2="1554.12" y2="820.053" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint23_linear_1312_3006" x1="1526.13" y1="880.186" x2="1551.09" y2="839.082" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint24_linear_1312_3006" x1="1528.39" y1="890.018" x2="1548.57" y2="858.573" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint25_linear_1312_3006" x1="1531.36" y1="899.815" x2="1546.47" y2="878.684" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint26_linear_1312_3006" x1="1535.04" y1="909.571" x2="1544.59" y2="900.03" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint27_linear_1312_3006" x1="1551.48" y1="696.368" x2="1652.75" y2="799.323" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint28_linear_1312_3006" x1="1522.91" y1="819.211" x2="1623.45" y2="871.131" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <clipPath id="clip0_1312_3006">
                        <rect width="161.71" height="252.71" fill="white" transform="translate(1522 664)" />
                    </clipPath>
                </defs>
            </svg>

            <svg className="lg:w-[10.625rem] lg:h-auto lg:left-[11rem] lg:-top-[7.75rem] absolute left-[16.75rem] -top-[18.5625rem]" width="385" height="395" viewBox="0 0 385 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1312_5122)">
                    <path d="M12.1932 55.9319L157.335 32.6136L106.918 121.261L79.2723 101.25L46.6608 115.634L45.6989 78.826L12.1932 55.9319Z" fill="url(#paint0_linear_1312_5122)" fill-opacity="0.1" stroke="#53B5EE" stroke-width="0.398581" />
                    <g clip-path="url(#clip1_1312_5122)">
                        <path d="M155.53 33.2818L155.752 33.4972L156.106 33.2841L155.934 33.115L155.53 33.2818Z" fill="url(#paint1_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M151.382 34.9969L152.12 35.7108L152.472 35.4926L151.786 34.83L151.382 34.9969Z" fill="url(#paint2_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M147.24 36.7146L148.493 37.9271L148.843 37.7125L147.642 36.5514L147.24 36.7146Z" fill="url(#paint3_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M143.087 38.4319L144.852 40.1414L145.206 39.9283L143.491 38.265L143.087 38.4319Z" fill="url(#paint4_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M138.943 40.1509L141.224 42.3589L141.575 42.1407L139.347 39.984L138.943 40.1509Z" fill="url(#paint5_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M134.793 41.8647L137.586 44.5698L137.939 44.3567L135.195 41.7015L134.793 41.8647Z" fill="url(#paint6_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M130.648 43.5819L133.956 46.7856L134.31 46.5726L131.052 43.4151L130.648 43.5819Z" fill="url(#paint7_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M126.5 45.3009L130.324 49.0032L130.674 48.7886L126.904 45.1341L126.5 45.3009Z" fill="url(#paint8_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M122.352 47.0145L126.688 51.2138L127.042 51.0007L122.756 46.8476L122.352 47.0145Z" fill="url(#paint9_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M118.208 48.735L123.056 53.4313L123.406 53.2168L118.608 48.5666L118.208 48.735Z" fill="url(#paint10_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M114.053 50.451L119.42 55.6474L119.77 55.4328L114.457 50.2841L114.053 50.451Z" fill="url(#paint11_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M109.913 52.1661L115.788 57.858L116.142 57.6449L110.313 51.9977L109.913 52.1661Z" fill="url(#paint12_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M105.765 53.885L112.156 60.0756L112.506 59.861L106.165 53.7167L105.765 53.885Z" fill="url(#paint13_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M101.614 55.6025L108.52 62.2916L108.87 62.077L102.014 55.4342L101.614 55.6025Z" fill="url(#paint14_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M97.4659 57.3161L104.884 64.5022L105.238 64.2892L97.866 57.1478L97.4659 57.3161Z" fill="url(#paint15_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M93.3259 59.039L101.26 66.7237L101.61 66.5091L93.7296 58.8722L93.3259 59.039Z" fill="url(#paint16_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M89.1758 60.7489L97.6236 68.9358L97.9736 68.7213L89.5744 60.5842L89.1758 60.7489Z" fill="url(#paint17_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M85.0267 62.4662L93.9878 71.1465L94.3415 70.9334L85.4304 62.2993L85.0267 62.4662Z" fill="url(#paint18_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M80.875 64.1852L90.3516 73.364L90.7017 73.1494L81.2787 64.0183L80.875 64.1852Z" fill="url(#paint19_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M76.7351 65.9027L86.7237 75.5785L87.0774 75.3655L77.1389 65.7358L76.7351 65.9027Z" fill="url(#paint20_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M72.581 67.6179L83.0851 77.7924L83.4336 77.5815L72.9795 67.4533L72.581 67.6179Z" fill="url(#paint21_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M68.4357 69.3352L79.4555 80.0082L79.8055 79.7937L68.8358 69.1669L68.4357 69.3352Z" fill="url(#paint22_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M64.2857 71.049L75.8158 82.2228L76.1695 82.0097L64.6879 70.8859L64.2857 71.049Z" fill="url(#paint23_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M60.1457 72.7719L72.1914 84.4442L72.5414 84.2296L60.5442 72.6073L60.1457 72.7719Z" fill="url(#paint24_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M55.9965 74.4892L68.5593 86.6563L68.9093 86.4418L56.4003 74.3223L55.9965 74.4892Z" fill="url(#paint25_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M51.8465 76.1991L64.9196 88.867L65.2734 88.6539L52.2487 76.0359L51.8465 76.1991Z" fill="url(#paint26_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M47.6959 77.9182L62.0473 91.8217L62.2679 91.4812L48.0981 77.7551L47.6959 77.9182Z" fill="url(#paint27_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M45.7585 81.2226L45.7733 81.7882L59.7673 95.3436L59.9864 95.0068L45.7585 81.2226Z" fill="url(#paint28_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M45.9126 87.1026L45.9259 87.6719L57.4788 98.8635L57.7031 98.5245L45.9126 87.1026Z" fill="url(#paint29_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M46.0704 92.9919L46.0852 93.5575L55.1992 102.391L55.4198 102.05L46.0704 92.9919Z" fill="url(#paint30_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M46.2206 98.8759L46.2369 99.4377L52.9136 105.908L53.1327 105.572L46.2206 98.8759Z" fill="url(#paint31_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M46.3749 104.758L46.3897 105.324L50.6327 109.434L50.8533 109.093L46.3749 104.758Z" fill="url(#paint32_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M46.529 110.642L46.5438 111.208L48.3495 112.955L48.5685 112.619L46.529 110.642Z" fill="url(#paint33_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M45.6906 78.748L45.7551 81.2191L45.7698 81.7847L45.9096 87.1015L45.9229 87.6708L46.0626 92.9875L46.0774 93.5531L46.2157 98.8736L46.232 99.4354L46.3665 104.754L46.3813 105.32L46.521 110.637L46.5358 111.202L46.6501 115.557L48.3414 112.95L48.5605 112.613L50.6243 109.43L50.8449 109.089L52.9086 105.906L53.1277 105.569L55.1915 102.386L55.4121 102.046L57.4758 98.8624L57.7001 98.5234L59.7639 95.3402L59.9829 95.0034L62.0467 91.8202L62.2673 91.4797L63.3351 89.8317L64.9165 88.8665L65.2702 88.6535L68.5526 86.6514L68.9027 86.4369L72.1836 84.4385L72.5336 84.224L75.8161 82.2219L76.1698 82.0089L79.4522 80.0068L79.8023 79.7922L83.0847 77.7902L83.4332 77.5793L86.7157 75.5773L87.0694 75.3642L90.3519 73.3622L90.7019 73.1476L93.9843 71.1456L94.338 70.9325L97.619 68.9342L97.969 68.7196L101.251 66.7176L101.601 66.503L104.884 64.501L105.238 64.2879L108.519 62.2895L108.869 62.075L112.151 60.0729L112.501 59.8584L115.784 57.8563L116.137 57.6433L119.418 55.6449L119.768 55.4303L123.051 53.4283L123.401 53.2137L126.683 51.2117L127.037 50.9986L130.318 49.0003L130.668 48.7857L133.95 46.7837L134.304 46.5706L137.583 44.5671L137.936 44.354L141.217 42.3557L141.569 42.1374L144.85 40.1391L145.204 39.926L148.486 37.9239L148.836 37.7094L152.117 35.711L152.469 35.4928L155.75 33.4944L156.103 33.2814L157.324 32.5352L155.931 33.1122L155.527 33.2791L151.783 34.8303L151.379 34.9971L147.635 36.5483L147.233 36.7115L143.488 38.2627L143.085 38.4295L139.34 39.9807L138.937 40.1476L135.192 41.6988L134.79 41.8619L131.046 43.4131L130.642 43.58L126.898 45.1312L126.494 45.298L122.751 46.8456L122.347 47.0124L118.603 48.5636L118.203 48.732L114.455 50.2817L114.051 50.4485L110.309 51.996L109.909 52.1644L106.161 53.7141L105.76 53.8824L102.012 55.4321L101.612 55.6005L97.8659 57.1465L97.4659 57.3148L93.7216 58.866L93.3178 59.0329L89.5698 60.5826L89.1713 60.7472L85.427 62.2985L85.0232 62.4653L81.2789 64.0165L80.8752 64.1833L77.1308 65.7346L76.7271 65.9014L72.9791 67.4511L72.5806 67.6158L68.8326 69.1655L68.4325 69.3338L64.6882 70.885L64.286 71.0482L60.5364 72.6016L60.1379 72.7662L56.3936 74.3174L55.9898 74.4843L52.2455 76.0355L51.8433 76.1986L48.0975 77.7535L47.6952 77.9167L45.6906 78.748Z" fill="url(#paint34_linear_1312_5122)" fill-opacity="0.1" stroke="#53B5EE" stroke-width="0.398581" />
                    </g>
                    <path d="M63.3418 89.9081L79.2688 101.248L46.6573 115.633L63.3418 89.9081Z" fill="url(#paint35_linear_1312_5122)" fill-opacity="0.1" stroke="#53B5EE" stroke-width="0.398581" />
                </g>
                <g clip-path="url(#clip2_1312_5122)">
                    <path d="M372.482 325.452L197.805 219.227L216.196 359.857L262.305 348.599L296.751 384.244L317.313 337.346L372.482 325.452Z" fill="white" />
                    <path d="M372.482 325.452L197.805 219.227L216.196 359.857L262.305 348.599L296.751 384.244L317.313 337.346L372.482 325.452Z" fill="url(#paint36_linear_1312_5122)" fill-opacity="0.1" />
                    <path d="M372.482 325.452L197.805 219.227L216.196 359.857L262.305 348.599L296.751 384.244L317.313 337.346L372.482 325.452Z" stroke="#53B5EE" />
                    <g clip-path="url(#clip3_1312_5122)">
                        <path d="M199.782 221.032L199.383 221.193L199.039 220.733L199.349 220.605L199.782 221.032Z" fill="url(#paint37_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M204.222 225.423L202.897 225.955L202.559 225.489L203.789 224.996L204.222 225.423Z" fill="url(#paint38_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M208.663 229.808L206.412 230.712L206.074 230.251L208.23 229.387L208.663 229.808Z" fill="url(#paint39_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M213.104 234.196L209.934 235.471L209.59 235.011L212.672 233.77L213.104 234.196Z" fill="url(#paint40_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M217.544 238.587L213.448 240.233L213.109 239.768L217.112 238.16L217.544 238.587Z" fill="url(#paint41_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M221.981 242.972L216.965 244.99L216.621 244.53L221.549 242.551L221.981 242.972Z" fill="url(#paint42_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M226.423 247.36L220.48 249.75L220.137 249.289L225.99 246.934L226.423 247.36Z" fill="url(#paint43_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M230.862 251.751L223.994 254.512L223.656 254.051L230.43 251.324L230.862 251.751Z" fill="url(#paint44_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M235.304 256.138L227.516 259.27L227.172 258.81L234.871 255.711L235.304 256.138Z" fill="url(#paint45_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M239.738 260.528L231.03 264.032L230.691 263.572L239.311 260.102L239.738 260.528Z" fill="url(#paint46_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M244.185 264.915L234.545 268.79L234.207 268.33L243.752 264.488L244.185 264.915Z" fill="url(#paint47_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M248.617 269.302L238.062 273.548L237.719 273.088L248.19 268.875L248.617 269.302Z" fill="url(#paint48_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M253.056 273.692L241.576 278.31L241.238 277.85L252.629 273.266L253.056 273.692Z" fill="url(#paint49_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M257.498 278.083L245.092 283.072L244.754 282.612L257.071 277.656L257.498 278.083Z" fill="url(#paint50_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M261.939 282.466L248.613 287.826L248.27 287.366L261.512 282.039L261.939 282.466Z" fill="url(#paint51_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M266.379 286.857L252.127 292.588L251.789 292.128L265.946 286.43L266.379 286.857Z" fill="url(#paint52_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M270.816 291.242L255.639 297.35L255.301 296.89L270.389 290.82L270.816 291.242Z" fill="url(#paint53_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M275.257 295.63L259.16 302.104L258.816 301.644L274.825 295.203L275.257 295.63Z" fill="url(#paint54_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M279.697 300.021L262.674 306.866L262.336 306.406L279.265 299.594L279.697 300.021Z" fill="url(#paint55_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M284.138 304.411L266.195 311.628L265.852 311.168L283.706 303.984L284.138 304.411Z" fill="url(#paint56_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M288.578 308.796L269.709 316.385L269.371 315.93L288.151 308.375L288.578 308.796Z" fill="url(#paint57_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M293.019 313.185L273.225 321.145L272.887 320.684L292.593 312.758L293.019 313.185Z" fill="url(#paint58_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M297.457 317.57L276.742 325.907L276.398 325.447L297.024 317.148L297.457 317.57Z" fill="url(#paint59_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M301.896 321.96L280.256 330.669L279.918 330.209L301.47 321.539L301.896 321.96Z" fill="url(#paint60_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M306.338 326.353L283.772 335.427L283.434 334.967L305.905 325.926L306.338 326.353Z" fill="url(#paint61_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M310.779 330.738L287.293 340.189L286.949 339.729L310.347 330.316L310.779 330.738Z" fill="url(#paint62_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M315.218 335.128L289.437 345.5L289.332 344.945L314.786 334.707L315.218 335.128Z" fill="url(#paint63_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M315.981 340.398L315.665 341.119L290.527 351.23L290.422 350.681L315.981 340.398Z" fill="url(#paint64_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M312.696 347.891L312.38 348.617L291.626 356.965L291.516 356.41L312.696 347.891Z" fill="url(#paint65_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M309.409 355.391L309.093 356.111L292.719 362.702L292.613 362.148L309.409 355.391Z" fill="url(#paint66_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M306.124 362.891L305.808 363.606L293.812 368.434L293.707 367.885L306.124 362.891Z" fill="url(#paint67_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M302.84 370.387L302.524 371.107L294.902 374.173L294.797 373.618L302.84 370.387Z" fill="url(#paint68_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M299.551 377.879L299.235 378.6L295.992 379.902L295.887 379.353L299.551 377.879Z" fill="url(#paint69_linear_1312_5122)" fill-opacity="0.3" />
                        <path d="M317.364 337.247L315.984 340.396L315.668 341.117L312.696 347.89L312.38 348.616L309.409 355.39L309.093 356.111L306.122 362.89L305.806 363.605L302.841 370.384L302.525 371.105L299.554 377.879L299.238 378.599L296.804 384.148L295.995 379.902L295.89 379.353L294.903 374.17L294.798 373.616L293.811 368.433L293.706 367.884L292.719 362.702L292.614 362.147L291.627 356.964L291.516 356.41L290.529 351.227L290.424 350.678L289.437 345.496L289.332 344.941L288.822 342.258L287.292 340.185L286.949 339.725L283.772 335.424L283.434 334.964L280.258 330.668L279.92 330.208L276.744 325.906L276.4 325.446L273.224 321.145L272.886 320.685L269.709 316.383L269.371 315.929L266.195 311.627L265.851 311.167L262.675 306.866L262.337 306.406L259.161 302.104L258.817 301.644L255.641 297.348L255.303 296.888L252.127 292.586L251.789 292.126L248.612 287.825L248.269 287.365L245.092 283.069L244.754 282.609L241.578 278.307L241.24 277.847L238.064 273.546L237.72 273.086L234.544 268.79L234.206 268.33L231.029 264.028L230.691 263.568L227.515 259.267L227.171 258.807L223.995 254.511L223.657 254.051L220.481 249.749L220.137 249.289L216.967 244.988L216.623 244.528L213.447 240.232L213.109 239.766L209.932 235.47L209.589 235.01L206.412 230.709L206.074 230.248L202.898 225.953L202.56 225.487L199.384 221.191L199.04 220.731L197.859 219.129L199.35 220.603L199.783 221.03L203.791 224.994L204.223 225.42L208.231 229.384L208.663 229.805L212.671 233.768L213.103 234.195L217.111 238.158L217.543 238.585L221.551 242.549L221.983 242.97L225.991 246.933L226.423 247.36L230.431 251.323L230.863 251.75L234.871 255.708L235.303 256.135L239.311 260.098L239.738 260.525L243.751 264.488L244.183 264.915L248.191 268.873L248.618 269.3L252.631 273.263L253.058 273.69L257.071 277.653L257.498 278.08L261.511 282.038L261.938 282.465L265.946 286.428L266.378 286.855L270.391 290.818L270.818 291.24L274.826 295.203L275.258 295.63L279.266 299.593L279.698 300.02L283.706 303.983L284.138 304.41L288.151 308.373L288.578 308.795L292.591 312.758L293.018 313.185L297.026 317.148L297.458 317.569L301.472 321.538L301.898 321.96L305.906 325.923L306.338 326.35L310.346 330.313L310.779 330.734L314.786 334.703L315.219 335.124L317.364 337.247Z" fill="url(#paint70_linear_1312_5122)" fill-opacity="0.1" stroke="#53B5EE" />
                    </g>
                    <path d="M288.767 342.356L262.303 348.599L296.749 384.243L288.767 342.356Z" fill="url(#paint71_linear_1312_5122)" fill-opacity="0.1" stroke="#53B5EE" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1312_5122" x1="19.2733" y1="30.0939" x2="88.4966" y2="155.314" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1312_5122" x1="155.808" y1="33.466" x2="155.745" y2="33.059" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1312_5122" x1="151.946" y1="35.5519" x2="151.927" y2="34.8338" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1312_5122" x1="148.091" y1="37.6418" x2="148.108" y2="36.6322" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1312_5122" x1="144.226" y1="39.7304" x2="144.271" y2="38.4251" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_1312_5122" x1="140.368" y1="41.8202" x2="140.441" y2="40.2243" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_1312_5122" x1="136.506" y1="43.9062" x2="136.608" y2="42.0239" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_1312_5122" x1="132.649" y1="45.9948" x2="132.777" y2="43.8186" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_1312_5122" x1="128.787" y1="48.0846" x2="128.942" y2="45.6188" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_1312_5122" x1="124.927" y1="50.17" x2="125.109" y2="47.4144" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_1312_5122" x1="121.066" y1="52.2604" x2="121.274" y2="49.2155" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_1312_5122" x1="117.201" y1="54.3491" x2="117.437" y2="51.0144" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_1312_5122" x1="113.347" y1="56.435" x2="113.609" y2="52.811" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_1312_5122" x1="109.485" y1="58.5248" x2="109.773" y2="54.6115" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint14_linear_1312_5122" x1="105.621" y1="60.6141" x2="105.936" y2="56.4112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint15_linear_1312_5122" x1="101.762" y1="62.6994" x2="102.103" y2="58.2071" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint16_linear_1312_5122" x1="97.9074" y1="64.7931" x2="98.2748" y2="60.0116" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint17_linear_1312_5122" x1="94.0439" y1="66.8785" x2="94.4379" y2="61.8075" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint18_linear_1312_5122" x1="90.1842" y1="68.9638" x2="90.6049" y2="63.6034" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint19_linear_1312_5122" x1="86.3182" y1="71.0536" x2="86.7649" y2="65.404" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint20_linear_1312_5122" x1="82.4664" y1="73.1429" x2="82.9396" y2="67.2038" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint21_linear_1312_5122" x1="78.5977" y1="75.2295" x2="79.098" y2="69.0052" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint22_linear_1312_5122" x1="74.7407" y1="77.3181" x2="75.2665" y2="70.8004" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint23_linear_1312_5122" x1="70.8771" y1="79.4073" x2="71.4295" y2="72.6003" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint24_linear_1312_5122" x1="67.0228" y1="81.5011" x2="67.6012" y2="74.4047" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint25_linear_1312_5122" x1="63.1632" y1="83.5864" x2="63.7681" y2="76.2007" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint26_linear_1312_5122" x1="59.2996" y1="85.6717" x2="59.9311" y2="77.9967" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint27_linear_1312_5122" x1="55.766" y1="88.2726" x2="56.4407" y2="79.8858" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint28_linear_1312_5122" x1="53.5718" y1="91.826" x2="54.2082" y2="83.4186" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint29_linear_1312_5122" x1="52.3637" y1="95.9472" x2="52.8737" y2="88.9094" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint30_linear_1312_5122" x1="51.1583" y1="100.074" x2="51.5419" y2="94.4098" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint31_linear_1312_5122" x1="49.9489" y1="104.192" x2="50.2064" y2="99.907" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint32_linear_1312_5122" x1="48.7433" y1="108.317" x2="48.8703" y2="105.404" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint33_linear_1312_5122" x1="47.5365" y1="112.439" x2="47.5209" y2="110.913" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint34_linear_1312_5122" x1="144.115" y1="63.7875" x2="32.0018" y2="82.7194" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint35_linear_1312_5122" x1="51.7518" y1="95.5806" x2="71.7576" y2="122.757" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint36_linear_1312_5122" x1="376.928" y1="288.46" x2="222.043" y2="413.381" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint37_linear_1312_5122" x1="199.328" y1="221.124" x2="199.623" y2="220.633" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint38_linear_1312_5122" x1="203.205" y1="225.842" x2="203.606" y2="224.927" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint39_linear_1312_5122" x1="207.08" y1="230.555" x2="207.589" y2="229.246" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint40_linear_1312_5122" x1="210.955" y1="235.271" x2="211.583" y2="233.566" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint41_linear_1312_5122" x1="214.832" y1="239.989" x2="215.576" y2="237.895" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint42_linear_1312_5122" x1="218.704" y1="244.702" x2="219.56" y2="242.224" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint43_linear_1312_5122" x1="222.579" y1="249.417" x2="223.556" y2="246.547" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint44_linear_1312_5122" x1="226.456" y1="254.136" x2="227.551" y2="250.878" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint45_linear_1312_5122" x1="230.331" y1="258.85" x2="231.543" y2="255.205" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint46_linear_1312_5122" x1="234.206" y1="263.568" x2="235.537" y2="259.538" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint47_linear_1312_5122" x1="238.084" y1="268.282" x2="239.531" y2="263.864" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint48_linear_1312_5122" x1="241.953" y1="272.997" x2="243.518" y2="268.192" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint49_linear_1312_5122" x1="245.83" y1="277.715" x2="247.514" y2="272.524" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint50_linear_1312_5122" x1="249.705" y1="282.433" x2="251.506" y2="276.855" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint51_linear_1312_5122" x1="253.581" y1="287.143" x2="255.499" y2="281.179" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint52_linear_1312_5122" x1="257.458" y1="291.862" x2="259.495" y2="285.511" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint53_linear_1312_5122" x1="261.329" y1="296.58" x2="263.484" y2="289.842" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint54_linear_1312_5122" x1="265.204" y1="301.29" x2="267.477" y2="294.166" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint55_linear_1312_5122" x1="269.081" y1="306.008" x2="271.472" y2="298.498" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint56_linear_1312_5122" x1="272.957" y1="310.727" x2="275.465" y2="302.83" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint57_linear_1312_5122" x1="276.834" y1="315.44" x2="279.457" y2="307.162" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint58_linear_1312_5122" x1="280.709" y1="320.155" x2="283.453" y2="311.486" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint59_linear_1312_5122" x1="284.58" y1="324.873" x2="287.442" y2="315.817" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint60_linear_1312_5122" x1="288.457" y1="329.592" x2="291.438" y2="320.149" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint61_linear_1312_5122" x1="292.333" y1="334.306" x2="295.431" y2="324.477" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint62_linear_1312_5122" x1="296.208" y1="339.024" x2="299.424" y2="328.809" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint63_linear_1312_5122" x1="299.39" y1="344.226" x2="302.924" y2="333.071" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint64_linear_1312_5122" x1="300.353" y1="349.952" x2="303.947" y2="338.791" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint65_linear_1312_5122" x1="299.745" y1="355.894" x2="302.783" y2="346.563" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint66_linear_1312_5122" x1="299.139" y1="361.84" x2="301.618" y2="354.344" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint67_linear_1312_5122" x1="298.531" y1="367.78" x2="300.449" y2="362.126" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint68_linear_1312_5122" x1="297.922" y1="373.726" x2="299.287" y2="369.909" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint69_linear_1312_5122" x1="297.31" y1="379.663" x2="298.131" y2="377.707" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint70_linear_1312_5122" x1="198.464" y1="266.311" x2="332.908" y2="349.548" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <linearGradient id="paint71_linear_1312_5122" x1="300.715" y1="355.745" x2="260.685" y2="380.241" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#BADEF3" />
                        <stop offset="1" stop-color="#53B5EE" />
                    </linearGradient>
                    <clipPath id="clip0_1312_5122">
                        <rect width="135.685" height="107.543" fill="white" transform="translate(25.7617) rotate(13.86)" />
                    </clipPath>
                    <clipPath id="clip1_1312_5122">
                        <rect width="86.3286" height="119.467" fill="white" transform="matrix(-0.926017 -0.377482 -0.377482 0.926017 157.523 32.4609)" />
                    </clipPath>
                    <clipPath id="clip2_1312_5122">
                        <rect width="188.7" height="149.562" fill="white" transform="matrix(-0.989481 -0.144664 -0.144664 0.989481 384.371 246.297)" />
                    </clipPath>
                    <clipPath id="clip3_1312_5122">
                        <rect width="120.059" height="166.144" fill="white" transform="translate(197.637 218.93)" />
                    </clipPath>
                </defs>
            </svg>

            <video autoPlay muted loop playsInline src={emailVideo} className="w-[46.625rem] h-auto object-cover" />
        </div>
    )
}