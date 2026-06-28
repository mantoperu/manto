"use client";

import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl, defaultQuoteMessage } from "@/lib/site";

/**
 * Botón flotante de WhatsApp: discreto, fijo en la esquina y accesible.
 * Aparece con una animación suave y reacciona al cursor.
 */
export function WhatsAppFloat() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={whatsappUrl(defaultQuoteMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-petroleo px-4 py-3 text-bone-50 shadow-lg shadow-petroleo/20 transition-colors hover:bg-petroleo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
      initial={reduce ? false : { opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      whileTap={reduce ? undefined : { scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </motion.a>
  );
}
