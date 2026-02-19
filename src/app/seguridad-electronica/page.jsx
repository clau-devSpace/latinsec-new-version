import SeguridadElectronica from "@/assets/images/seguridad-electronica.jpg";

// ✅ Imágenes reales
import CamarasImg from "@/assets/images/camaras-de-seguridad.jpg";
import AlarmasImg from "@/assets/images/sistemas-de-alarmas-inteligentes.jpg";
import TotemImg from "@/assets/images/totem-vigilador-virtual.jpg";
import AccesosImg from "@/assets/images/control-de-accesos-biometricos-y-digital.jpg";

import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/animation/Reveal";
import * as Icons from "lucide-react";

const DroneIcon =
    Icons.Drone ?? Icons.PlaneTakeoff ?? Icons.Plane ?? Icons.Airplay;

function mulberry32(seed) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const AEText = ({
    text,
    as: Tag = "div",
    className = "",
    baseDelay = 0,
    step = 28,
    seed = 1337,
}) => {
    const chars = Array.from(text);

    return (
        <Tag className={className} aria-label={text}>
            {chars.map((ch, i) => {
                const isSpace = ch === " ";

                const rng = mulberry32(seed + i * 97);

                const dx = Math.round((rng() * 2 - 1) * 26);
                const rot = Math.round((rng() * 2 - 1) * 16);
                const drop = Math.round(110 + rng() * 120);
                const dur = Math.round(820 + rng() * 260);

                const delay = baseDelay + i * step;

                return (
                    <span
                        key={`${ch}-${i}`}
                        className={[
                            "ae-char inline-block",
                            isSpace ? "w-[0.35em]" : "",
                        ].join(" ")}
                        style={{
                            "--dx": `${isSpace ? 0 : dx}px`,
                            "--rot": `${isSpace ? 0 : rot}deg`,
                            "--drop": `${drop}px`,
                            "--dur": `${dur}ms`,
                            "--delay": `${delay}ms`,
                        }}
                    >
                        {isSpace ? "\u00A0" : ch}
                    </span>
                );
            })}
        </Tag>
    );
};

const FeaturePill = ({ icon: Icon, label, tint = "blue" }) => {
    const tintMap = {
        blue: "bg-blue-50 text-blue-700 border-blue-100",
        amber: "bg-amber-50 text-amber-700 border-amber-100",
        purple: "bg-purple-50 text-purple-700 border-purple-100",
        sky: "bg-sky-50 text-sky-700 border-sky-100",
        rose: "bg-rose-50 text-rose-700 border-rose-100",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    };
    const styles = tintMap[tint] ?? tintMap.blue;

    return (
        <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#FAFAFA] px-4 py-3 transition hover:-translate-y-[1px] hover:shadow-sm">
            <div
                className={`h-10 w-10 rounded-lg border flex items-center justify-center ${styles}`}
            >
                <Icon size={22} strokeWidth={2.2} />
            </div>
            <p className="text-[#252B42] font-semibold text-sm">{label}</p>
        </div>
    );
};

const RedCheck = () => (
    <span className="text-red-500 font-extrabold leading-none mt-[2px]">✓</span>
);

const SectionTitle = ({ Icon, title }) => (
    <div className="flex items-start gap-3">
        <span className="mt-[2px] inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <Icon className="h-5 w-5 text-white" strokeWidth={2.2} />
        </span>
        <h3 className="text-[#07142A] text-xl md:text-2xl font-extrabold">
            {title}
        </h3>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="mt-6 space-y-3 text-[#4B5563] text-sm md:text-base">
        {items.map((it) => (
            <li key={it.text} className="flex gap-3">
                <RedCheck />
                <span className="flex items-start gap-2">
                    <it.icon
                        className="text-[#e63946] mt-[2px]"
                        size={18}
                        strokeWidth={2.2}
                    />
                    <span>{it.text}</span>
                </span>
            </li>
        ))}
    </ul>
);

const MediaPhoto = ({ src, alt }) => {
    return (
        <div className="relative z-10 flex justify-center md:justify-center">
            <Image
                src={src}
                alt={alt}
                className="
          mx-auto
          w-auto max-w-full
          h-auto
          max-h-[240px] sm:max-h-[260px] md:max-h-[280px]
          rounded-2xl
          object-contain
          transition duration-300 ease-out
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:shadow-[0_18px_55px_rgba(0,0,0,0.28)]
        "
                sizes="(max-width: 768px) 92vw, 420px"
                priority={false}
            />
        </div>
    );
};

export default function Page() {
    const {
        Radar,
        BellRing,
        Video,
        Globe,
        Bot,
        ShieldCheck,
        Cctv,
        MonitorSmartphone,
        Fingerprint,
        Smartphone,
        Wifi,
        Siren,
        Bell,
        Eye,
        Moon,
        ScanFace,
        KeyRound,
        Server,
        Clock,
        Lock,
        Camera,
        HardDrive,
        CreditCard,
    } = Icons;

    const features = [
        { icon: Radar, label: "Alarmas Monitoreadas", tint: "blue" },
        { icon: BellRing, label: "Cercos Perimetrales Electrificados", tint: "amber" },
        { icon: Video, label: "Sistemas de videovigilancia con analítica con IA Aplicada", tint: "purple" },
        { icon: Globe, label: "Acceso online", tint: "sky" },
        { icon: Bot, label: "Control de rondas inteligentes", tint: "rose" },
        { icon: DroneIcon, label: "Controles de acceso inteligente", tint: "emerald" },
    ];

    const alarmasBullets = [
        { icon: Radar, text: "Sensores de movimiento de alta precisión" },
        {
            icon: KeyRound,
            text: "Activación y desactivación mediante códigos personalizados",
        },
        {
            icon: Bell,
            text: "Notificaciones inmediatas a dispositivos móviles",
        },
        { icon: Server, text: "Integración con sistemas de monitoreo 24/7" },
    ];

    const camarasBullets = [
        { icon: Camera, text: "Cámaras IP de alta definición" },
        { icon: HardDrive, text: "Sistemas CCTV con grabación continua" },
        {
            icon: Smartphone,
            text: "Acceso remoto desde PC y dispositivos móviles",
        },
        { icon: Moon, text: "Visión nocturna y detección de movimiento" },
    ];

    const totemBullets = [
        { icon: Eye, text: "Vigilador en vivo" },
        { icon: MonitorSmartphone, text: "Pantalla HD integrada" },
        { icon: Wifi, text: "Audio bidireccional" },
        { icon: Clock, text: "Activación automática" },
        { icon: Lock, text: "Control de acceso" },
        { icon: Siren, text: "Respuesta inmediata" },
    ];

    const accesosBullets = [
        { icon: CreditCard, text: "Tarjetas inteligentes" },
        { icon: Fingerprint, text: "Lectores de huellas" },
        { icon: ScanFace, text: "Reconocimiento facial" },
    ];

    return (
        <section className="bg-[#FAFAFA]">
            <WhatsAppButton />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @keyframes aeFall {
              0% {
                opacity: 0;
                transform: translate3d(var(--dx), calc(-1 * var(--drop)), 0) rotate(var(--rot)) scale(1.12);
                filter: blur(10px);
              }
              55% {
                opacity: 1;
                transform: translate3d(0px, 14px, 0) rotate(calc(var(--rot) * -0.35)) scale(1);
                filter: blur(0);
              }
              78% { transform: translate3d(0px, -7px, 0) rotate(calc(var(--rot) * 0.12)); }
              92% { transform: translate3d(0px, 3px, 0) rotate(calc(var(--rot) * -0.06)); }
              100% {
                opacity: 1;
                transform: translate3d(0px, 0px, 0) rotate(0deg) scale(1);
                filter: blur(0);
              }
            }
            .ae-char {
              animation: aeFall var(--dur) cubic-bezier(.2,.9,.2,1) both;
              animation-delay: var(--delay);
              will-change: transform, opacity, filter;
            }
            @media (prefers-reduced-motion: reduce) {
              .ae-char { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
            }
          `,
                }}
            />

            {/* HERO */}
            <section className="bg-[#FAFAFA] relative h-screen">
                <Image
                    src={SeguridadElectronica}
                    alt="Seguridad Electrónica"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-5xl mx-auto w-full px-5">
                        <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
                            Seguridad Electrónica
                        </h1>
                        <p className="text-white/90 py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] text-sm md:text-base leading-relaxed">
                            Equipos de seguridad de alta tecnología con monitoreo remoto las 24 horas del día, los 365 días del año.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16">
                <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
                    <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-8 md:p-10">
                        <h2 className="text-[#252B42] text-2xl md:text-3xl font-bold">
                            Tecnología Avanzada
                        </h2>

                        <p className="text-[#5b5b5b] mt-4 leading-relaxed text-sm sm:text-base">
                            Nuestros sistemas de seguridad electrónica
                            incorporan la más avanzada tecnología para brindar
                            protección integral y monitoreo continuo.
                        </p>

                        <p className="text-[#5b5b5b] mt-4 leading-relaxed text-sm sm:text-base">
                            Trabajamos con equipos de última generación que
                            permiten el control y monitoreo remoto desde
                            cualquier lugar del mundo.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f) => (
                                <FeaturePill
                                    key={f.label}
                                    icon={f.icon}
                                    label={f.label}
                                    tint={f.tint}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ESPECIALIDADES */}
            <div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
                    <Reveal hiddenValue={{ opacity: 0, y: 20 }}>
                        <div className="text-center mb-10 md:mb-12">
                            <h2 className="text-[#07142A] text-3xl md:text-5xl font-extrabold">
                                Nuestras Especialidades
                            </h2>
                            <p className="text-[#07142A] mt-3 text-sm md:text-base">
                                Servicios de Seguridad Electrónica adaptados a
                                diferentes sectores y necesidades.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-12">
                        {/* 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:px-6 lg:px-10">
                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div>
                                    <SectionTitle
                                        Icon={ShieldCheck}
                                        title="Sistemas de Alarmas Inteligentes"
                                    />
                                    <p className="text-[#07142A] mt-3 text-sm md:text-base">
                                        Tecnología de última generación para la
                                        detección temprana de intrusos y
                                        protección integral.
                                    </p>
                                    <BulletList items={alarmasBullets} />
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <MediaPhoto
                                    src={AlarmasImg}
                                    alt="Sistemas de Alarmas Inteligentes"
                                />
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:px-6 lg:px-10">
                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="md:order-1">
                                    <MediaPhoto
                                        src={CamarasImg}
                                        alt="Cámaras de Seguridad"
                                    />
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div className="md:order-2">
                                    <SectionTitle
                                        Icon={Cctv}
                                        title="Cámaras de Seguridad"
                                    />
                                    <p className="text-[#07142A] mt-3 text-sm md:text-base">
                                        Cámaras IP/CCTV con acceso remoto para
                                        monitoreo continuo.
                                    </p>
                                    <BulletList items={camarasBullets} />
                                </div>
                            </Reveal>
                        </div>

                        {/* 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:px-6 lg:px-10">
                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div>
                                    <SectionTitle
                                        Icon={MonitorSmartphone}
                                        title="Totem Vigilador Virtual"
                                    />
                                    <p className="text-[#07142A] mt-3 text-sm md:text-base">
                                        Combina tecnologías avanzadas y un
                                        diseño robusto para brindar máxima
                                        seguridad.
                                    </p>
                                    <BulletList items={totemBullets} />
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <MediaPhoto
                                    src={TotemImg}
                                    alt="Totem Vigilador Virtual"
                                />
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:px-6 lg:px-10">
                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="md:order-1">
                                    <MediaPhoto
                                        src={AccesosImg}
                                        alt="Control de Accesos Biométrico y Digital"
                                    />
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div className="md:order-2">
                                    <SectionTitle
                                        Icon={Fingerprint}
                                        title="Control de Accesos Biométrico y Digital"
                                    />
                                    <p className="text-[#07142A] mt-3 text-sm md:text-base">
                                        Sistemas avanzados con múltiples métodos
                                        de identificación.
                                    </p>
                                    <BulletList items={accesosBullets} />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}