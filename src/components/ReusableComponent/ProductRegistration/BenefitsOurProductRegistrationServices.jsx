import { titleContentConfig } from "@/config/titleContentConfig";
import TitleContent from "../All_Title/TitleContent";
import AmazonCardHolder from "../multiChannelSection/AmazonCardHolder";

const benefits = [
    {
        number: "1",
        title: "Faster product approval",
        className: "absolute benefits-Product-card-1",
        rotate: "rotate-6",
    },
    {
        number: "2",
        title: "Reduced risk of rejection",
        className: "absolute benefits-Product-card-2",
        rotate: "rotate-6",
    },
    {
        number: "3",
        title: "Accurate documentation",
        className: "absolute benefits-Product-card-3",
        rotate: "rotate-6",
    },
    {
        number: "4",
        title: "Compliance with UAE regulations",
        className: "absolute benefits-Product-card-4",
        rotate: "rotate-6",
    },
    {
        number: "5",
        title: "Smooth market entry",
        className: "absolute benefits-Product-card-5",
        rotate: "rotate-6",
    },
];

export default function BenefitsOurProductRegistrationServices({ sectionKey = {} }) {
    const tc =
        titleContentConfig[sectionKey] || titleContentConfig["benefitsofproductregistrationservie"];
    return (
        <section className="pt-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid text-center relative z-10">
                    <TitleContent {...tc} />
                </div>
                <div className="lg:hidden mt-6 md:mt-12 relative">
                    <div className="flex flex-col gap-4 mb-10">

                        <img src="/AmazonCard.png" alt="" />
                        {benefits.map((category, index) => (
                            //   <>
                            <div key={index}>
                                <AmazonCardHolder industry={category} />
                            </div>
                            //   </>
                        ))}
                    </div>
                </div>
                {/* Benefits Layout */}
                <div className="hidden lg:block relative mx-auto h-[500px] max-w-[1100px]">
                    {/* Center Circle */}
                    <svg width="100%" height="100%" viewBox="0 0 1158 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_18_224830)">
                            <path d="M288.676 21.7998H338.32C343.39 21.7998 347.5 25.9097 347.5 30.9795V87.3627C347.5 93.9901 342.127 99.3627 335.5 99.3627H299.11C294.571 99.3627 290.892 103.042 290.892 107.581C290.892 112.12 287.212 115.8 282.673 115.8H27.5C20.8726 115.8 15.5 110.427 15.5 103.8V55.8872C15.5 49.2598 20.8726 43.8872 27.5 43.8872H266.588C272.688 43.8872 277.632 38.9428 277.632 32.8435C277.632 26.7442 282.577 21.7998 288.676 21.7998Z" fill="#FFBE2E" />
                            <path d="M288.676 21.7998H338.32C343.39 21.7998 347.5 25.9097 347.5 30.9795V87.3627C347.5 93.9901 342.127 99.3627 335.5 99.3627H299.11C294.571 99.3627 290.892 103.042 290.892 107.581C290.892 112.12 287.212 115.8 282.673 115.8H27.5C20.8726 115.8 15.5 110.427 15.5 103.8V55.8872C15.5 49.2598 20.8726 43.8872 27.5 43.8872H266.588C272.688 43.8872 277.632 38.9428 277.632 32.8435C277.632 26.7442 282.577 21.7998 288.676 21.7998Z" stroke="#212121" />
                        </g>
                        <circle cx="347.5" cy="65.7998" r="4" fill="#3C2C0B" />
                        <path d="M348.5 65.7998H439.465C447.594 65.7998 455.162 69.929 459.648 76.7081C474.489 99.1317 484.388 112.705 501 138.3" stroke="#3C2C0B" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                        <g filter="url(#filter1_d_18_224830)">
                            <path d="M867.324 21.7998H817.68C812.61 21.7998 808.5 25.9097 808.5 30.9795V87.3627C808.5 93.9901 813.873 99.3627 820.5 99.3627H856.89C861.429 99.3627 865.108 103.042 865.108 107.581C865.108 112.12 868.788 115.8 873.327 115.8H1128.5C1135.13 115.8 1140.5 110.427 1140.5 103.8V55.8872C1140.5 49.2598 1135.13 43.8872 1128.5 43.8872H889.412C883.312 43.8872 878.368 38.9428 878.368 32.8435C878.368 26.7442 873.423 21.7998 867.324 21.7998Z" fill="#FFBE2E" />
                            <path d="M867.324 21.7998H817.68C812.61 21.7998 808.5 25.9097 808.5 30.9795V87.3627C808.5 93.9901 813.873 99.3627 820.5 99.3627H856.89C861.429 99.3627 865.108 103.042 865.108 107.581C865.108 112.12 868.788 115.8 873.327 115.8H1128.5C1135.13 115.8 1140.5 110.427 1140.5 103.8V55.8872C1140.5 49.2598 1135.13 43.8872 1128.5 43.8872H889.412C883.312 43.8872 878.368 38.9428 878.368 32.8435C878.368 26.7442 873.423 21.7998 867.324 21.7998Z" stroke="#212121" />
                        </g>
                        <path d="M808 62.7998H717.035C708.906 62.7998 701.267 66.8922 697.079 73.8596C684.074 95.4946 680.537 106.82 664 132.3" stroke="#3C2C0B" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                        <circle cx="808.5" cy="62.7998" r="4" fill="#3C2C0B" />
                        <g filter="url(#filter2_d_18_224830)">
                            <path d="M869.324 221.8H819.68C814.61 221.8 810.5 225.91 810.5 230.98V287.363C810.5 293.99 815.873 299.363 822.5 299.363H858.89C863.429 299.363 867.108 303.042 867.108 307.581C867.108 312.12 870.788 315.8 875.327 315.8H1130.5C1137.13 315.8 1142.5 310.427 1142.5 303.8V255.887C1142.5 249.26 1137.13 243.887 1130.5 243.887H891.412C885.312 243.887 880.368 238.943 880.368 232.844C880.368 226.744 875.423 221.8 869.324 221.8Z" fill="#FFBE2E" />
                            <path d="M869.324 221.8H819.68C814.61 221.8 810.5 225.91 810.5 230.98V287.363C810.5 293.99 815.873 299.363 822.5 299.363H858.89C863.429 299.363 867.108 303.042 867.108 307.581C867.108 312.12 870.788 315.8 875.327 315.8H1130.5C1137.13 315.8 1142.5 310.427 1142.5 303.8V255.887C1142.5 249.26 1137.13 243.887 1130.5 243.887H891.412C885.312 243.887 880.368 238.943 880.368 232.844C880.368 226.744 875.423 221.8 869.324 221.8Z" stroke="#212121" />
                        </g>
                        <path d="M810.5 265.8H718.183C710.623 265.8 703.504 262.237 698.972 256.185L657.5 200.8" stroke="#3C2C0B" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                        <circle cx="810.5" cy="265.8" r="4" fill="#3C2C0B" />
                        <g filter="url(#filter3_d_18_224830)">
                            <path d="M471.324 339.8H421.68C416.61 339.8 412.5 343.91 412.5 348.98V405.363C412.5 411.99 417.873 417.363 424.5 417.363H460.89C465.429 417.363 469.108 421.042 469.108 425.581C469.108 430.12 472.788 433.8 477.327 433.8H732.5C739.127 433.8 744.5 428.427 744.5 421.8V373.887C744.5 367.26 739.127 361.887 732.5 361.887H493.412C487.312 361.887 482.368 356.943 482.368 350.844C482.368 344.744 477.423 339.8 471.324 339.8Z" fill="#FFBE2E" />
                            <path d="M471.324 339.8H421.68C416.61 339.8 412.5 343.91 412.5 348.98V405.363C412.5 411.99 417.873 417.363 424.5 417.363H460.89C465.429 417.363 469.108 421.042 469.108 425.581C469.108 430.12 472.788 433.8 477.327 433.8H732.5C739.127 433.8 744.5 428.427 744.5 421.8V373.887C744.5 367.26 739.127 361.887 732.5 361.887H493.412C487.312 361.887 482.368 356.943 482.368 350.844C482.368 344.744 477.423 339.8 471.324 339.8Z" stroke="#212121" />
                        </g>
                        <path d="M578.5 361.8L578.5 257.472L578.5 228.8" stroke="#3C2C0B" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                        <circle cx="578.5" cy="361.8" r="4" transform="rotate(90 578.5 361.8)" fill="#3C2C0B" />
                        <g filter="url(#filter4_d_18_224830)">
                            <path d="M288.676 221.8H338.32C343.39 221.8 347.5 225.91 347.5 230.98V287.363C347.5 293.99 342.127 299.363 335.5 299.363H299.11C294.571 299.363 290.892 303.042 290.892 307.581C290.892 312.12 287.212 315.8 282.673 315.8H27.5C20.8726 315.8 15.5 310.427 15.5 303.8V255.887C15.5 249.26 20.8726 243.887 27.5 243.887H266.588C272.688 243.887 277.632 238.943 277.632 232.844C277.632 226.744 282.577 221.8 288.676 221.8Z" fill="#FFBE2E" />
                            <path d="M288.676 221.8H338.32C343.39 221.8 347.5 225.91 347.5 230.98V287.363C347.5 293.99 342.127 299.363 335.5 299.363H299.11C294.571 299.363 290.892 303.042 290.892 307.581C290.892 312.12 287.212 315.8 282.673 315.8H27.5C20.8726 315.8 15.5 310.427 15.5 303.8V255.887C15.5 249.26 20.8726 243.887 27.5 243.887H266.588C272.688 243.887 277.632 238.943 277.632 232.844C277.632 226.744 282.577 221.8 288.676 221.8Z" stroke="#212121" />
                        </g>
                        <path d="M348.5 261.8H441.274C448.576 261.8 455.48 258.476 460.034 252.768L501.5 200.8" stroke="#3C2C0B" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4" />
                        <circle cx="347.5" cy="261.8" r="4" fill="#3C2C0B" />
                        <rect x="0.0173683" y="0.0176742" width="125.252" height="37.6514" transform="matrix(0.999848 0.0174524 0 1 517.506 145.282)" stroke="#FFBE2E" stroke-width="0.034742" />
                        <g filter="url(#filter5_f_18_224830)">
                            <circle cx="578.884" cy="162.183" r="100.517" fill="#FFBE2E" />
                            <circle cx="578.884" cy="162.183" r="99.9" stroke="#FFBE2E" stroke-width="1.23333" />
                        </g>
                        <circle cx="579.5" cy="162.8" r="111" fill="#3C2C0B" />
                        <path d="M534.924 173.927C534.493 172.945 534.402 165.659 534.599 164.177C534.643 163.835 534.941 163.94 534.978 163.785C535.359 162.176 535.388 160.131 535.808 158.37C540.988 136.629 562.277 121.725 584.642 124.045C594.075 125.023 594.04 139.381 584.638 140.287C578.847 140.844 575.021 139.975 569.201 142.23C545.53 151.412 544.818 185.169 568.143 195.139C587.701 203.5 607.336 189.395 608.227 168.811C608.924 152.682 607.267 135.732 608.21 119.701C608.824 109.265 623.355 109.192 624.5 119.333V171.395C622.782 196.3 602.006 214.968 576.872 213.743C557.415 212.794 540.113 198.168 535.771 179.274C535.495 178.076 535.233 174.638 534.922 173.929L534.924 173.927Z" fill="#FFBE2E" />
                        <circle cx="578.884" cy="162.183" r="99.9" stroke="#FFBE2E" stroke-width="1.23333" />
                        <path d="M320.329 42.2998V79.7998H310.979V45.4998L315.529 49.6498L299.479 52.4498V45.1498L313.379 42.2998H320.329Z" fill="#212121" />
                        <path d="M293.248 253.3C293.415 250.933 294.248 248.783 295.748 246.85C297.248 244.916 299.381 243.383 302.148 242.25C304.948 241.083 308.331 240.5 312.298 240.5C315.698 240.5 318.648 240.95 321.148 241.85C323.681 242.716 325.648 243.933 327.048 245.5C328.448 247.033 329.148 248.85 329.148 250.95C329.148 252.65 328.631 254.2 327.598 255.6C326.598 256.966 325.015 258.066 322.848 258.9C320.681 259.7 317.915 260.083 314.548 260.05V259.05C317.748 258.883 320.498 259.116 322.798 259.75C325.098 260.383 326.865 261.383 328.098 262.75C329.331 264.116 329.948 265.833 329.948 267.9C329.948 270.166 329.231 272.183 327.798 273.95C326.365 275.683 324.265 277.066 321.498 278.1C318.765 279.1 315.431 279.6 311.498 279.6C307.665 279.6 304.315 279.066 301.448 278C298.615 276.9 296.398 275.383 294.798 273.45C293.231 271.483 292.381 269.183 292.248 266.55H301.648C301.915 268.383 302.848 269.8 304.448 270.8C306.081 271.766 308.431 272.25 311.498 272.25C314.398 272.25 316.598 271.816 318.098 270.95C319.631 270.05 320.398 268.8 320.398 267.2C320.398 266.266 320.148 265.5 319.648 264.9C319.148 264.266 318.298 263.783 317.098 263.45C315.898 263.116 314.231 262.95 312.098 262.95H305.598V256.5H312.098C314.865 256.5 316.815 256.116 317.948 255.35C319.081 254.55 319.648 253.516 319.648 252.25C319.648 250.85 318.981 249.766 317.648 249C316.348 248.233 314.381 247.85 311.748 247.85C309.015 247.85 306.881 248.333 305.348 249.3C303.848 250.233 302.948 251.566 302.648 253.3H293.248Z" fill="#212121" />
                        <path d="M432.729 361.3H461.629V368.4H435.579L439.379 366.6L437.279 380.7H434.879C435.613 379.466 436.613 378.333 437.879 377.3C439.179 376.266 440.763 375.433 442.629 374.8C444.496 374.166 446.663 373.85 449.129 373.85C452.329 373.85 455.079 374.383 457.379 375.45C459.679 376.516 461.446 377.983 462.679 379.85C463.946 381.716 464.579 383.866 464.579 386.3C464.579 388.866 463.863 391.15 462.429 393.15C460.996 395.15 458.929 396.733 456.229 397.9C453.563 399.033 450.363 399.6 446.629 399.6C442.963 399.6 439.779 399.066 437.079 398C434.379 396.933 432.263 395.483 430.729 393.65C429.196 391.783 428.296 389.716 428.029 387.45H437.429C437.796 388.916 438.763 390.083 440.329 390.95C441.929 391.816 444.029 392.25 446.629 392.25C448.396 392.25 449.913 392.016 451.179 391.55C452.446 391.05 453.429 390.35 454.129 389.45C454.829 388.55 455.179 387.483 455.179 386.25C455.179 385.083 454.863 384.05 454.229 383.15C453.629 382.25 452.713 381.55 451.479 381.05C450.279 380.55 448.779 380.3 446.979 380.3C445.479 380.3 444.129 380.466 442.929 380.8C441.763 381.133 440.729 381.566 439.829 382.1C438.963 382.633 438.246 383.183 437.679 383.75H429.579L432.729 361.3Z" fill="#212121" />
                        <path d="M824.719 55.6498C824.919 52.7498 825.869 50.2498 827.569 48.1498C829.269 46.0165 831.519 44.3831 834.319 43.2498C837.152 42.0831 840.352 41.4998 843.919 41.4998C847.319 41.4998 850.286 42.0165 852.819 43.0498C855.386 44.0831 857.369 45.5331 858.769 47.3998C860.202 49.2665 860.919 51.4165 860.919 53.8498C860.919 55.7498 860.419 57.5165 859.419 59.1498C858.419 60.7498 856.836 62.3498 854.669 63.9498C852.502 65.5498 849.652 67.2498 846.119 69.0498L835.319 74.7498L834.769 72.2498H861.969V79.7998H825.369V73.1998L841.469 63.9498C844.036 62.4831 846.036 61.2331 847.469 60.1998C848.936 59.1331 849.969 58.1498 850.569 57.2498C851.169 56.3498 851.469 55.3831 851.469 54.3498C851.469 53.2831 851.169 52.3331 850.569 51.4998C850.002 50.6665 849.136 50.0165 847.969 49.5498C846.802 49.0831 845.336 48.8498 843.569 48.8498C841.469 48.8498 839.736 49.1665 838.369 49.7998C837.002 50.3998 835.986 51.2165 835.319 52.2498C834.652 53.2831 834.252 54.4165 834.119 55.6498H824.719Z" fill="#212121" />
                        <path d="M858.407 241.3V278.8H849.057V245.4H852.107L832.107 267.5L832.007 264.5H864.607V271.6H825.057V264.9L846.457 241.3H858.407Z" fill="#212121" />
                        <defs>
                            <filter id="filter0_d_18_224830" x="0" y="6.2998" width="363" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_224830" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_224830" result="shape" />
                            </filter>
                            <filter id="filter1_d_18_224830" x="793" y="6.2998" width="363" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_224830" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_224830" result="shape" />
                            </filter>
                            <filter id="filter2_d_18_224830" x="795" y="206.3" width="363" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_224830" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_224830" result="shape" />
                            </filter>
                            <filter id="filter3_d_18_224830" x="397" y="324.3" width="363" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_224830" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_224830" result="shape" />
                            </filter>
                            <filter id="filter4_d_18_224830" x="0" y="206.3" width="363" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="7.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_224830" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_224830" result="shape" />
                            </filter>
                            <filter id="filter5_f_18_224830" x="416.701" y="-0.000164032" width="324.367" height="324.367" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="30.8333" result="effect1_foregroundBlur_18_224830" />
                            </filter>
                        </defs>
                    </svg>

                    {benefits.map((item) => (
                        <div
                            key={item.number}
                            className={`${item.className} rounded-xl px-6 py-5.5`}
                        >
                            <p className="text-[1rem] text-[#1F1F1F]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}