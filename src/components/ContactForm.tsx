"use client";

import { useState } from "react";
import { MessageCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

type Fields = {
  name: string;
  business: string;
  service: string;
  contactPref: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const contactOptions = [
  "WhatsApp",
  "Llamada telefónica",
  "Correo electrónico",
];

const initial: Fields = {
  name: "",
  business: "",
  service: "",
  contactPref: "WhatsApp",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);

  function validate(v: Fields): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Cuéntanos tu nombre.";
    if (!v.business.trim()) e.business = "Indica el nombre de tu negocio.";
    if (!v.service) e.service = "Elige el servicio que te interesa.";
    if (!v.message.trim() || v.message.trim().length < 10)
      e.message = "Describe brevemente lo que necesitas (mínimo 10 caracteres).";
    if (!v.contactPref) e.contactPref = "Elige cómo prefieres que te contactemos.";
    return e;
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched) setErrors(validate(next));
  }

  function buildMessage(v: Fields): string {
    return [
      "Hola Manto 👋, quiero solicitar una cotización.",
      "",
      `• Nombre: ${v.name.trim()}`,
      `• Negocio: ${v.business.trim()}`,
      `• Servicio de interés: ${v.service}`,
      `• Medio de contacto preferido: ${v.contactPref}`,
      "",
      "Lo que necesito:",
      v.message.trim(),
    ].join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Lleva el foco al primer campo con error.
      const firstKey = Object.keys(found)[0];
      const el = document.getElementById(`field-${firstKey}`);
      el?.focus();
      return;
    }
    const url = whatsappUrl(buildMessage(values));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldClass = (hasError?: boolean) =>
    cn(
      "mt-1.5 block w-full rounded border bg-bone-50 px-3.5 py-2.5 text-sm text-ink shadow-sm transition-colors placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-petroleo",
      hasError ? "border-arcilla-500" : "border-bone-300 focus:border-petroleo",
    );

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="field-name"
          label="Nombre"
          error={errors.name}
          required
        >
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={fieldClass(!!errors.name)}
            placeholder="Tu nombre"
          />
        </Field>

        <Field
          id="field-business"
          label="Negocio"
          error={errors.business}
          required
        >
          <input
            id="field-business"
            name="business"
            type="text"
            autoComplete="organization"
            value={values.business}
            onChange={(e) => update("business", e.target.value)}
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "error-business" : undefined}
            className={fieldClass(!!errors.business)}
            placeholder="Nombre de tu negocio"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="field-service"
          label="Servicio de interés"
          error={errors.service}
          required
        >
          <select
            id="field-service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "error-service" : undefined}
            className={fieldClass(!!errors.service)}
          >
            <option value="" disabled>
              Elige un servicio
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Aún no lo tengo claro">Aún no lo tengo claro</option>
          </select>
        </Field>

        <Field
          id="field-contactPref"
          label="Medio de contacto preferido"
          error={errors.contactPref}
          required
        >
          <select
            id="field-contactPref"
            name="contactPref"
            value={values.contactPref}
            onChange={(e) => update("contactPref", e.target.value)}
            aria-invalid={!!errors.contactPref}
            aria-describedby={
              errors.contactPref ? "error-contactPref" : undefined
            }
            className={fieldClass(!!errors.contactPref)}
          >
            {contactOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="field-message"
        label="Descripción"
        error={errors.message}
        required
      >
        <textarea
          id="field-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          className={cn(fieldClass(!!errors.message), "resize-y")}
          placeholder="Cuéntanos qué necesitas: qué hace tu negocio, qué problema quieres resolver y cualquier detalle útil."
        />
      </Field>

      <div className="rounded border border-bone-300 bg-bone-200/50 px-4 py-3 text-sm text-ink-muted">
        Al enviar, se abrirá WhatsApp con tu solicitud ya redactada para que la
        envíes. No se guarda ninguna información en un servidor.
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Enviar por WhatsApp
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const errorId = `error-${id.replace("field-", "")}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-arcilla-500">*</span>}
      </label>
      {children}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-arcilla-600"
        >
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
