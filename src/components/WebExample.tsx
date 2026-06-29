"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { WebExample as WebExampleType } from "@/lib/services";

/**
 * Ejemplo visual de un servicio dentro de un marco tipo ventana.
 *
 * - Con `host`: se muestra como un sitio web (barra con el dominio y la
 *   captura de página completa dentro de un contenedor scrolleable). Por
 *   defecto el contenido se desplaza solo, lento; al pasar el cursor o tocar,
 *   el usuario toma el control y puede scrollear a gusto. Con
 *   prefers-reduced-motion no hay desplazamiento automático (sigue siendo
 *   scrolleable a mano).
 * - Sin `host`: se muestra como una imagen enmarcada estática.
 *
 * Si `url` está definido, se muestra un botón "Visitar web".
 */

/** Duración de una pasada completa del auto-scroll (ms). Mayor = más lento. */
const SCROLL_DURATION = 42000;

export function WebExample({ example }: { example: WebExampleType }) {
  const isSite = Boolean(example.host);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let paused = false;
    let dir: 1 | -1 = 1; // 1 baja, -1 sube
    let last = performance.now();

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      const max = el.scrollHeight - el.clientHeight;
      if (!paused && max > 0) {
        el.scrollTop += dir * (max / SCROLL_DURATION) * dt;
        if (el.scrollTop >= max) {
          el.scrollTop = max;
          dir = -1;
        } else if (el.scrollTop <= 0) {
          el.scrollTop = 0;
          dir = 1;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    // El usuario toma el control mientras interactúa (hover en escritorio,
    // dedo apoyado en móvil); el auto-scroll se reanuda al soltar.
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      last = performance.now();
      paused = false;
    };
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
    };
  }, [isSite, example.image]);

  return (
    <figure className="overflow-hidden rounded-lg border border-bone-300 bg-bone-50 shadow-sm">
      {/* Barra superior tipo ventana */}
      <div className="flex items-center gap-2 border-b border-bone-300 bg-bone-200/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-arcilla/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-bone-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-petroleo/40" />
        </span>
        {isSite && (
          <span className="ml-2 flex-1 truncate rounded bg-bone-50 px-3 py-1 text-xs text-ink-soft">
            {example.host}
          </span>
        )}
      </div>

      {/* Cuerpo: sitio scrolleable (auto lento + manual), o imagen estática */}
      {isSite ? (
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label={`${example.alt}. Desplázate dentro de la vista previa para recorrer el sitio.`}
          className="h-56 overflow-y-auto overscroll-contain bg-bone-200 sm:h-72"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={example.image}
            alt={example.alt}
            className="block w-full select-none"
            draggable={false}
            loading="lazy"
          />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={example.image}
          alt={example.alt}
          className="block w-full bg-bone-200"
          loading="lazy"
        />
      )}

      {/* Pie: título/subtítulo + botón "Visitar web" */}
      {(example.title || example.subtitle || example.url) && (
        <figcaption className="flex flex-col gap-3 border-t border-bone-300 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          {(example.title || example.subtitle) && (
            <div className="min-w-0">
              {example.title && (
                <p className="truncate font-display text-sm font-semibold text-ink">
                  {example.title}
                </p>
              )}
              {example.subtitle && (
                <p className="truncate text-xs text-ink-muted">
                  {example.subtitle}
                </p>
              )}
            </div>
          )}

          {example.url && (
            <a
              href={example.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-petroleo px-5 py-2 text-sm font-medium text-bone-50 transition-colors duration-300 hover:bg-petroleo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone-50"
            >
              {/* Brillo que cruza al pasar el cursor */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-bone-50/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
              />
              <span className="relative">Visitar web</span>
              {/* La flecha "despega" y otra entra desde abajo-izquierda */}
              <span
                aria-hidden="true"
                className="relative block h-4 w-4 overflow-hidden"
              >
                <ArrowUpRight className="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-4 group-hover:translate-x-4 motion-reduce:transition-none" />
                <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:hidden" />
              </span>
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
