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

const serviceOptions = [
  ...services.map((s) => s.shortTitle),
  "Aún no lo tengo claro",
];

const contactOptions = ["WhatsApp", "Llamada telefónica", "Correo electrónico"];

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
      const firstKey = Object.keys(found)[0];
      const el = document.getElementById(`field-${firstKey}`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
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
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="field-name" label="Nombre" error={errors.name} required>
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

        <Field id="field-business" label="Negocio" error={errors.business} required>
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

      <ChipGroup
        id="field-service"
        legend="¿Qué servicio te interesa?"
        name="service"
        options={serviceOptions}
        value={values.service}
        onChange={(v) => update("service", v)}
        error={errors.service}
        required
      />

      <ChipGroup
        id="field-contactPref"
        legend="¿Cómo prefieres que te contactemos?"
        name="contactPref"
        options={contactOptions}
        value={values.contactPref}
        onChange={(v) => update("contactPref", v)}
        error={errors.contactPref}
        required
      />

      <Field id="field-message" label="Cuéntanos qué necesitas" error={errors.message} required>
        <textarea
          id="field-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          className={cn(fieldClass(!!errors.message), "resize-y")}
          placeholder="¿Qué hace tu negocio? ¿Qué problema quieres resolver? Cualquier detalle útil nos ayuda a darte una mejor respuesta."
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

/** Selector de una opción presentado como chips (radios accesibles). */
function ChipGroup({
  id,
  legend,
  name,
  options,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  const errorId = `error-${id.replace("field-", "")}`;
  return (
    <fieldset id={id} tabIndex={-1} className="focus:outline-none">
      <legend className="text-sm font-medium text-ink">
        {legend}
        {required && <span className="ml-0.5 text-arcilla-500">*</span>}
      </legend>
      <div
        className="mt-2.5 flex flex-wrap gap-2"
        role="radiogroup"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      >
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={cn(
                "cursor-pointer select-none rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-petroleo has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-bone",
                selected
                  ? "border-petroleo bg-petroleo text-bone-50 shadow-sm shadow-petroleo/20"
                  : "border-bone-300 bg-bone-50 text-ink-muted hover:border-petroleo/40 hover:text-ink",
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error && (
        <p
          id={errorId}
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-arcilla-600"
        >
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </fieldset>
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
