"use client";

import Seguridad from "@/assets/images/newImage.jpeg";
import { Reveal } from "@/components/animation/Reveal";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SeguridadFisicaCorporativa from "@/assets/images/seguridad-fisica-guardia-3.png";
import SeguridadBarriosCerrados from '@/assets/images/seguridad-fisica-barrios.png';
import CustodiaPersonal from '@/assets/images/custodia-personal.jpg';
import SeguridadIndustrial from '@/assets/images/imagen-monitoreo.png';

import {
    ShieldCheck,
    Siren,
    ClipboardCheck,
    KeyRound,
    Building2,
    Home,
    Factory,
    UserCheck,
    Users,
    Cctv,
    CalendarClock,
    Fence,
    Car,
    Radio,
    Package,
    BriefcaseBusiness,
} from "lucide-react";

const MediaPlaceholder = ({ label }) => (
    <div className="relative w-full h-[240px] rounded-2xl overflow-hidden border border-white/15 bg-white/10 flex items-center justify-center">
        <div className="text-center px-6">
            <p className="text-white font-semibold">{label}</p>
            <p className="text-white/70 text-sm mt-1">(Imagen pendiente)</p>
        </div>
    </div>
);

const FeaturePill = ({ icon: Icon, label, tint = "blue" }) => {
    const tintMap = {
        blue: "bg-blue-50 text-blue-700 border-blue-100",
        indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
        sky: "bg-sky-50 text-sky-700 border-sky-100",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
        violet: "bg-violet-50 text-violet-700 border-violet-100",
        slate: "bg-slate-50 text-slate-700 border-slate-100",
    };

    const styles = tintMap[tint] ?? tintMap.blue;

    return (
        <div className="flex items-center gap-3 rounded-xl border px-4 py-3 bg-white/95">
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
    <span className="text-red-400 font-extrabold leading-none mt-[2px]">✓</span>
);

const TitleWithIcon = ({ icon: Icon, title }) => (
    <div className="flex items-start gap-3">
        <span className="mt-[2px] inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#07142A]/60 ring-1 ring-white/20">
            <Icon className="text-white" size={22} strokeWidth={2.2} />
        </span>
        <h3 className="text-[#07142A] text-xl md:text-2xl font-extrabold leading-tight">
            {title}
        </h3>
    </div>
);

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
    by = "char", // "char" | "word"
}) => {
    const rngFor = (index) => mulberry32(seed + index * 97);

    if (by === "word") {
        const tokens = text.split(/(\s+)/).filter(Boolean);
        let globalIndex = 0;

        return (
            <Tag className={className} aria-label={text}>
                {tokens.map((tok, tokenIdx) => {
                    const isSpace = /^\s+$/.test(tok);

                    if (isSpace) {
                        globalIndex += tok.length;
                        return (
                            <span
                                key={`sp-${tokenIdx}`}
                                className="inline-block w-[0.35em]"
                                aria-hidden="true"
                            >
                                {"\u00A0"}
                            </span>
                        );
                    }

                    const letters = Array.from(tok);

                    return (
                        <span
                            key={`w-${tokenIdx}`}
                            className="inline-block whitespace-nowrap"
                        >
                            {letters.map((ch) => {
                                const idx = globalIndex++;
                                const rng = rngFor(idx);

                                const dx = Math.round((rng() * 2 - 1) * 26);
                                const rot = Math.round((rng() * 2 - 1) * 16);
                                const drop = Math.round(110 + rng() * 120);
                                const dur = Math.round(820 + rng() * 260);
                                const delay = baseDelay + idx * step;

                                return (
                                    <span
                                        key={`${ch}-${idx}`}
                                        className="ae-char inline-block"
                                        style={{
                                            "--dx": `${dx}px`,
                                            "--rot": `${rot}deg`,
                                            "--drop": `${drop}px`,
                                            "--dur": `${dur}ms`,
                                            "--delay": `${delay}ms`,
                                        }}
                                    >
                                        {ch}
                                    </span>
                                );
                            })}
                        </span>
                    );
                })}
            </Tag>
        );
    }

    // by="char"
    const chars = Array.from(text);

    return (
        <Tag className={className} aria-label={text}>
            {chars.map((ch, i) => {
                const isSpace = ch === " ";
                const rng = rngFor(i);

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

export default function Page() {
    const proteccionIntegralPills = [
        { icon: ShieldCheck, label: "Vigilancia especializada", tint: "blue" },
        { icon: Siren, label: "Respuesta inmediata", tint: "emerald" },
        {
            icon: ClipboardCheck,
            label: "Protocolos certificados",
            tint: "indigo",
        },
        { icon: KeyRound, label: "Control de accesos", tint: "violet" },
    ];

    return (
        <section className="bg-[#FAFAFA]">
            <WhatsAppButton />

            <div className="relative w-full h-[320px] md:h-[460px] overflow-hidden">
                <Image
                    src={SeguridadBarriosCerrados}
                    alt="Seguridad Física"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
                    <div className="max-w-4xl">
                        <Reveal hiddenValue={{ opacity: 0, y: 20 }}>
                            <AEText
                                text="Seguridad Física"
                                as="h1"
                                seed={2026}
                                baseDelay={120}
                                step={28}
                                by="char"
                                className="text-white font-extrabold text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                            />

                            <AEText
                                text="Protección confiable con personal capacitado y procedimientos claros. Cobertura y vigilancia profesional con enfoque preventivo."
                                as="p"
                                seed={909}
                                baseDelay={820}
                                step={7}
                                by="word"
                                className="mt-3 mx-auto max-w-3xl text-white/90 text-sm md:text-base leading-relaxed"
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ========== SECCIÓN: Protección Integral ========== */}
            <div className="max-w-5xl mx-auto px-5 py-20">
                <Reveal hiddenValue={{ opacity: 0, y: 40 }}>
                    <h2 className="text-[#07142A] text-3xl md:text-4xl font-bold text-center">
                        Protección Integral para tu Operación
                    </h2>
                    <p className="text-[#5b5b5b] text-center mt-3 max-w-2xl mx-auto">
                        Desarrollamos planes de seguridad física adaptados a
                        cada necesidad. Combinamos personal entrenado,
                        tecnología y respuesta inmediata para mantener tu
                        espacio protegido.
                    </p>
                </Reveal>

                <Reveal hiddenValue={{ opacity: 0, y: 30 }}>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {proteccionIntegralPills.map((p) => (
                            <FeaturePill
                                key={p.label}
                                icon={p.icon}
                                label={p.label}
                                tint={p.tint}
                            />
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* ========== SECCIÓN: Soluciones por Sector ========== */}
            <div>
                <div className="max-w-5xl mx-auto px-5 py-16">
                    <Reveal hiddenValue={{ opacity: 0, y: 40 }}>
                        <h2 className="text-[#07142A] text-3xl md:text-4xl font-bold text-center mb-12 pb-12">
                            Soluciones por Sector
                        </h2>
                    </Reveal>

                    <div className="space-y-14">
                        {/* 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={SeguridadFisicaCorporativa}
                                        alt="Seguridad Corporativa"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div>
                                    <TitleWithIcon
                                        icon={Building2}
                                        title="Seguridad Corporativa y Comercial"
                                    />
                                    <p className="text-white/85 mt-3">
                                        Cobertura para empresas y locaciones
                                        corporativas con control operativo,
                                        supervisión y prevención.
                                    </p>

                                    <ul className="mt-6 space-y-3 text-[#4B5563] text-sm md:text-base">
                                        {[
                                            {
                                                icon: Users,
                                                text: "Personal uniformado en puntos estratégicos",
                                            },
                                            {
                                                icon: Cctv,
                                                text: "Monitoreo en tiempo real y rondas programadas",
                                            },
                                            {
                                                icon: ClipboardCheck,
                                                text: "Registro de movimientos y control de visitantes",
                                            },
                                            {
                                                icon: CalendarClock,
                                                text: "Supervisión constante las 24 horas",
                                            },
                                        ].map((it) => (
                                            <li
                                                key={it.text}
                                                className="flex gap-3"
                                            >
                                                <RedCheck />
                                                <span className="flex items-start gap-2">
                                                    <it.icon
                                                        className="text-white mt-[2px]"
                                                        size={18}
                                                        strokeWidth={2.2}
                                                    />
                                                    <span>{it.text}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-[#4B5563] mt-5 text-sm leading-relaxed">
                                        Diseñamos cada esquema de seguridad en
                                        función del flujo de personas, horarios y
                                        requerimientos operativos.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div className="md:order-2">
                                    <TitleWithIcon
                                        icon={Home}
                                        title="Vigilancia en Barrios Cerrados"
                                    />

                                    <p className="text-[#07142A] font-semibold mt-3">
                                        Seguridad preventiva en urbanizaciones,
                                        con presencia activa y tecnología de
                                        respaldo.
                                    </p>

                                    <ul className="mt-6 space-y-3 text-[#4B5563] text-sm md:text-base">
                                        {[
                                            {
                                                icon: Fence,
                                                text: "Control de accesos y perímetro",
                                            },
                                            {
                                                icon: Car,
                                                text: "Rondas móviles dentro de la urbanización",
                                            },
                                            {
                                                icon: Radio,
                                                text: "Comunicación interna con alerta rápida",
                                            },
                                            {
                                                icon: CalendarClock,
                                                text: "Cobertura permanente para tu tranquilidad",
                                            },
                                        ].map((it) => (
                                            <li
                                                key={it.text}
                                                className="flex gap-3"
                                            >
                                                <RedCheck />
                                                <span className="flex items-start gap-2">
                                                    <it.icon
                                                        className="text-white mt-[2px]"
                                                        size={18}
                                                        strokeWidth={2.2}
                                                    />
                                                    <span>{it.text}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-[#4B5563] font-semibold mt-5 text-sm leading-relaxed">
                                        Nuestro equipo trabaja con
                                        procedimientos claros y supervisión
                                        constante para mantener un entorno
                                        seguro.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="md:order-1 relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={SeguridadBarriosCerrados}
                                        alt="Vigilancia en Barrios Cerrados"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Reveal>
                        </div>

                        {/* 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                             <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={SeguridadIndustrial}
                                        alt="Soluciones para Empresas e Industrias"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Reveal>
                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div>
                                    <TitleWithIcon
                                        icon={Factory}
                                        title="Soluciones para Empresas e Industrias"
                                    />
                                    <p className="text-white/85 mt-3">
                                        Planes de seguridad adaptados a
                                        operaciones industriales, logística,
                                        comercios y edificios.
                                    </p>

                                    <ul className="mt-6 space-y-3 text-[#4B5563] text-sm md:text-base">
                                        {[
                                            {
                                                icon: Factory,
                                                text: "Vigilancia industrial con personal certificado",
                                            },
                                            {
                                                icon: Package,
                                                text: "Protección de mercadería y activos de valor",
                                            },
                                            {
                                                icon: ClipboardCheck,
                                                text: "Control riguroso de personal y contratistas",
                                            },
                                            {
                                                icon: ShieldCheck,
                                                text: "Prevención de pérdidas y control operativo",
                                            },
                                        ].map((it) => (
                                            <li
                                                key={it.text}
                                                className="flex gap-3"
                                            >
                                                <RedCheck />
                                                <span className="flex items-start gap-2">
                                                    <it.icon
                                                        className="text-white mt-[2px]"
                                                        size={18}
                                                        strokeWidth={2.2}
                                                    />
                                                    <span>{it.text}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-[#4B5563] font-semibold mt-5 text-sm leading-relaxed">
                                        Analizamos el entorno, definimos puntos
                                        de control y aplicamos un esquema de
                                        supervisión para sostener la continuidad
                                        operativa.
                                    </p>
                                </div>
                            </Reveal>

                           
                        </div>

                        {/* 4 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                          

                            <Reveal hiddenValue={{ opacity: 0, x: -60 }}>
                                <div className="md:order-2">
                                    <TitleWithIcon
                                        icon={UserCheck}
                                        title="Protección y Vigilancia Personal"
                                    />

                                    <p className="text-[#07142A] mt-3 font-semibold">
                                        Custodia preventiva para ejecutivos,
                                        personalidades públicas y situaciones de
                                        exposición.
                                    </p>

                                    <ul className="mt-6 space-y-3 text-[#4B5563] text-sm md:text-base">
                                        {[
                                            {
                                                icon: UserCheck,
                                                text: "Acompañamiento con criterio y discreción",
                                            },
                                            {
                                                icon: BriefcaseBusiness,
                                                text: "Cobertura para traslados y actividades",
                                            },
                                            {
                                                icon: ShieldCheck,
                                                text: "Evaluación de riesgos y rutas seguras",
                                            },
                                        ].map((it) => (
                                            <li
                                                key={it.text}
                                                className="flex gap-3"
                                            >
                                                <RedCheck />
                                                <span className="flex items-start gap-2">
                                                    <it.icon
                                                        className="text-white mt-[2px]"
                                                        size={18}
                                                        strokeWidth={2.2}
                                                    />
                                                    <span>{it.text}</span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-[#4B5563] font-semibold mt-5 text-sm leading-relaxed">
                                        Nuestro objetivo es brindar tranquilidad
                                        y confianza con protocolos claros y
                                        respuesta coordinada.
                                    </p>
                                </div>
                            </Reveal>
                              <Reveal hiddenValue={{ opacity: 0, x: 60 }}>
                                <div className="md:order-1 relative h-[240px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={CustodiaPersonal}
                                        alt="Protección y Vigilancia Personal"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}