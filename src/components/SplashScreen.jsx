import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import styles from "./SplashScreen.module.css";

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
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";

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
    <div className={styles.splash} aria-hidden="true">
      <div className={styles.logoWrap}>
        <Image
          src={Logo}
          alt="Logo"
          width={320}
          height={120}
          priority
          className={styles.logoImg}
        />
      </div>
    </div>
  );
}