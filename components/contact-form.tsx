"use client";

import { FadeIn } from "@/components/reveal";
import clsx from "clsx";
import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emptyState: FormState = {
  name: "",
  email: "",
  company: "",
  interest: "ServiceOS",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>({ ...emptyState });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const disabled = useMemo(() => status === "sending", [status]);

  const update = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback(null);
    setErrors({});

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setFeedback(data.message ?? "Unable to send. Please try again.");
        if (data.errors) {
          setErrors(
            Object.fromEntries(
              Object.entries(data.errors).map(([key, message]) => [
                key,
                Array.isArray(message) ? message[0] : message,
              ]),
            ) as FieldErrors,
          );
        }
        return;
      }

      setStatus("success");
      setFeedback("Received. A Horizon engineer will reach out shortly.");
      setValues({ ...emptyState });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Network error. Please retry or email hello@horizon.systems.");
    }
  };

  return (
    <FadeIn className="card-plain rounded-none md:rounded-lg">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="flex items-baseline justify-between">
          <div>
            <p className="eyebrow">Contact</p>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Start a conversation
            </h3>
          </div>
          <span className="text-xs font-medium text-subtle">No spam. Direct with engineering.</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Name"
            value={values.name}
            onChange={(v) => update("name", v)}
            error={errors.name}
            autoComplete="name"
            required
          />
          <Field
            label="Work email / tel"
            type="email"
            value={values.email}
            onChange={(v) => update("email", v)}
            error={errors.email}
            autoComplete="email"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Company"
            value={values.company}
            onChange={(v) => update("company", v)}
            error={errors.company}
            autoComplete="organization"
            required
          />
          <SelectField
            label="Product interest"
            value={values.interest}
            onChange={(v) => update("interest", v)}
            options={["ServiceOS", "MarketOS", "Partnership", "General"]}
            error={errors.interest}
          />
        </div>
        <div>
          <Field
            label="What do you want to build?"
            value={values.message}
            onChange={(v) => update("message", v)}
            error={errors.message}
            multiline
            required
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={disabled}
            className={clsx(
              "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-colors",
              disabled
                ? "border-border bg-border text-subtle"
                : "border-ink text-ink hover:bg-ink hover:text-surface",
            )}
          >
            {status === "sending" ? "Sending..." : "Send to Horizon"}
          </button>
          <p
            className={clsx(
              "text-sm",
              status === "error" && "text-red-600",
              status === "success" && "text-green-700",
              status === "idle" && "text-subtle",
            )}
            role="status"
            aria-live="polite"
          >
            {feedback ?? "We respond within one business day."}
          </p>
        </div>
      </form>
    </FadeIn>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  multiline,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  multiline?: boolean;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const InputTag = multiline ? "textarea" : "input";

  return (
    <label className="block space-y-2 text-sm font-medium text-ink">
      <span>{label}</span>
      <InputTag
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        autoComplete={autoComplete}
        className={clsx(
          "w-full rounded-none border border-border bg-surface px-3 py-3 text-sm text-ink focus:border-ink focus:outline-none focus:ring-0",
          multiline && "min-h-[140px] resize-vertical leading-relaxed",
        )}
        type={type}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
}) {
  return (
    <label className="block space-y-2 text-sm font-medium text-ink">
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-none border border-border bg-surface px-3 py-3 text-sm text-ink focus:border-ink focus:outline-none focus:ring-0"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </label>
  );
}
