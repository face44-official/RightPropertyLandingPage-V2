import { TitleBig } from "../components/ui/title";
import { SalesSplitTextSection } from "../components/sales/sales-splittext-section";
import SalesPurposeBuiltCrmSection from "../components/sales/sales-purpose-built-crm";
import TwoColumnTextImageBlock from "../components/ui/two-column-text-image-block";
import OneColumnTitleImageDescription from "../components/ui/one-column-title-image-description";
import trackPerformanceDesktop from "@/assets/v3/sales/track_performance_desktop.webp";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import buyerIntentMedia from "@/assets/v3/sales/buyer-intent.webm";
import { PerspectiveTransform, type Points } from 'react-perspective-transform';
import trackVideo from "@/assets/v3/sales/track.webm";
import salesSyncVideo from "@/assets/v3/sales/sales-sync.webm";
import { useEffect, useRef, useState } from "react";
import SalesHeroSection from "../components/sales/sales-hero-section";
import HeroSubPagesMobileRoad from "../components/hero/hero-sub-pages-mobile-road";
export default function SalesPage() {
    return <main className="overflow-hidden">
        <HeroSubPagesMobileRoad firstMaskTop="2rem" secondMaskTop="3rem" />
        <div id="sales-page" className="relative z-[20] pt-[14.56rem] lg:pt-[9rem] flex flex-col justify-center">
            <TitleBig className="w-[49.75rem] lg:w-full lg:!px-4 mb-[4rem] lg:!mb-[1.875rem] rp-container text-center">Sales Tools Built for Real Estate, Not for Complexity</TitleBig>
            <SalesHeroSection />
            <SalesSplitTextSection />
            <SalesPurposeBuiltCrmSection />
            <TwoColumnTextImageBlock className="pt-[22.5rem] lg:pt-[10rem] pb-[31.25rem] lg:pb-[10rem]" title={<div>Understand Buyer<br className="hidden lg:inline" /> Intent <br className="lg:hidden" />with Every Click.</div>} description="Right Property keeps track of every action during presentations and online visits. From unit views to video watches, Right Property creates a timeline of interest—so you know exactly when and how to follow up." image={<BuyerIntentMedia />} variant="image-right" />
            <OneColumnTitleImageDescription className="pb-[31.25rem] lg:pb-[10rem]" title="Track Performance. Improve Strategy." description={<div className="w-[46.75rem] lg:w-full">Keep track of your team's performance with detailed analytics. Right Property shows you who's engaging, who's not, and what's working—so you can support your reps and close more deals.</div>} image={<TrackPerformanceImproveStrategy />} />
            <TwoColumnTextImageBlock className="" title={<div>Your Sales and <br className="hidden lg:inline" />Marketing, <br className="lg:hidden" />Finally in Sync.</div>} description="Lead behavior on your website reflects instantly in the CRM. Campaign insights turn into qualified conversations. Sales and marketing work together—for real." image={<SalesSyncVideo />} variant="image-right" />
            <ScheduleADemoSection />
        </div>
    </main>
}
const SalesSyncVideo = () => {
    return <div className="relative">
        <svg className="absolute z-[-1] -left-[56.625rem] top-[4.4375rem]" width="1090" height="1228" viewBox="0 0 1090 1228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-84 640.053C7.10527 703.643 315.883 803.953 578 689C895.057 549.952 783.5 112 1089.5 0.999512" stroke="url(#paint0_linear_717_1025)" />
            <path d="M-28.0468 786.758C144.381 839.954 538.663 999.541 642.854 1227" stroke="url(#paint1_linear_717_1025)" />
            <defs>
                <linearGradient id="paint0_linear_717_1025" x1="904" y1="356.5" x2="-14.1529" y2="650.467" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" stop-opacity="0" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint1_linear_717_1025" x1="643" y1="1203" x2="2.17631" y2="737.479" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" stop-opacity="0" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
            </defs>
        </svg>

        <svg className="absolute z-[-1] -left-[53.125rem] -top-[19rem]" width="1441" height="1441" viewBox="0 0 1441 1441" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="720.5" cy="720.5" r="720.5" fill="url(#paint0_radial_1282_2399)" fill-opacity="0.72" />
            <defs>
                <radialGradient id="paint0_radial_1282_2399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.5 720.5) rotate(90) scale(720.5)">
                    <stop stop-color="#C5E6FF" />
                    <stop offset="0.259615" stop-color="#C8E5FF" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

        <video src={salesSyncVideo} className="w-[46.625rem] lg:w-full h-auto" autoPlay muted loop playsInline />
    </div>
}
const TrackPerformanceImproveStrategy = () => {
    const [points, setPoints] = useState<Points>();
    const $containerRef = useRef<HTMLDivElement>(null);
    const [videoWidth, setVideoWidth] = useState(0);
    useEffect(() => {
        const referenceWidth = 1520;
        const referenceHeight = 860;
        const initialPoints = { "topLeft": { "x": 583.111083984375, "y": 48.12498474121094 }, "topRight": { "x": 1341.111083984375, "y": 171.12498474121094 }, "bottomRight": { "x": 1225.111083984375, "y": 717.1249847412109 }, "bottomLeft": { "x": 505.111083984375, "y": 489.12498474121094 } };
        const calculatePoints = () => {
            if ($containerRef.current) {
                const containerWidth = $containerRef.current.offsetWidth;
                const containerHeight = $containerRef.current.offsetHeight;
                const scaleX = (containerWidth / referenceWidth);
                const scaleY = (containerHeight / referenceHeight);
                setVideoWidth(300 * scaleX);
                const newPoints = {
                    "topLeft": { "x": initialPoints.topLeft.x * scaleX, "y": initialPoints.topLeft.y * scaleY },
                    "topRight": { "x": initialPoints.topRight.x * scaleX, "y": initialPoints.topRight.y * scaleY },
                    "bottomRight": { "x": initialPoints.bottomRight.x * scaleX, "y": initialPoints.bottomRight.y * scaleY },
                    "bottomLeft": { "x": initialPoints.bottomLeft.x * scaleX, "y": initialPoints.bottomLeft.y * scaleY }
                }
                setPoints(newPoints);
            }
        }
        window.addEventListener('resize', calculatePoints);
        return () => {
            window.removeEventListener('resize', calculatePoints);
        }
    }, [])

    return <div ref={$containerRef} className="relative">
        <img src={trackPerformanceDesktop} className="w-full h-auto" alt="track performance" />
        <div className="absolute top-0 left-0 w-full h-full">
            <PerspectiveTransform storageKey="example-transform" points={points} onPointsChange={setPoints} editable={false}>
                <video src={trackVideo} className=" h-full" style={{ width: videoWidth }} autoPlay muted loop playsInline />
            </PerspectiveTransform>

        </div>
        <svg className="absolute z-[-1] left-[11.25rem] top-[15.625rem]" width="1423" height="1441" viewBox="0 0 1423 1441" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="720.5" cy="720.5" r="720.5" fill="url(#paint0_radial_1282_2402)" fill-opacity="0.72" />
            <defs>
                <radialGradient id="paint0_radial_1282_2402" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.5 720.5) rotate(90) scale(720.5)">
                    <stop stop-color="#C5E6FF" />
                    <stop offset="0.259615" stop-color="#C8E5FF" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

        <svg className="left-[4.625rem] top-[26.3125rem] absolute z-[-1]" width="1527" height="1483" viewBox="0 0 1527 1483" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M933.239 1C1004.91 4.42753 1193.57 58.1347 1228.88 171.395C1274.22 316.817 1007.71 500.922 856.813 585.629L1.00015 1095" stroke="url(#paint0_linear_1996_6279)" />
            <path d="M1990.63 389.493C1743.23 289.992 809.234 44.4927 1341.23 1481.99" stroke="url(#paint1_linear_1996_6279)" />
            <g clip-path="url(#clip0_1996_6279)">
                <path d="M1408.32 396.17L1377.54 398.47C1378.59 398.04 1379.64 397.63 1380.68 397.24L1407.77 395.21L1408.32 396.17Z" fill="url(#paint2_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1413.6 405.37L1355.3 409.73C1355.92 409.33 1356.55 408.96 1357.17 408.59L1413.05 404.41L1413.6 405.37Z" fill="url(#paint3_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1418.89 414.57L1340.11 420.46C1340.57 420.08 1341.03 419.71 1341.5 419.36L1418.34 413.61L1418.89 414.57Z" fill="url(#paint4_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1424.17 423.77L1328.45 430.93C1328.81 430.56 1329.18 430.2 1329.55 429.84L1423.62 422.81L1424.17 423.77Z" fill="url(#paint5_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1421.33 432.58L1420.76 433.62L1319.08 441.23L1319.98 440.15L1421.33 432.58Z" fill="url(#paint6_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1415.97 442.58L1415.41 443.62L1311.42 451.4C1311.65 451.04 1311.9 450.69 1312.15 450.34L1415.97 442.58Z" fill="url(#paint7_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1410.61 452.57L1410.05 453.62L1305.06 461.46C1305.26 461.11 1305.46 460.77 1305.67 460.42L1410.61 452.57Z" fill="url(#paint8_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1405.25 462.57L1404.69 463.61L1299.78 471.45C1299.95 471.1 1300.12 470.75 1300.3 470.41L1405.25 462.57Z" fill="url(#paint9_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1399.9 472.56L1399.34 473.61L1295.43 481.38C1295.56 481.03 1295.7 480.68 1295.84 480.34L1399.9 472.56Z" fill="url(#paint10_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1394.54 482.56L1393.98 483.6L1305.41 490.23L1300.88 489.56L1394.54 482.56Z" fill="url(#paint11_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1389.18 492.56L1388.62 493.6L1348.64 496.59L1344.11 495.92L1389.18 492.56Z" fill="url(#paint12_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1299.79 509.84L1283 511.1C1283.21 510.74 1283.42 510.39 1283.64 510.04L1296.62 509.07L1299.79 509.84Z" fill="url(#paint13_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1322.42 517.74L1277.62 521.09C1277.78 520.74 1277.95 520.39 1278.12 520.05L1322.09 516.77L1322.42 517.74Z" fill="url(#paint14_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1325.51 527.1L1273.36 531C1273.48 530.66 1273.62 530.31 1273.76 529.97L1325.19 526.12L1325.51 527.1Z" fill="url(#paint15_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1328.61 536.47L1270.03 540.85C1270.13 540.51 1270.23 540.16 1270.34 539.82L1328.29 535.49L1328.61 536.47Z" fill="url(#paint16_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1331.71 545.83L1267.54 550.63C1267.61 550.29 1267.68 549.95 1267.76 549.61L1331.39 544.85L1331.71 545.83Z" fill="url(#paint17_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1334.81 555.2L1265.8 560.36C1265.85 560.02 1265.9 559.68 1265.95 559.34L1334.49 554.22L1334.81 555.2Z" fill="url(#paint18_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1337.91 564.56L1264.81 570.02C1264.81 569.68 1264.85 569.35 1264.88 569.02L1337.58 563.58L1337.91 564.56Z" fill="url(#paint19_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1341 573.92L1264.5 579.64V578.64L1340.68 572.95L1341 573.92Z" fill="url(#paint20_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1344.1 583.29L1264.9 589.21C1264.87 588.88 1264.85 588.54 1264.82 588.21L1343.78 582.31L1344.1 583.29Z" fill="url(#paint21_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1343.94 591.89L1342.53 593L1265.99 598.73C1265.93 598.4 1265.88 598.06 1265.84 597.73L1343.94 591.89Z" fill="url(#paint22_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1330.42 602.5L1329.01 603.61L1267.76 608.19C1267.68 607.86 1267.61 607.53 1267.54 607.2L1330.42 602.5Z" fill="url(#paint23_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1316.9 613.109L1315.48 614.219L1270.24 617.599C1270.14 617.269 1270.04 616.939 1269.95 616.619L1316.9 613.109Z" fill="url(#paint24_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1303.38 623.721L1301.98 624.821L1273.44 626.951C1273.31 626.631 1273.19 626.301 1273.07 625.981L1303.38 623.721Z" fill="url(#paint25_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1289.87 634.32L1288.45 635.43L1277.37 636.25C1277.21 635.93 1277.07 635.61 1276.92 635.29L1289.87 634.32Z" fill="url(#paint26_linear_1996_6279)" fill-opacity="0.3" />
                <path d="M1425.14 425.46L1421.33 432.58L1420.76 433.62L1415.97 442.58L1415.41 443.62L1410.61 452.57L1410.05 453.62L1405.25 462.57L1404.69 463.61L1399.9 472.56L1399.34 473.61L1394.54 482.56L1393.98 483.6L1389.18 492.56L1388.62 493.6L1384.21 501.83L1348.64 496.59L1344.11 495.92L1305.41 490.23L1300.88 489.56L1292.81 488.37C1293.64 485.99 1294.51 483.66 1295.43 481.38C1295.56 481.03 1295.7 480.68 1295.84 480.34C1297.08 477.29 1298.4 474.32 1299.78 471.45C1299.95 471.1 1300.12 470.75 1300.3 470.41C1301.8 467.33 1303.4 464.34 1305.06 461.46C1305.26 461.11 1305.46 460.77 1305.67 460.42C1307.5 457.3 1309.41 454.29 1311.42 451.4C1311.65 451.04 1311.9 450.69 1312.15 450.34C1314.37 447.16 1316.69 444.13 1319.08 441.23L1319.98 440.15C1322.71 436.9 1325.54 433.83 1328.45 430.93C1328.81 430.56 1329.18 430.2 1329.55 429.84C1332.97 426.48 1336.5 423.36 1340.11 420.46C1340.57 420.08 1341.03 419.71 1341.5 419.36C1346.01 415.8 1350.63 412.6 1355.3 409.73C1355.92 409.33 1356.55 408.96 1357.17 408.59C1363.94 404.54 1370.79 401.19 1377.54 398.47C1378.59 398.04 1379.64 397.63 1380.68 397.24C1389.15 394.05 1397.41 391.85 1405.09 390.55L1407.77 395.21L1408.32 396.17L1413.05 404.41L1413.6 405.37L1418.34 413.61L1418.89 414.57L1423.62 422.81L1424.17 423.77L1425.14 425.46Z" fill="url(#paint27_linear_1996_6279)" fill-opacity="0.1" stroke="#53B5EE" />
                <path d="M1346.33 590.02L1343.94 591.89L1342.53 593L1330.42 602.5L1329.01 603.61L1316.9 613.11L1315.48 614.22L1303.38 623.72L1301.98 624.82L1289.87 634.32L1288.45 635.43L1280.15 641.94C1279.17 640.04 1278.24 638.15 1277.37 636.25C1277.21 635.93 1277.07 635.61 1276.92 635.29C1275.65 632.5 1274.49 629.72 1273.44 626.95C1273.31 626.63 1273.19 626.3 1273.07 625.98C1272.02 623.17 1271.08 620.38 1270.24 617.6C1270.14 617.27 1270.04 616.94 1269.95 616.62C1269.12 613.79 1268.39 610.98 1267.76 608.19C1267.68 607.86 1267.61 607.53 1267.54 607.2C1266.92 604.36 1266.4 601.53 1265.99 598.73C1265.93 598.4 1265.88 598.06 1265.84 597.73C1265.43 594.87 1265.11 592.02 1264.9 589.21C1264.87 588.88 1264.85 588.54 1264.82 588.21C1264.62 585.32 1264.52 582.47 1264.5 579.64V578.64C1264.5 575.73 1264.61 572.85 1264.81 570.02C1264.81 569.68 1264.85 569.35 1264.88 569.02C1265.09 566.09 1265.4 563.2 1265.8 560.36C1265.85 560.02 1265.9 559.68 1265.95 559.34C1266.39 556.38 1266.92 553.47 1267.54 550.63C1267.61 550.29 1267.68 549.95 1267.76 549.61C1268.43 546.62 1269.19 543.7 1270.03 540.85C1270.13 540.51 1270.23 540.16 1270.34 539.82C1271.26 536.79 1272.27 533.85 1273.36 531C1273.48 530.66 1273.62 530.31 1273.76 529.97C1274.96 526.89 1276.25 523.92 1277.62 521.09C1277.78 520.74 1277.95 520.39 1278.12 520.05C1279.67 516.9 1281.3 513.91 1283 511.1C1283.21 510.74 1283.42 510.39 1283.64 510.04C1284.39 508.82 1285.16 507.63 1285.93 506.48L1296.62 509.07L1299.79 509.84L1321.55 515.12L1322.09 516.77L1322.42 517.74L1325.19 526.12L1325.51 527.1L1328.29 535.49L1328.61 536.47L1331.39 544.85L1331.71 545.83L1334.49 554.22L1334.81 555.2L1337.58 563.58L1337.91 564.56L1340.68 572.95L1341 573.92L1343.78 582.31L1344.1 583.29L1346.33 590.02Z" fill="url(#paint28_linear_1996_6279)" fill-opacity="0.1" stroke="#53B5EE" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_1996_6279" x1="994.132" y1="170.667" x2="-82.5832" y2="655.922" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" />
                    <stop offset="1" stop-color="#53B5EE" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_1996_6279" x1="1205.5" y1="1028" x2="1054.03" y2="389.379" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" stop-opacity="0" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint2_linear_1996_6279" x1="1377.83" y1="397.322" x2="1393.05" y2="375.906" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint3_linear_1996_6279" x1="1355.85" y1="407.857" x2="1379.28" y2="369.599" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint4_linear_1996_6279" x1="1340.85" y1="418.048" x2="1370.33" y2="367.52" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint5_linear_1996_6279" x1="1329.35" y1="428.07" x2="1363.87" y2="367.432" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint6_linear_1996_6279" x1="1320.04" y1="438.184" x2="1356.76" y2="373.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint7_linear_1996_6279" x1="1312.4" y1="448.294" x2="1349.79" y2="382.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint8_linear_1996_6279" x1="1306.05" y1="458.33" x2="1343.71" y2="391.709" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint9_linear_1996_6279" x1="1300.77" y1="468.323" x2="1338.38" y2="401.766" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint10_linear_1996_6279" x1="1296.41" y1="478.274" x2="1333.82" y2="412.254" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint11_linear_1996_6279" x1="1301.76" y1="487.529" x2="1333.77" y2="429.28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint12_linear_1996_6279" x1="1344.53" y1="495.171" x2="1362.11" y2="465.872" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint13_linear_1996_6279" x1="1283.16" y1="510.385" x2="1292.98" y2="498.281" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint14_linear_1996_6279" x1="1278.04" y1="519.568" x2="1297.52" y2="489.46" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint15_linear_1996_6279" x1="1273.85" y1="529.282" x2="1295.58" y2="494.675" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint16_linear_1996_6279" x1="1270.58" y1="538.963" x2="1294.21" y2="500.475" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint17_linear_1996_6279" x1="1268.14" y1="548.594" x2="1293.44" y2="506.736" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint18_linear_1996_6279" x1="1266.45" y1="558.198" x2="1293.17" y2="513.441" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint19_linear_1996_6279" x1="1265.5" y1="567.752" x2="1293.39" y2="520.567" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint20_linear_1996_6279" x1="1265.22" y1="577.284" x2="1294.09" y2="528.08" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint21_linear_1996_6279" x1="1265.57" y1="586.78" x2="1295.28" y2="535.907" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint22_linear_1996_6279" x1="1266.57" y1="596.321" x2="1296.12" y2="546.052" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint23_linear_1996_6279" x1="1268.13" y1="606.186" x2="1293.09" y2="565.082" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint24_linear_1996_6279" x1="1270.39" y1="616.018" x2="1290.57" y2="584.573" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint25_linear_1996_6279" x1="1273.36" y1="625.813" x2="1288.47" y2="604.682" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint26_linear_1996_6279" x1="1277.04" y1="635.571" x2="1286.58" y2="626.03" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint27_linear_1996_6279" x1="1293.48" y1="422.367" x2="1394.75" y2="525.322" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint28_linear_1996_6279" x1="1264.91" y1="545.211" x2="1365.45" y2="597.131" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <clipPath id="clip0_1996_6279">
                    <rect width="161.71" height="252.71" fill="white" transform="translate(1264 390)" />
                </clipPath>
            </defs>
        </svg>


    </div>
}

const BuyerIntentMedia = () => {
    return <div className="relative">
        <svg className="absolute z-[-1] -left-[49.375rem] -top-[26.4372rem]" width="1441" height="1441" viewBox="0 0 1441 1441" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="720.5" cy="720.5" r="720.5" fill="url(#paint0_radial_1282_2434)" fill-opacity="0.72" />
            <defs>
                <radialGradient id="paint0_radial_1282_2434" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720.5 720.5) rotate(90) scale(720.5)">
                    <stop stop-color="#C5E6FF" />
                    <stop offset="0.259615" stop-color="#C8E5FF" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

        <svg className="absolute -left-[56.25rem] -top-[12.5rem] z-[-1]" width="1680" height="1491" viewBox="0 0 1680 1491" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1080.85 548.867L-44 1231.06" stroke="url(#paint0_linear_1993_6278)" />
            <path d="M1188.54 607.867C1048.59 710.707 552.371 1011.7 352 1234.79" stroke="url(#paint1_linear_1993_6278)" />
            <path d="M1703.25 0C1703.25 427.386 1087.62 694.036 1087.62 1020.64C1087.62 1396.43 1601.2 1490.14 1601.2 1490.14" stroke="url(#paint2_linear_1993_6278)" />
            <defs>
                <linearGradient id="paint0_linear_1993_6278" x1="518.423" y1="548.867" x2="518.423" y2="1231.06" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" />
                    <stop offset="0.596154" stop-color="#53B5EE" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_1993_6278" x1="770.269" y1="607.867" x2="770.269" y2="1234.79" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" />
                    <stop offset="0.596154" stop-color="#53B5EE" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_1993_6278" x1="1368" y1="143.5" x2="1345.5" y2="1599.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#53B5EE" />
                    <stop offset="1" stop-color="#53B5EE" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

        <svg className="absolute left-[5rem] -top-[7.5rem] lg:w-[5.25rem] lg:left-[2rem] lg:-top-[3rem] lg:h-auto" width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1282_4531)">
                <path d="M78.5013 156.49C121.552 156.49 156.452 121.572 156.452 78.4988C156.452 35.4256 121.552 0.507812 78.5013 0.507812C35.4504 0.507812 0.550781 35.4256 0.550781 78.4988C0.550781 121.572 35.4504 156.49 78.5013 156.49Z" fill="white" />
                <path d="M78.5013 156.49C121.552 156.49 156.452 121.572 156.452 78.4988C156.452 35.4256 121.552 0.507812 78.5013 0.507812C35.4504 0.507812 0.550781 35.4256 0.550781 78.4988C0.550781 121.572 35.4504 156.49 78.5013 156.49Z" fill="url(#paint0_linear_1282_4531)" fill-opacity="0.1" />
                <path d="M78.5013 156.49C121.552 156.49 156.452 121.572 156.452 78.4988C156.452 35.4256 121.552 0.507812 78.5013 0.507812C35.4504 0.507812 0.550781 35.4256 0.550781 78.4988C0.550781 121.572 35.4504 156.49 78.5013 156.49Z" stroke="#53B5EE" />
                <path d="M143.468 35.3867C146.724 56.2766 127.341 83.295 78.5011 83.295C29.6612 83.295 10.2168 56.3682 13.4728 35.4783" stroke="#53B5EE" />
                <path d="M0.582031 80.9048C0.582031 97.2849 34.251 126.889 78.502 126.889C122.743 126.889 156.422 97.2238 156.422 80.8438" stroke="#53B5EE" />
                <path d="M38.2734 11.6742C76.1956 7.07276 130.937 38.2549 144.348 120.257" stroke="#53B5EE" />
                <path d="M118.73 11.6764C80.8083 7.08515 26.0669 38.2571 12.6562 120.259" stroke="#53B5EE" />
                <path d="M0.914062 70.8347C2.45048 52.8258 34.227 19.0273 78.4678 19.0273" stroke="#53B5EE" />
                <path d="M156.022 70.8347C154.486 52.8258 122.71 19.0273 78.4688 19.0273" stroke="#53B5EE" />
                <path d="M78.5 0.507812V156.49" stroke="#53B5EE" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_1282_4531" x1="1.3393" y1="45.106" x2="141.571" y2="164.931" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <clipPath id="clip0_1282_4531">
                    <rect width="157" height="157" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <svg className="absolute left-[33.75rem] -bottom-[6.5625rem]" width="123" height="210" viewBox="0 0 123 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1282_4455)">
                <path d="M122.118 155.601V41.2367L88.3397 21.7344L54.5508 41.2367V155.601L88.3397 175.104L122.118 155.601Z" fill="url(#paint0_linear_1282_4455)" fill-opacity="0.1" />
                <path d="M122.118 155.601V41.2367L88.3397 21.7344L54.5508 41.2367V155.601L88.3397 175.104L122.118 155.601Z" fill="#EFF6FF" />
                <path d="M122.118 155.601V41.2367L88.3397 21.7344L54.5508 41.2367V155.601L88.3397 175.104L122.118 155.601Z" stroke="#53B5EE" stroke-width="0.53504" />
                <path d="M88.3388 60.7418L54.8201 41.3953C54.6954 41.3225 54.6954 41.1459 54.8201 41.0836L88.2453 21.789C88.2972 21.7578 88.37 21.7578 88.4323 21.789L121.847 41.0836C121.972 41.1563 121.972 41.3329 121.847 41.3953L88.3388 60.7418Z" fill="url(#paint1_linear_1282_4455)" fill-opacity="0.1" />
                <path d="M88.3388 60.7418L54.8201 41.3953C54.6954 41.3225 54.6954 41.1459 54.8201 41.0836L88.2453 21.789C88.2972 21.7578 88.37 21.7578 88.4323 21.789L121.847 41.0836C121.972 41.1563 121.972 41.3329 121.847 41.3953L88.3388 60.7418Z" fill="#EFF6FF" />
                <path d="M88.3388 60.7418L54.8201 41.3953C54.6954 41.3225 54.6954 41.1459 54.8201 41.0836L88.2453 21.789C88.2972 21.7578 88.37 21.7578 88.4323 21.789L121.847 41.0836C121.972 41.1563 121.972 41.3329 121.847 41.3953L88.3388 60.7418Z" stroke="#53B5EE" stroke-width="0.53504" />
                <g opacity="0.9">
                    <path d="M121.838 41.5334V43.0088L120.727 41.9075L121.651 41.3672L121.838 41.5334Z" fill="url(#paint2_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.863 52.9304L114.496 45.5637L115.431 45.0234L121.852 51.455L121.863 52.9304Z" fill="url(#paint3_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.887 62.1148L108.723 48.9504L109.658 48.4102L121.877 60.6394L121.887 62.1148Z" fill="url(#paint4_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.915 70.5648V72.0402L102.496 52.6106L103.431 52.0703L121.915 70.5648Z" fill="url(#paint5_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.928 80.476V81.9514L96.2539 56.2669L97.189 55.7266L121.928 80.476Z" fill="url(#paint6_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.956 91.8625L90.0273 59.9231L90.9521 59.3828L121.946 90.3975L121.956 91.8625Z" fill="url(#paint7_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M121.983 101.775L88.3398 68.1109V66.6562L121.973 100.32L121.983 101.775Z" fill="url(#paint8_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M122.004 110.224V111.699L88.3398 78.0041V76.5391L122.004 110.224Z" fill="url(#paint9_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M122.025 120.146V121.611L88.3398 87.9051V86.4297L122.025 120.146Z" fill="url(#paint10_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M122.056 131.533L88.3398 97.7957V96.3203L122.046 130.057L122.056 131.533Z" fill="url(#paint11_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M122.077 141.456L88.3398 107.698V106.223L122.066 139.97L122.077 141.456Z" fill="url(#paint12_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M122.108 149.892V151.367L88.3398 117.589V116.113L122.108 149.892Z" fill="url(#paint13_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M119.458 157.147L118.523 157.687L88.3398 127.483V126.008L119.458 157.147Z" fill="url(#paint14_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M113.65 160.499L112.715 161.04L88.3398 136.643V135.168L113.65 160.499Z" fill="url(#paint15_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M107.375 164.126L106.45 164.656L88.3398 146.525V145.07L107.375 164.126Z" fill="url(#paint16_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M101.109 167.741L100.174 168.281L88.3398 156.426V154.961L101.109 167.741Z" fill="url(#paint17_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M94.8441 171.358L93.909 171.899L88.3398 166.319V164.844L94.8441 171.358Z" fill="url(#paint18_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M88.5684 174.984L88.3398 175.119V174.734L88.5684 174.984Z" fill="url(#paint19_linear_1282_4455)" fill-opacity="0.3" />
                </g>
                <path d="M88.3281 60.9141V175.102" stroke="#53B5EE" stroke-width="0.452585" />
            </g>
            <g clip-path="url(#clip1_1282_4455)">
                <path d="M68.0869 189.891V75.5258L34.3084 56.0234L0.519531 75.5258V189.891L34.3084 209.393L68.0869 189.891Z" fill="url(#paint20_linear_1282_4455)" fill-opacity="0.1" />
                <path d="M68.0869 189.891V75.5258L34.3084 56.0234L0.519531 75.5258V189.891L34.3084 209.393L68.0869 189.891Z" fill="#EFF6FF" />
                <path d="M68.0869 189.891V75.5258L34.3084 56.0234L0.519531 75.5258V189.891L34.3084 209.393L68.0869 189.891Z" stroke="#53B5EE" stroke-width="0.53504" />
                <path d="M34.3154 95.027L0.796637 75.6804C0.671954 75.6077 0.671954 75.4311 0.796637 75.3687L34.2219 56.0742C34.2738 56.043 34.3465 56.043 34.4089 56.0742L67.8237 75.3687C67.9484 75.4415 67.9484 75.6181 67.8237 75.6804L34.3154 95.027Z" fill="url(#paint21_linear_1282_4455)" fill-opacity="0.1" />
                <path d="M34.3154 95.027L0.796637 75.6804C0.671954 75.6077 0.671954 75.4311 0.796637 75.3687L34.2219 56.0742C34.2738 56.043 34.3465 56.043 34.4089 56.0742L67.8237 75.3687C67.9484 75.4415 67.9484 75.6181 67.8237 75.6804L34.3154 95.027Z" fill="#EFF6FF" />
                <path d="M34.3154 95.027L0.796637 75.6804C0.671954 75.6077 0.671954 75.4311 0.796637 75.3687L34.2219 56.0742C34.2738 56.043 34.3465 56.043 34.4089 56.0742L67.8237 75.3687C67.9484 75.4415 67.9484 75.6181 67.8237 75.6804L34.3154 95.027Z" stroke="#53B5EE" stroke-width="0.53504" />
                <g opacity="0.9">
                    <path d="M67.8188 75.8108V77.2862L66.707 76.1848L67.6318 75.6445L67.8188 75.8108Z" fill="url(#paint22_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.8393 87.2116L60.4727 79.845L61.4078 79.3047L67.8289 85.7362L67.8393 87.2116Z" fill="url(#paint23_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.8597 96.3961L54.6953 83.2317L55.6304 82.6914L67.8493 94.9207L67.8597 96.3961Z" fill="url(#paint24_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.8763 104.846V106.321L48.457 86.8919L49.3921 86.3516L67.8763 104.846Z" fill="url(#paint25_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.9046 114.757V116.233L42.2305 90.5481L43.1656 90.0078L67.9046 114.757Z" fill="url(#paint26_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.929 126.144L36 94.2044L36.9247 93.6641L67.9186 124.679L67.929 126.144Z" fill="url(#paint27_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.952 136.056L34.3086 102.392V100.938L67.9416 134.602L67.952 136.056Z" fill="url(#paint28_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.9728 144.501V145.977L34.3086 112.281V110.816L67.9728 144.501Z" fill="url(#paint29_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M67.9936 154.423V155.888L34.3086 122.182V120.707L67.9936 154.423Z" fill="url(#paint30_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M68.0247 165.814L34.3086 132.077V130.602L68.0143 164.338L68.0247 165.814Z" fill="url(#paint31_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M68.0455 175.737L34.3086 141.979V140.504L68.0351 174.251L68.0455 175.737Z" fill="url(#paint32_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M68.0767 184.169V185.645L34.3086 151.866V150.391L68.0767 184.169Z" fill="url(#paint33_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M65.4272 191.421L64.4921 191.961L34.3086 161.757V160.281L65.4272 191.421Z" fill="url(#paint34_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M59.6191 194.78L58.684 195.321L34.3086 170.925V169.449L59.6191 194.78Z" fill="url(#paint35_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M53.3434 198.407L52.4187 198.937L34.3086 180.806V179.352L53.3434 198.407Z" fill="url(#paint36_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M47.0781 202.026L46.143 202.566L34.3086 190.711V189.246L47.0781 202.026Z" fill="url(#paint37_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M40.8128 205.64L39.8777 206.18L34.3086 200.6V199.125L40.8128 205.64Z" fill="url(#paint38_linear_1282_4455)" fill-opacity="0.3" />
                    <path d="M34.5372 209.265L34.3086 209.4V209.016L34.5372 209.265Z" fill="url(#paint39_linear_1282_4455)" fill-opacity="0.3" />
                </g>
                <path d="M34.3047 95.2031V209.391" stroke="#53B5EE" stroke-width="0.452585" />
            </g>
            <g clip-path="url(#clip2_1282_4455)">
                <path d="M82.8561 196.254H80.1562V206.042H82.8561V196.254Z" fill="#955441" />
                <path d="M78.3834 178.92L81.6374 169.711L77.2734 175.951L78.3834 178.92Z" fill="#77D86C" />
                <path d="M78.1095 178.184L74.9375 182.648L76.5227 187.403L79.1878 179.299L78.3842 178.919L78.1095 178.184Z" fill="#70C663" />
                <path d="M75.9938 185.824L72.293 191.286L74.1434 198.058L77.4622 188.394L77.2711 187.404L75.9938 185.824Z" fill="#66BA58" />
                <path d="M81.6369 169.711L78.3828 178.92L83.6657 179.452L81.6369 169.711Z" fill="#70C663" />
                <path d="M78.3819 178.922L83.6648 179.454L84.8521 188.206L77.2719 187.406L76.7383 186.747L78.3819 178.922Z" fill="#69B75C" />
                <path d="M76.7347 186.746L74.1406 198.059L86.17 199.363L84.8485 188.205L76.7347 186.746Z" fill="#61A553" />
                <path d="M81.6406 169.711L86.1972 176.808L83.6695 179.452L81.6406 169.711Z" fill="#5A964B" />
                <path d="M85.085 177.961L88.7575 183.862L84.8514 188.2L83.6641 179.448L85.085 177.961Z" fill="#518442" />
                <path d="M87.4551 185.312L92.1744 192.712L86.1731 199.362L84.8516 188.204L87.4551 185.312Z" fill="#477239" />
            </g>
            <path d="M85.6689 14.0908L85.5518 14.0117L76.6992 7.94043L91.6152 0.356445L106.547 27.6904L98.1943 22.4395L97.7832 22.1816V44.3135L85.6689 36.4893V14.0908Z" fill="#F7F2EE" stroke="#FBC79D" stroke-width="0.536035" />
            <path d="M83.0283 14.0908L82.9111 14.0117L74.0586 7.94043L88.9746 0.356445L103.906 27.6904L95.5537 22.4395L95.1426 22.1816V44.3135L83.0283 36.4893V14.0908Z" fill="#F7F2EE" stroke="#FBC79D" stroke-width="0.536035" />
            <defs>
                <linearGradient id="paint0_linear_1282_4455" x1="54.8925" y1="65.5856" x2="146.981" y2="100.269" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint1_linear_1282_4455" x1="55.0665" y1="32.9096" x2="88.0266" y2="81.5029" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint2_linear_1282_4455" x1="120.732" y1="41.8366" x2="122.028" y2="42.5868" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint3_linear_1282_4455" x1="114.533" y1="47.2842" x2="121.548" y2="52.8711" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint4_linear_1282_4455" x1="108.789" y1="52.3286" x2="121.025" y2="62.3765" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint5_linear_1282_4455" x1="102.594" y1="57.7801" x2="120.465" y2="72.6365" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint6_linear_1282_4455" x1="96.3838" y1="63.2247" x2="119.88" y2="82.8901" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint7_linear_1282_4455" x1="90.1888" y1="68.6694" x2="119.31" y2="93.1433" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint8_linear_1282_4455" x1="88.51" y1="76.6974" x2="119.847" y2="102.363" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint9_linear_1282_4455" x1="88.5101" y1="86.5921" x2="119.881" y2="112.27" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint10_linear_1282_4455" x1="88.5102" y1="96.4886" x2="119.9" y2="122.183" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint11_linear_1282_4455" x1="88.5104" y1="106.388" x2="119.928" y2="132.107" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint12_linear_1282_4455" x1="88.5105" y1="116.296" x2="119.947" y2="142.031" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint13_linear_1282_4455" x1="88.5106" y1="126.193" x2="119.968" y2="151.953" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint14_linear_1282_4455" x1="88.4972" y1="135.066" x2="116.897" y2="158.915" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint15_linear_1282_4455" x1="88.4679" y1="142.565" x2="111.644" y2="161.95" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint16_linear_1282_4455" x1="88.4361" y1="150.67" x2="105.961" y2="165.231" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint17_linear_1282_4455" x1="88.4044" y1="158.769" x2="100.292" y2="168.512" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint18_linear_1282_4455" x1="88.3727" y1="166.861" x2="94.6162" y2="171.782" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint19_linear_1282_4455" x1="88.341" y1="174.844" x2="88.6237" y2="174.988" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint20_linear_1282_4455" x1="0.861273" y1="99.8746" x2="92.9493" y2="134.559" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint21_linear_1282_4455" x1="1.04308" y1="67.1948" x2="34.0032" y2="115.788" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint22_linear_1282_4455" x1="66.7127" y1="76.1139" x2="68.0085" y2="76.8641" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint23_linear_1282_4455" x1="60.5099" y1="81.5654" x2="67.5242" y2="87.1523" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint24_linear_1282_4455" x1="54.7619" y1="86.6098" x2="66.9973" y2="96.6578" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint25_linear_1282_4455" x1="48.5552" y1="92.0613" x2="66.4255" y2="106.918" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint26_linear_1282_4455" x1="42.3603" y1="97.506" x2="65.8562" y2="117.171" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint27_linear_1282_4455" x1="36.1615" y1="102.951" x2="65.2823" y2="127.425" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint28_linear_1282_4455" x1="34.4788" y1="110.979" x2="65.816" y2="136.644" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint29_linear_1282_4455" x1="34.4789" y1="120.869" x2="65.8497" y2="146.548" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint30_linear_1282_4455" x1="34.479" y1="130.766" x2="65.8685" y2="156.46" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint31_linear_1282_4455" x1="34.4791" y1="140.669" x2="65.8967" y2="166.388" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint32_linear_1282_4455" x1="34.4792" y1="150.578" x2="65.9156" y2="176.312" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint33_linear_1282_4455" x1="34.4794" y1="160.47" x2="65.9363" y2="186.23" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint34_linear_1282_4455" x1="34.466" y1="169.339" x2="62.8657" y2="193.189" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint35_linear_1282_4455" x1="34.4366" y1="176.846" x2="57.6131" y2="196.231" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint36_linear_1282_4455" x1="34.4049" y1="184.951" x2="51.9293" y2="199.512" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint37_linear_1282_4455" x1="34.3732" y1="193.055" x2="46.2607" y2="202.797" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint38_linear_1282_4455" x1="34.3415" y1="201.142" x2="40.585" y2="206.063" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <linearGradient id="paint39_linear_1282_4455" x1="34.3097" y1="209.126" x2="34.5924" y2="209.269" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BADEF3" />
                    <stop offset="1" stop-color="#53B5EE" />
                </linearGradient>
                <clipPath id="clip0_1282_4455">
                    <rect width="68.6064" height="154.575" fill="white" transform="translate(54.0352 21.1328)" />
                </clipPath>
                <clipPath id="clip1_1282_4455">
                    <rect width="68.6064" height="154.575" fill="white" transform="translate(0 55.4219)" />
                </clipPath>
                <clipPath id="clip2_1282_4455">
                    <rect width="19.8811" height="37.6695" fill="white" transform="translate(72.2969 169.711)" />
                </clipPath>
            </defs>
        </svg>

        <video src={buyerIntentMedia} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
    </div>
}