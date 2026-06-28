"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faq";
import { cn } from "@/lib/cn";

/**
 * Lista de preguntas frecuentes en acordeón. Accesible (botón + región con
 * aria-expanded/aria-controls) y con apertura animada. Respeta
 * prefers-reduced-motion. Permite una pregunta abierta a la vez.
 */
export function Faq() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-bone-300 border-y border-bone-300">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                <span className="font-display text-base font-semibold text-ink sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "inline-flex h-8 w-8 flex-none items-center justify-center rounded-md border border-bone-300 text-petroleo transition-all duration-300 group-hover:border-petroleo/40 group-hover:bg-petroleo/5",
                    isOpen && "rotate-45 bg-petroleo/5",
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>

            {reduce ? (
              isOpen && (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5">
                  <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.answer}
                  </p>
                </div>
              )
            ) : (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}
