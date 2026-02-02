"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LogoLatinSec from "@/assets/images/logo-icon.png";

export default function SplashScreen({ duration = 3000 }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        const prevOverflow = body.style.overflow;
        const prevPaddingRight = body.style.paddingRight;

        root.setAttribute("data-splash", "1");
        root.style.setProperty("--global-ae-delay", `${duration}ms`);
        root.style.setProperty("--splash-ms", `${duration}ms`);

        const scrollbarWidth = window.innerWidth - root.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight =
            scrollbarWidth > 0 ? `${scrollbarWidth}px` : "0px";

        const t = setTimeout(() => {
            setShow(false);

            root.removeAttribute("data-splash");
            root.style.setProperty("--global-ae-delay", "0ms");

            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPaddingRight;
        }, duration);

        return () => {
            clearTimeout(t);
            root.removeAttribute("data-splash");
            root.style.setProperty("--global-ae-delay", "0ms");
            body.style.overflow = prevOverflow;
            body.style.paddingRight = prevPaddingRight;
        };
    }, [duration]);

    if (!show) return null;

    return (
        <div className="ls-splash" aria-hidden="true">
            <div className="ls-stage">
                <div className="ls-wordWrap">
                    <div className="ls-word">
                        <span className="ls-latin">Latin</span>
                        <span className="ls-sec">Sec</span>
                    </div>
                    <div className="ls-tag">COMPAÑÍA DE SEGURIDAD</div>
                </div>

                <div className="ls-iconWrap">
                    <div className="ls-iconCrop">
                        <Image
                            src={LogoLatinSec}
                            alt="LatinSec"
                            fill
                            priority
                            className="ls-iconImg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
