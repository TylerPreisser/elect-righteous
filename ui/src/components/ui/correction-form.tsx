"use client";

import { useState } from "react";
import { FEEDBACK_EMAIL } from "@/lib/config";

interface CorrectionFormProps {
  candidateName: string;
}

export default function CorrectionForm({ candidateName }: CorrectionFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const emailSubject = `Elect Righteous - Correction for ${candidateName}`;
  const mailtoHref = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(emailSubject)}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.set("_subject", emailSubject);
    formData.set("_captcha", "false");
    formData.set("_template", "table");
    formData.set("candidate", candidateName);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === "true")) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-md p-6 text-center sm:p-8"
        style={{ backgroundColor: "#f0fdf9", border: "1px solid rgba(28, 195, 175, 0.3)" }}
      >
        <p className="mb-1 font-heading text-lg font-bold" style={{ color: "var(--color-navy)" }}>
          Thank you!
        </p>
        <p className="font-body text-sm" style={{ color: "var(--color-slate)" }}>
          Your submission has been received. We&apos;ll review it and update this profile if needed.
        </p>
      </div>
    );
  }

  return (
    <section
      className="mt-10 rounded-md p-6 sm:p-8"
      style={{ backgroundColor: "#f8f9fa", border: "1px solid #e2e8f0" }}
      aria-labelledby="correction-form-heading"
    >
      <h2
        id="correction-form-heading"
        className="mb-1 font-heading text-lg font-bold"
        style={{ color: "var(--color-navy)" }}
      >
        Is Something Wrong or Missing?
      </h2>
      <p
        className="mb-6 font-body text-sm leading-relaxed"
        style={{ color: "var(--color-slate)" }}
      >
        If you are {candidateName} or represent their campaign, or if you have a correction or
        additional information, let us know. We want to get this right.
      </p>

      <form
        action={`https://formsubmit.co/${FEEDBACK_EMAIL}`}
        method="POST"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="_subject" value={emailSubject} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="candidate" value={candidateName} />

        <div>
          <label
            htmlFor="correction-name"
            className="mb-1.5 block font-heading text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-navy)" }}
          >
            Your Name
          </label>
          <input
            type="text"
            id="correction-name"
            name="name"
            required
            className="w-full rounded-md border px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label
            htmlFor="correction-email"
            className="mb-1.5 block font-heading text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-navy)" }}
          >
            Email
          </label>
          <input
            type="email"
            id="correction-email"
            name="email"
            required
            className="w-full rounded-md border px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="correction-relationship"
            className="mb-1.5 block font-heading text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-navy)" }}
          >
            Your Relationship to This Candidate
          </label>
          <select
            id="correction-relationship"
            name="relationship"
            required
            className="w-full rounded-md border px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
          >
            <option value="">Select one...</option>
            <option value="I am this candidate">I am this candidate</option>
            <option value="I represent this candidate's campaign">I represent this candidate&apos;s campaign</option>
            <option value="Local voter with information">I&apos;m a local voter with information</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="correction-message"
            className="mb-1.5 block font-heading text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-navy)" }}
          >
            What Should We Change or Add?
          </label>
          <textarea
            id="correction-message"
            name="message"
            required
            rows={4}
            className="w-full resize-y rounded-md border px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#d1d5db",
              color: "var(--color-charcoal)",
              backgroundColor: "white",
            }}
            placeholder="Tell us what's incorrect, missing, or needs to be updated..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="min-h-11 w-full rounded-md px-6 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50 sm:w-auto sm:self-start"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          {submitting ? "Sending..." : "Submit Correction"}
        </button>

        {error && (
          <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-red-flag)", overflowWrap: "anywhere" }}>
            Something went wrong. Please try again or{" "}
            <a className="font-semibold underline" href={mailtoHref}>
              email us directly at {FEEDBACK_EMAIL}
            </a>
            .
          </p>
        )}
      </form>
    </section>
  );
}
