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

    root.setAttribute("data-splash", "1");
    root.style.setProperty("--global-ae-delay", `${duration}ms`);
    root.style.setProperty("--splash-ms", `${duration}ms`);
    body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setShow(false);
      root.removeAttribute("data-splash");
      root.style.setProperty("--global-ae-delay", "0ms");
      body.style.overflow = prevOverflow;
    }, duration);

    return () => {
      clearTimeout(t);
      root.removeAttribute("data-splash");
      root.style.setProperty("--global-ae-delay", "0ms");
      body.style.overflow = prevOverflow;
    };
  }, [duration]);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        overflow: "hidden",
      }}
      className={styles.splashFade}
    >
      <div className={styles.logoInner}>
        <Image
          src={Logo}
          alt="Logo"
          width={320}
          height={120}
          priority
          style={{ display: "block", width: "clamp(200px, 45vw, 360px)", height: "auto" }}
        />
      </div>
    </div>
  );
}