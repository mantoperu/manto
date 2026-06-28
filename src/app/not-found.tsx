import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <LogoMark className="h-16" alt="Manto" />
      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-arcilla-600">
        Error 404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        No encontramos esta página
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        Es posible que el enlace haya cambiado o que la dirección no exista.
        Volvamos a un lugar conocido.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
        <ButtonLink href="/servicios" variant="secondary">
          Ver servicios
        </ButtonLink>
      </div>
      <Link
        href="/contacto"
        className="mt-6 text-sm font-medium text-petroleo hover:underline"
      >
        ¿Necesitas ayuda? Escríbenos
      </Link>
    </Container>
  );
}
