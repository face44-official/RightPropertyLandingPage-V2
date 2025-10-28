import purpleCheck from "@/assets/v3/purple_check.svg";
import immersiveMobile from '@/assets/v3/experience/immersive_mobile.webp';
import desktopSpaceIllustration from '@/assets/v3/experience/presentation_space_illustration.svg';
export default function ExperienceImmersiveSection() {
    const items = [
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for 3D site plans feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "3D site plans & navigation",
            description: "Explore buildings, units, and layouts in real time with interactive controls.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for virtual tours feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Virtual tours & walkthroughs",
            description: "Guide buyers through spaces as if they’re already there—visually rich and intuitive.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for high impact setup feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "High impact, higher setup",
            description: "Takes more time to build, but creates your most unforgettable buyer experience.",
        }
    ]

    return (
        <section id="experience-immersive" className="bg-black">
            <div className="rp-container  lg:h-auto!">
                <div className="flex lg:flex-col justify-end pr-[10rem] pt-[10rem] pb-[16.4375rem] lg:p-4 lg:pb-[7.5rem] relative z-[10] max-w-[100vw] overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[62.5rem] h-auto lg:hidden z-[-1]">
                       <img src={desktopSpaceIllustration} className="w-full h-full" alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[62.5rem] h-auto hidden lg:block z-[-1]">
                        <svg width="375" height="520" viewBox="0 0 375 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1336_7545)">
                                <g clipPath="url(#clip1_1336_7545)">
                                    <path d="M296.788 293.712V310.487L191.216 371.374L85.6084 310.37V293.712L191.611 243.862L296.788 293.712Z" fill="url(#paint0_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                    <path d="M190.935 354.855L190.951 371.224L85.6084 310.372V294.004L190.935 354.855Z" fill="url(#paint1_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                    <path d="M296.774 310.696L191.468 371.429V354.855L296.791 294.004L296.774 310.696Z" fill="url(#paint2_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                    <path d="M208.356 275.436C211.448 275.367 214.439 275.402 217.014 275.657C219.515 275.905 221.593 276.36 222.99 277.107V294.228C222.99 299.165 219.497 303.688 213.735 306.99C207.981 310.288 200.015 312.337 191.2 312.337C182.386 312.337 174.419 310.288 168.665 306.99C162.904 303.688 159.409 299.166 159.409 294.228V277.145C160.595 276.794 162.706 276.547 165.34 276.379C168.102 276.203 171.407 276.115 174.751 276.076C181.441 275.999 188.263 276.118 191.2 276.118C193.405 276.118 196.152 275.982 199.114 275.828C202.08 275.674 205.265 275.504 208.356 275.436Z" fill="url(#paint3_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                    <path d="M191.2 258.788C200.014 258.788 207.98 260.845 213.734 264.156C219.495 267.472 222.99 272.012 222.99 276.972C222.99 281.931 219.495 286.472 213.734 289.788C207.98 293.1 200.014 295.156 191.2 295.156C182.386 295.156 174.419 293.1 168.665 289.788C162.904 286.472 159.409 281.931 159.409 276.972C159.409 272.012 162.904 267.472 168.665 264.156C174.419 260.845 182.386 258.788 191.2 258.788Z" fill="url(#paint4_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                </g>
                                <g clipPath="url(#clip2_1336_7545)">
                                    <path d="M140.191 128.003V191.994L193.54 221.878L246.733 192.297V128.003L193.462 98.8203L140.191 128.003Z" fill="#2B1615" />
                                    <path d="M140.191 128.003V191.994L193.54 221.878L246.733 192.297V128.003L193.462 98.8203L140.191 128.003Z" fill="url(#paint5_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M140.191 128.003V191.994L193.54 221.878L246.733 192.297V128.003L193.462 98.8203L140.191 128.003Z" stroke="url(#paint6_linear_1336_7545)" strokeWidth="0.630268" />
                                    <path d="M140.191 128.008L193.54 157.589V221.884L140.191 191.999V128.008Z" fill="#2B1615" />
                                    <path d="M140.191 128.008L193.54 157.589V221.884L140.191 191.999V128.008Z" fill="url(#paint7_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M140.191 128.008L193.54 157.589V221.884L140.191 191.999V128.008Z" stroke="url(#paint8_linear_1336_7545)" strokeWidth="0.630268" />
                                    <path d="M246.732 128.008L193.539 157.589V221.884L246.732 192.302V128.008Z" fill="#2B1615" />
                                    <path d="M246.732 128.008L193.539 157.589V221.884L246.732 192.302V128.008Z" fill="url(#paint9_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M246.732 128.008L193.539 157.589V221.884L246.732 192.302V128.008Z" stroke="url(#paint10_linear_1336_7545)" strokeWidth="0.630268" />
                                    <path d="M193.543 66.125L154.641 86.6513V128.007L193.465 149.135L232.889 126.799V86.6513L193.543 66.125Z" fill="white" />
                                    <path d="M193.543 66.125L154.641 86.6513V128.007L193.465 149.135L232.889 126.799V86.6513L193.543 66.125Z" fill="url(#paint11_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M193.543 66.125L154.641 86.6513V128.007L193.465 149.135L232.889 126.799V86.6513L193.543 66.125Z" stroke="#53B5EE" strokeWidth="0.42782" />
                                    <path d="M154.641 86.6513L193.465 108.988L232.889 86.6513L193.543 66.125L154.641 86.6513Z" fill="#2B1615" />
                                    <path d="M154.641 86.6513L193.465 108.988L232.889 86.6513L193.543 66.125L154.641 86.6513Z" fill="url(#paint12_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M154.641 86.6513L193.465 108.988L232.889 86.6513L193.543 66.125L154.641 86.6513Z" stroke="url(#paint13_linear_1336_7545)" strokeWidth="0.630268" />
                                    <path d="M154.641 86.6484L193.465 108.985V149.133L154.641 128.004V86.6484Z" fill="#2B1615" />
                                    <path d="M154.641 86.6484L193.465 108.985V149.133L154.641 128.004V86.6484Z" fill="url(#paint14_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M154.641 86.6484L193.465 108.985V149.133L154.641 128.004V86.6484Z" stroke="url(#paint15_linear_1336_7545)" strokeWidth="0.630268" />
                                    <path d="M193.461 108.985L232.886 86.6484V126.796L193.461 149.133V108.985Z" fill="#2B1615" />
                                    <path d="M193.461 108.985L232.886 86.6484V126.796L193.461 149.133V108.985Z" fill="url(#paint16_linear_1336_7545)" fillOpacity="0.1" />
                                    <path d="M193.461 108.985L232.886 86.6484V126.796L193.461 149.133V108.985Z" stroke="url(#paint17_linear_1336_7545)" strokeWidth="0.630268" />
                                    <g clipPath="url(#clip3_1336_7545)">
                                        <path d="M246.673 128.07V192.365L242.946 194.435L242.303 194.795L236.949 197.771L236.306 198.131L230.955 201.106L230.308 201.466L224.957 204.442L224.311 204.802L218.96 207.777L218.313 208.137L212.962 211.113L212.316 211.473L206.965 214.448L206.318 214.808L200.971 217.784L200.324 218.144L194.973 221.119L194.326 221.479L193.484 221.946V157.652L195.069 156.772L195.712 156.412L201.067 153.436L201.71 153.076L207.064 150.1L207.707 149.741L213.062 146.765L213.705 146.405L219.056 143.429L219.702 143.069L225.053 140.094L225.7 139.734L231.051 136.758L231.697 136.398L237.048 133.423L237.695 133.063L243.042 130.087L243.692 129.727L246.673 128.07Z" fill="#2B1615" />
                                        <path d="M246.673 128.07V192.365L242.946 194.435L242.303 194.795L236.949 197.771L236.306 198.131L230.955 201.106L230.308 201.466L224.957 204.442L224.311 204.802L218.96 207.777L218.313 208.137L212.962 211.113L212.316 211.473L206.965 214.448L206.318 214.808L200.971 217.784L200.324 218.144L194.973 221.119L194.326 221.479L193.484 221.946V157.652L195.069 156.772L195.712 156.412L201.067 153.436L201.71 153.076L207.064 150.1L207.707 149.741L213.062 146.765L213.705 146.405L219.056 143.429L219.702 143.069L225.053 140.094L225.7 139.734L231.051 136.758L231.697 136.398L237.048 133.423L237.695 133.063L243.042 130.087L243.692 129.727L246.673 128.07Z" fill="url(#paint18_linear_1336_7545)" fillOpacity="0.1" />
                                        <path d="M246.673 128.07V192.365L242.946 194.435L242.303 194.795L236.949 197.771L236.306 198.131L230.955 201.106L230.308 201.466L224.957 204.442L224.311 204.802L218.96 207.777L218.313 208.137L212.962 211.113L212.316 211.473L206.965 214.448L206.318 214.808L200.971 217.784L200.324 218.144L194.973 221.119L194.326 221.479L193.484 221.946V157.652L195.069 156.772L195.712 156.412L201.067 153.436L201.71 153.076L207.064 150.1L207.707 149.741L213.062 146.765L213.705 146.405L219.056 143.429L219.702 143.069L225.053 140.094L225.7 139.734L231.051 136.758L231.697 136.398L237.048 133.423L237.695 133.063L243.042 130.087L243.692 129.727L246.673 128.07Z" stroke="url(#paint19_linear_1336_7545)" strokeWidth="0.630268" />
                                        <path d="M246.674 132.724V133.736L243.043 130.094L243.693 129.734L246.674 132.724Z" fill="url(#paint20_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.676 142.068V143.08L237.051 133.422L237.697 133.062L246.676 142.068Z" fill="url(#paint21_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.674 151.419V152.427L231.051 136.758L231.697 136.398L246.674 151.419Z" fill="url(#paint22_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.679 160.77V161.779L225.059 140.094L225.705 139.734L246.679 160.77Z" fill="url(#paint23_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.676 170.122V171.13L219.059 143.43L219.705 143.07L246.676 170.122Z" fill="url(#paint24_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.674 179.473V180.478L213.062 146.766L213.706 146.406L246.674 179.473Z" fill="url(#paint25_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M246.676 188.824V189.833L207.066 150.102L207.71 149.742L246.676 188.824Z" fill="url(#paint26_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M242.95 194.437L242.307 194.797L201.07 153.438L201.713 153.078L242.95 194.437Z" fill="url(#paint27_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M236.95 197.773L236.307 198.133L195.07 156.774L195.713 156.414L236.95 197.773Z" fill="url(#paint28_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M230.955 201.113L230.308 201.473L193.484 164.54V163.531L230.955 201.113Z" fill="url(#paint29_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M224.957 204.441L224.311 204.801L193.484 173.883V172.875L224.957 204.441Z" fill="url(#paint30_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M218.96 207.778L218.313 208.137L193.484 183.235V182.227L218.96 207.778Z" fill="url(#paint31_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M212.962 211.11L212.316 211.469L193.484 192.582V191.57L212.962 211.11Z" fill="url(#paint32_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M206.965 214.446L206.318 214.806L193.484 201.934V200.922L206.965 214.446Z" fill="url(#paint33_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M200.971 217.782L200.324 218.142L193.484 211.282V210.273L200.971 217.782Z" fill="url(#paint34_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M194.973 221.118L194.326 221.478L193.484 220.634V219.625L194.973 221.118Z" fill="url(#paint35_linear_1336_7545)" fillOpacity="0.3" />
                                    </g>
                                    <g clipPath="url(#clip4_1336_7545)">
                                        <path d="M232.909 86.375V126.522L228.155 129.217L227.508 129.58L222.197 132.591L221.553 132.958L216.238 135.966L215.599 136.329L210.28 139.341L209.64 139.704L204.325 142.719L203.682 143.079L198.366 146.094L197.727 146.457L193.484 148.859V108.712L195.972 107.3L196.618 106.937L201.93 103.926L202.577 103.562L207.888 100.551L208.532 100.184L213.847 97.1763L214.49 96.8092L219.805 93.8015L220.448 93.4345L225.76 90.4232L226.403 90.0633L231.719 87.0485L232.358 86.685L232.909 86.375Z" fill="#2B1615" />
                                        <path d="M232.909 86.375V126.522L228.155 129.217L227.508 129.58L222.197 132.591L221.553 132.958L216.238 135.966L215.599 136.329L210.28 139.341L209.64 139.704L204.325 142.719L203.682 143.079L198.366 146.094L197.727 146.457L193.484 148.859V108.712L195.972 107.3L196.618 106.937L201.93 103.926L202.577 103.562L207.888 100.551L208.532 100.184L213.847 97.1763L214.49 96.8092L219.805 93.8015L220.448 93.4345L225.76 90.4232L226.403 90.0633L231.719 87.0485L232.358 86.685L232.909 86.375Z" fill="url(#paint36_linear_1336_7545)" fillOpacity="0.1" />
                                        <path d="M232.909 86.375V126.522L228.155 129.217L227.508 129.58L222.197 132.591L221.553 132.958L216.238 135.966L215.599 136.329L210.28 139.341L209.64 139.704L204.325 142.719L203.682 143.079L198.366 146.094L197.727 146.457L193.484 148.859V108.712L195.972 107.3L196.618 106.937L201.93 103.926L202.577 103.562L207.888 100.551L208.532 100.184L213.847 97.1763L214.49 96.8092L219.805 93.8015L220.448 93.4345L225.76 90.4232L226.403 90.0633L231.719 87.0485L232.358 86.685L232.909 86.375Z" stroke="url(#paint37_linear_1336_7545)" strokeWidth="0.630268" />
                                        <path d="M232.913 87.2399V88.2448L231.723 87.051L232.362 86.6875L232.913 87.2399Z" fill="url(#paint38_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M232.91 96.5953V97.6002L225.762 90.4302L226.405 90.0703L232.91 96.5953Z" fill="url(#paint39_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M232.908 105.931V106.939L219.805 93.7967L220.448 93.4297L232.908 105.931Z" fill="url(#paint40_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M232.91 115.286V116.298L213.848 97.1796L214.491 96.8125L232.91 115.286Z" fill="url(#paint41_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M232.911 124.637V125.649L207.891 100.555L208.534 100.188L232.911 124.637Z" fill="url(#paint42_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M228.159 129.217L227.512 129.58L201.934 103.926L202.58 103.562L228.159 129.217Z" fill="url(#paint43_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M222.198 132.592L221.555 132.959L195.973 107.301L196.619 106.938L222.198 132.592Z" fill="url(#paint44_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M216.238 135.97L215.599 136.333L193.484 114.157V113.148L216.238 135.97Z" fill="url(#paint45_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M210.28 139.345L209.64 139.709L193.484 123.505V122.5L210.28 139.345Z" fill="url(#paint46_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M204.325 142.724L203.682 143.084L193.484 132.856V131.852L204.325 142.724Z" fill="url(#paint47_linear_1336_7545)" fillOpacity="0.3" />
                                        <path d="M198.366 146.092L197.727 146.455L193.484 142.2V141.195L198.366 146.092Z" fill="url(#paint48_linear_1336_7545)" fillOpacity="0.3" />
                                    </g>
                                </g>
                                <g clipPath="url(#clip5_1336_7545)">
                                    <path d="M191.172 371.242L191.169 370.441L191.163 363.814V363.017L191.155 356.389V355.235L194.888 353.075L194.889 353.076L195.396 352.784H195.397L199.582 350.361L199.581 350.36L200.089 350.07L200.09 350.069L204.274 347.649H204.275L204.782 347.355L208.968 344.935L209.476 344.641L213.66 342.221V342.22L214.168 341.926L218.353 339.506L218.859 339.215H218.86L223.044 336.791L223.045 336.792L223.553 336.501V336.5L227.741 334.08L227.742 334.079L228.244 333.785L228.243 333.784L232.434 331.365L232.938 331.074L237.127 328.65L237.126 328.649L237.631 328.359H237.632L241.819 325.937L242.324 325.646V325.645L246.512 323.222L247.017 322.931L251.205 320.507L251.204 320.506L251.709 320.216L255.895 317.796V317.795L256.402 317.501L260.587 315.081H260.588L261.095 314.787L265.28 312.366L265.279 312.365L265.789 312.076L265.79 312.075L269.976 309.655V309.654L270.483 309.36L274.668 306.94L274.669 306.939L275.172 306.646L275.173 306.646L279.36 304.226L279.865 303.935L284.054 301.512L284.559 301.221V301.22L288.746 298.797L289.251 298.506L293.439 296.082L293.438 296.081L293.943 295.791L296.79 294.145V310.701L295.151 311.648L294.646 311.939L290.456 314.357H290.455L289.95 314.651L285.761 317.068L285.253 317.359V317.36L281.064 319.777V319.778L280.557 320.072L276.369 322.489L275.861 322.783L271.674 325.201H271.673L271.166 325.495L266.979 327.912L266.471 328.203V328.204L262.28 330.621L262.279 330.622L261.774 330.916L257.584 333.333L257.079 333.624L252.889 336.045L252.384 336.336L248.193 338.757L247.688 339.048L243.495 341.465L243.493 341.466L242.993 341.76L238.8 344.177L238.295 344.468V344.469L234.104 346.889L233.599 347.18L229.408 349.598H229.407L228.903 349.892L224.716 352.31H224.715L224.208 352.604L220.021 355.021L219.511 355.312L219.51 355.312L215.321 357.729L214.814 358.023L210.626 360.441L210.118 360.735L205.932 363.152L205.424 363.444H205.423L201.235 365.864L200.729 366.155L200.728 366.156L196.537 368.573L196.032 368.864V368.865L191.841 371.285L191.337 371.576L191.336 371.577L191.172 371.672V371.242Z" fill="url(#paint49_linear_1336_7545)" stroke="#2A739E" strokeWidth="0.528938" />
                                    <path d="M297.053 298.814V299.612L293.305 295.854L293.809 295.562L297.053 298.814Z" fill="url(#paint50_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M297.054 306.238V307.035L288.613 298.572L289.118 298.281L297.054 306.238Z" fill="url(#paint51_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M295.284 311.878L294.779 312.17L283.922 301.283L284.427 300.992L295.284 311.878Z" fill="url(#paint52_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M290.586 314.584L290.081 314.878L279.227 303.994L279.731 303.703L290.586 314.584Z" fill="url(#paint53_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M285.892 317.302L285.384 317.594L274.535 306.716L275.04 306.422L285.892 317.302Z" fill="url(#paint54_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M281.198 320.008L280.69 320.302L269.844 309.427L270.351 309.133L281.198 320.008Z" fill="url(#paint55_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M276.502 322.724L275.995 323.018L265.148 312.143L265.659 311.852L276.502 322.724Z" fill="url(#paint56_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M271.804 325.435L271.297 325.729L260.453 314.857L260.961 314.562L271.804 325.435Z" fill="url(#paint57_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M267.11 328.143L266.602 328.434L255.762 317.568L256.269 317.273L267.11 328.143Z" fill="url(#paint58_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M262.41 330.848L261.905 331.142L251.07 320.276L251.575 319.984L262.41 330.848Z" fill="url(#paint59_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M257.716 333.564L257.211 333.855L246.379 322.994L246.884 322.703L257.716 333.564Z" fill="url(#paint60_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M253.018 336.272L252.513 336.563L241.684 325.705L242.188 325.414L253.018 336.272Z" fill="url(#paint61_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M248.323 338.988L247.819 339.279L236.992 328.424L237.497 328.133L248.323 338.988Z" fill="url(#paint62_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M243.626 341.693L243.124 341.987L232.301 331.135L232.806 330.844L243.626 341.693Z" fill="url(#paint63_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M238.932 344.404L238.427 344.695L227.609 333.849L228.111 333.555L238.932 344.404Z" fill="url(#paint64_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M234.233 347.12L233.728 347.411L222.91 336.565L223.418 336.273L234.233 347.12Z" fill="url(#paint65_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M229.539 349.825L229.034 350.119L218.219 339.276L218.726 338.984L229.539 349.825Z" fill="url(#paint66_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M224.847 352.536L224.34 352.83L213.527 341.989L214.035 341.695L224.847 352.536Z" fill="url(#paint67_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M220.153 355.252L219.643 355.543L208.836 344.708L209.344 344.414L220.153 355.252Z" fill="url(#paint68_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M215.452 357.958L214.945 358.252L204.141 347.419L204.648 347.125L215.452 357.958Z" fill="url(#paint69_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M210.754 360.673L210.246 360.968L199.445 350.135L199.953 349.844L210.754 360.673Z" fill="url(#paint70_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M206.064 363.382L205.556 363.673L194.758 352.846L195.265 352.555L206.064 363.382Z" fill="url(#paint71_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M201.367 366.09L200.86 366.382L190.891 356.386V355.586L201.367 366.09Z" fill="url(#paint72_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M196.668 368.801L196.164 369.092L190.898 363.813V363.016L196.668 368.801Z" fill="url(#paint73_linear_1336_7545)" fillOpacity="0.3" />
                                    <path d="M191.971 371.517L191.466 371.808L190.905 371.246L190.902 370.445L191.971 371.517Z" fill="url(#paint74_linear_1336_7545)" fillOpacity="0.3" />
                                </g>
                                <path d="M80.2422 175.727L154.838 282.172" stroke="#2A739E" strokeWidth="0.528942" stroke-dasharray="6.35 6.35" />
                                <path d="M303.51 175.727L229.578 282.172" stroke="#2A739E" strokeWidth="0.528942" stroke-dasharray="6.35 6.35" />
                                <path d="M231.381 206.711L209.039 257.995" stroke="#2A739E" strokeWidth="0.528942" stroke-dasharray="6.35 6.35" />
                                <path d="M153.488 206.711L176.862 257.995" stroke="#2A739E" strokeWidth="0.528942" stroke-dasharray="6.35 6.35" />
                                <g clipPath="url(#clip6_1336_7545)">
                                    <path d="M127.455 175.367H124.582V185.812H127.455V175.367Z" fill="#955441" />
                                    <path d="M122.689 156.874L126.152 147.047L121.508 153.706L122.689 156.874Z" fill="#77D86C" />
                                    <path d="M122.399 156.094L119.023 160.857L120.71 165.933L123.547 157.284L122.691 156.879L122.399 156.094Z" fill="#70C663" />
                                    <path d="M120.149 164.242L116.211 170.071L118.18 177.298L121.712 166.985L121.509 165.928L120.149 164.242Z" fill="#66BA58" />
                                    <path d="M126.158 147.047L122.695 156.874L128.317 157.442L126.158 147.047Z" fill="#70C663" />
                                    <path d="M122.687 156.875L128.309 157.443L129.572 166.783L121.505 165.929L120.938 165.225L122.687 156.875Z" fill="#69B75C" />
                                    <path d="M120.94 165.227L118.18 177.299L130.981 178.691L129.575 166.784L120.94 165.227Z" fill="#61A553" />
                                    <path d="M126.156 147.047L131.005 154.62L128.315 157.442L126.156 147.047Z" fill="#5A964B" />
                                    <path d="M129.825 155.852L133.733 162.149L129.576 166.779L128.312 157.439L129.825 155.852Z" fill="#518442" />
                                    <path d="M132.349 163.695L137.371 171.592L130.984 178.688L129.578 166.781L132.349 163.695Z" fill="#477239" />
                                </g>
                                <g clipPath="url(#clip7_1336_7545)">
                                    <path d="M345.381 366.32H342.508V376.765H345.381V366.32Z" fill="#955441" />
                                    <path d="M340.615 347.827L344.078 338L339.434 344.659L340.615 347.827Z" fill="#77D86C" />
                                    <path d="M340.321 347.039L336.945 351.803L338.632 356.878L341.469 348.23L340.613 347.824L340.321 347.039Z" fill="#70C663" />
                                    <path d="M338.075 355.188L334.137 361.016L336.106 368.243L339.638 357.93L339.435 356.874L338.075 355.188Z" fill="#66BA58" />
                                    <path d="M344.08 338L340.617 347.827L346.239 348.395L344.08 338Z" fill="#70C663" />
                                    <path d="M340.612 347.82L346.235 348.388L347.498 357.728L339.431 356.874L338.863 356.171L340.612 347.82Z" fill="#69B75C" />
                                    <path d="M338.866 356.172L336.105 368.244L348.907 369.636L347.501 357.729L338.866 356.172Z" fill="#61A553" />
                                    <path d="M344.078 338L348.927 345.573L346.237 348.395L344.078 338Z" fill="#5A964B" />
                                    <path d="M347.747 346.805L351.655 353.102L347.498 357.732L346.234 348.392L347.747 346.805Z" fill="#518442" />
                                    <path d="M350.271 354.641L355.293 362.537L348.906 369.633L347.5 357.727L350.271 354.641Z" fill="#477239" />
                                </g>
                                <g clipPath="url(#clip8_1336_7545)">
                                    <path d="M55.4998 375.18H53.8477V381.089H55.4998V375.18Z" fill="#955441" />
                                    <path d="M52.7612 364.716L54.7524 359.156L52.082 362.924L52.7612 364.716Z" fill="#77D86C" />
                                    <path d="M52.5933 364.266L50.6523 366.961L51.6224 369.832L53.2532 364.939L52.7614 364.71L52.5933 364.266Z" fill="#70C663" />
                                    <path d="M51.2998 368.883L49.0352 372.181L50.1675 376.269L52.1983 370.435L52.0814 369.837L51.2998 368.883Z" fill="#66BA58" />
                                    <path d="M54.7529 359.156L52.7617 364.716L55.9944 365.038L54.7529 359.156Z" fill="#70C663" />
                                    <path d="M52.7597 364.711L55.9924 365.032L56.7189 370.317L52.0805 369.833L51.7539 369.435L52.7597 364.711Z" fill="#69B75C" />
                                    <path d="M51.7553 369.438L50.168 376.268L57.529 377.055L56.7203 370.319L51.7553 369.438Z" fill="#61A553" />
                                    <path d="M54.7539 359.156L57.5422 363.441L55.9954 365.038L54.7539 359.156Z" fill="#5A964B" />
                                    <path d="M56.8617 364.133L59.109 367.696L56.7187 370.315L55.9922 365.031L56.8617 364.133Z" fill="#518442" />
                                    <path d="M58.3158 368.57L61.2036 373.038L57.5313 377.053L56.7227 370.316L58.3158 368.57Z" fill="#477239" />
                                </g>
                                <path d="M-69.4492 406.234C45.2866 454.681 369.044 621.778 285.207 931.209" stroke="url(#paint75_linear_1336_7545)" strokeWidth="0.528942" />
                                <path d="M483.735 137.765C466.415 208.636 447.506 282.612 398.832 336.967C358.372 382.148 300.025 409.38 239.944 417.775C179.86 426.171 118.169 416.647 60.8751 396.687C18.6244 381.966 -21.6559 361.598 -58.5545 336.298" stroke="url(#paint76_linear_1336_7545)" strokeWidth="0.528942" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1336_7545" x1="55.8286" y1="239.296" x2="86.2114" y2="399.079" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1336_7545" x1="70.5836" y1="290.94" x2="92.8057" y2="386.763" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1336_7545" x1="176.446" y1="290.933" x2="198.783" y2="386.98" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1336_7545" x1="150.207" y1="273.891" x2="158.806" y2="320.723" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_1336_7545" x1="150.207" y1="257.292" x2="158.557" y2="303.466" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_1336_7545" x1="140.73" y1="134.005" x2="247.849" y2="213.292" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint6_linear_1336_7545" x1="193.462" y1="98.8203" x2="193.462" y2="221.878" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint7_linear_1336_7545" x1="140.461" y1="154.849" x2="207.63" y2="187.482" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint8_linear_1336_7545" x1="166.866" y1="128.008" x2="166.866" y2="221.884" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint9_linear_1336_7545" x1="193.808" y1="154.849" x2="260.855" y2="187.328" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint10_linear_1336_7545" x1="220.135" y1="128.008" x2="220.135" y2="221.884" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint11_linear_1336_7545" x1="155.036" y1="84.7766" x2="233.554" y2="143.055" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint12_linear_1336_7545" x1="155.036" y1="78.3803" x2="190.479" y2="133.696" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint13_linear_1336_7545" x1="193.765" y1="66.125" x2="193.765" y2="108.988" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint14_linear_1336_7545" x1="154.837" y1="104.514" x2="201.96" y2="129.546" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint15_linear_1336_7545" x1="174.053" y1="86.6484" x2="174.053" y2="149.133" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint16_linear_1336_7545" x1="193.66" y1="104.514" x2="241.186" y2="130.15" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint17_linear_1336_7545" x1="213.173" y1="86.6484" x2="213.173" y2="149.133" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint18_linear_1336_7545" x1="193.753" y1="154.911" x2="260.798" y2="187.387" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint19_linear_1336_7545" x1="220.079" y1="128.07" x2="220.079" y2="221.946" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint20_linear_1336_7545" x1="243.061" y1="130.879" x2="246.589" y2="133.615" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint21_linear_1336_7545" x1="237.099" y1="135.927" x2="246.043" y2="143.274" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint22_linear_1336_7545" x1="231.13" y1="140.981" x2="245.479" y2="152.938" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint23_linear_1336_7545" x1="225.168" y1="146.037" x2="244.925" y2="162.603" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint24_linear_1336_7545" x1="219.198" y1="151.093" x2="244.362" y2="172.267" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint25_linear_1336_7545" x1="213.233" y1="156.148" x2="243.799" y2="181.927" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint26_linear_1336_7545" x1="207.267" y1="161.205" x2="243.242" y2="191.592" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint27_linear_1336_7545" x1="201.282" y1="165.006" x2="238.814" y2="197.217" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint28_linear_1336_7545" x1="195.282" y1="168.342" x2="232.814" y2="200.553" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint29_linear_1336_7545" x1="193.674" y1="174.379" x2="227.718" y2="203.123" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint30_linear_1336_7545" x1="193.644" y1="182.003" x2="222.282" y2="206.139" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint31_linear_1336_7545" x1="193.613" y1="189.635" x2="216.845" y2="209.163" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint32_linear_1336_7545" x1="193.583" y1="197.26" x2="211.411" y2="212.179" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint33_linear_1336_7545" x1="193.553" y1="204.892" x2="205.973" y2="215.201" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint34_linear_1336_7545" x1="193.522" y1="212.523" x2="200.534" y2="218.226" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint35_linear_1336_7545" x1="193.492" y1="220.155" x2="195.066" y2="221.236" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint36_linear_1336_7545" x1="193.684" y1="104.24" x2="241.209" y2="129.877" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint37_linear_1336_7545" x1="213.197" y1="86.375" x2="213.197" y2="148.859" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E6048" />
                                    <stop offset="1" stopColor="#753D12" />
                                </linearGradient>
                                <linearGradient id="paint38_linear_1336_7545" x1="231.729" y1="87.1328" x2="233.027" y2="87.981" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint39_linear_1336_7545" x1="225.798" y1="92.2232" x2="232.505" y2="97.6669" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint40_linear_1336_7545" x1="219.871" y1="97.2923" x2="231.954" y2="107.312" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint41_linear_1336_7545" x1="213.944" y1="102.384" x2="231.4" y2="116.983" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint42_linear_1336_7545" x1="208.017" y1="107.468" x2="230.844" y2="126.645" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint43_linear_1336_7545" x1="202.066" y1="111.001" x2="225.487" y2="131.184" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint44_linear_1336_7545" x1="196.105" y1="114.377" x2="219.529" y2="134.559" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint45_linear_1336_7545" x1="193.599" y1="119.777" x2="214.381" y2="137.213" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint46_linear_1336_7545" x1="193.569" y1="127.42" x2="208.979" y2="140.278" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint47_linear_1336_7545" x1="193.539" y1="135.063" x2="203.576" y2="143.345" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint48_linear_1336_7545" x1="193.509" y1="142.699" x2="198.171" y2="146.398" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFD3B0" />
                                    <stop offset="1" stopColor="#FF7000" />
                                </linearGradient>
                                <linearGradient id="paint49_linear_1336_7545" x1="176.09" y1="291.07" x2="198.423" y2="387.259" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#060606" />
                                    <stop offset="1" stopColor="#1E2327" />
                                </linearGradient>
                                <linearGradient id="paint50_linear_1336_7545" x1="293.417" y1="299.482" x2="294.952" y2="295.443" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint51_linear_1336_7545" x1="288.866" y1="306.756" x2="292.085" y2="297.936" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint52_linear_1336_7545" x1="284.262" y1="311.813" x2="288.207" y2="300.417" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint53_linear_1336_7545" x1="279.566" y1="314.521" x2="283.511" y2="303.128" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint54_linear_1336_7545" x1="274.875" y1="317.237" x2="278.818" y2="305.847" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint55_linear_1336_7545" x1="270.183" y1="319.945" x2="274.126" y2="308.558" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint56_linear_1336_7545" x1="265.488" y1="322.661" x2="269.428" y2="311.276" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint57_linear_1336_7545" x1="260.793" y1="325.372" x2="264.734" y2="313.988" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint58_linear_1336_7545" x1="256.101" y1="328.078" x2="260.039" y2="316.698" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint59_linear_1336_7545" x1="251.409" y1="330.786" x2="255.348" y2="319.41" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint60_linear_1336_7545" x1="246.718" y1="333.499" x2="250.654" y2="322.129" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint61_linear_1336_7545" x1="242.023" y1="336.207" x2="245.958" y2="324.84" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint62_linear_1336_7545" x1="237.331" y1="338.923" x2="241.265" y2="327.559" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint63_linear_1336_7545" x1="232.64" y1="341.631" x2="236.573" y2="330.27" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint64_linear_1336_7545" x1="227.948" y1="344.34" x2="231.881" y2="332.982" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint65_linear_1336_7545" x1="223.249" y1="347.056" x2="227.18" y2="335.7" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint66_linear_1336_7545" x1="218.557" y1="349.764" x2="222.487" y2="338.411" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint67_linear_1336_7545" x1="213.866" y1="352.475" x2="217.796" y2="341.122" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint68_linear_1336_7545" x1="209.174" y1="355.188" x2="213.102" y2="343.84" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint69_linear_1336_7545" x1="204.479" y1="357.896" x2="208.406" y2="346.552" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint70_linear_1336_7545" x1="199.784" y1="360.612" x2="203.71" y2="349.271" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint71_linear_1336_7545" x1="195.096" y1="363.318" x2="199.019" y2="351.981" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint72_linear_1336_7545" x1="191.204" y1="366.037" x2="195.154" y2="355.143" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint73_linear_1336_7545" x1="191.071" y1="368.898" x2="193.332" y2="362.798" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint74_linear_1336_7545" x1="190.934" y1="371.765" x2="191.516" y2="370.469" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#BADEF3" />
                                    <stop offset="1" stopColor="#53B5EE" />
                                </linearGradient>
                                <linearGradient id="paint75_linear_1336_7545" x1="-67.5344" y1="399.538" x2="344.15" y2="867.983" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2A739E" />
                                    <stop offset="1" stopColor="#2A739E" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint76_linear_1336_7545" x1="487" y1="132.238" x2="-57.017" y2="336.674" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2A739E" stopOpacity="0" />
                                    <stop offset="1" stopColor="#2A739E" />
                                </linearGradient>
                                <clipPath id="clip0_1336_7545">
                                    <rect width="530" height="519.95" fill="white" transform="translate(-43)" />
                                </clipPath>
                                <clipPath id="clip1_1336_7545">
                                    <rect width="211.99" height="140.725" fill="white" transform="translate(85.207 231.195)" />
                                </clipPath>
                                <clipPath id="clip2_1336_7545">
                                    <rect width="106.897" height="156.061" fill="white" transform="translate(140.012 66.125)" />
                                </clipPath>
                                <clipPath id="clip3_1336_7545">
                                    <rect width="53.5444" height="94.4816" fill="white" transform="translate(193.309 127.773)" />
                                </clipPath>
                                <clipPath id="clip4_1336_7545">
                                    <rect width="39.7799" height="63.0935" fill="white" transform="translate(193.309 86.0781)" />
                                </clipPath>
                                <clipPath id="clip5_1336_7545">
                                    <rect width="106.446" height="78.9323" fill="white" transform="translate(190.75 293.445)" />
                                </clipPath>
                                <clipPath id="clip6_1336_7545">
                                    <rect width="21.1577" height="40.1996" fill="white" transform="translate(116.211 147.047)" />
                                </clipPath>
                                <clipPath id="clip7_1336_7545">
                                    <rect width="21.1577" height="40.1996" fill="white" transform="translate(334.137 338)" />
                                </clipPath>
                                <clipPath id="clip8_1336_7545">
                                    <rect width="12.1657" height="22.7445" fill="white" transform="translate(49.0352 359.156)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <img className=' w-[100vw] h-auto -top-1/2 object-cover lg:block hidden z-[10]' src={immersiveMobile} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="1680" height="1734" />

                    <div className="w-[41.875rem] lg:w-full">
                        <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-white">
                            Space
                        </p>
                        <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-white">
                            Immersive, Real-Time, Impactful (3D)
                        </h2>
                        <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-white">
                            A full 3D version of your project brought to life with interaction and depth.
                        </p>

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-6 lg:gap-[0.75rem] items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-28 lg:text-20 leading-[140%] text-white'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-24 lg:text-base leading-[140%] text-white'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}