"use client";

import { AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent, type ReactNode } from "react";
import { business, services } from "@/data/site";
import { buttonClass, cn } from "@/components/ui";

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };
type FieldName = keyof typeof emptyForm;
type FormErrors = Partial<Record<FieldName, string>>;

const fieldOrder: FieldName[] = ["name", "email", "phone", "service", "message"];

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (name) {
    case "name":
      return trimmed ? undefined : "Please tell us your name.";
    case "email":
      if (!trimmed) return "Please enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? undefined : "That email address doesn't look right.";
    case "phone": {
      if (!trimmed) return "Please enter a phone number.";
      return /^1?\d{10}$/.test(trimmed.replace(/\D/g, "")) ? undefined : "Please enter a 10-digit phone number.";
    }
    case "service":
      return trimmed ? undefined : "Please choose a service.";
    case "message":
      return trimmed.length >= 10 ? undefined : "A sentence or two about the project helps.";
  }
}

const inputClass =
  "w-full border bg-background px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted hover:border-foreground/50";

function Field({ name, label, error, children }: { name: FieldName; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700 dark:text-red-300">
          <AlertCircle aria-hidden className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    setValues((current) => ({ ...current, [name]: event.target.value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validateField(name, event.target.value) }));
  }

  function onBlur(event: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    setErrors((current) => ({ ...current, [name]: validateField(name, event.target.value) }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    for (const name of fieldOrder) nextErrors[name] = validateField(name, values[name]);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      (formRef.current?.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    setSubmittedName(values.name.trim());
    setValues(emptyForm);
    setErrors({});
  }

  const fieldProps = (name: FieldName) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    onBlur,
    required: true,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: cn(inputClass, errors[name] ? "border-red-700 dark:border-red-300" : "border-foreground/30"),
  });

  if (submittedName !== null) {
    return (
      <div role="status" className="bg-surface p-8 sm:p-10">
        <CheckCircle2 aria-hidden className="size-10 text-accent" />
        <h2 className="mt-4 text-3xl">Looks good, {submittedName}.</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          This form is a design preview and isn&apos;t connected yet, so nothing was sent. To reach {business.ownerFirstName} today, call{" "}
          <a href={business.phoneHref} className="font-semibold text-accent underline underline-offset-4">
            {business.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSubmittedName(null)} className={buttonClass("outline", "mt-6 cursor-pointer")}>
          Fill it in again
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <Field name="name" label="Your name" error={errors.name}>
        <input type="text" autoComplete="name" {...fieldProps("name")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="email" label="Email" error={errors.email}>
          <input type="email" autoComplete="email" {...fieldProps("email")} />
        </Field>
        <Field name="phone" label="Phone" error={errors.phone}>
          <input type="tel" autoComplete="tel" {...fieldProps("phone")} />
        </Field>
      </div>
      <Field name="service" label="What do you need done?" error={errors.service}>
        <div className="relative">
          <select {...fieldProps("service")} className={cn(fieldProps("service").className, "cursor-pointer appearance-none pr-11")}>
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
          <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-muted" />
        </div>
      </Field>
      <Field name="message" label="Tell us about the project" error={errors.message}>
        <textarea rows={5} {...fieldProps("message")} />
      </Field>
      <button type="submit" className={buttonClass("primary", "w-full cursor-pointer sm:w-auto")}>
        Request my free quote
      </button>
    </form>
  );
}
